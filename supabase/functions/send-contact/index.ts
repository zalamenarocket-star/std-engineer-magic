import { createClient } from "npm:@supabase/supabase-js@2";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? Deno.env.get("VITE_SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const SMTP_PASSWORD = Deno.env.get("SMTP_PASSWORD");

const SMTP_HOST = "pop.stdengenharia.com.br";
const SMTP_PORT = 465;
const SMTP_USER = "noreplay@stdengenharia.com.br";
const RECIPIENT_EMAIL = "std@stdengenharia.com.br";

const jsonResponse = (body: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const sanitizeText = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().replace(/\s+/g, " ").slice(0, maxLength) : "";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Método não permitido." }, 405);
  }

  try {
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      console.error("Missing backend credentials.");
      return jsonResponse({ error: "Serviço indisponível no momento." }, 500);
    }

    const body = await req.json();
    const name = sanitizeText(body.name, 100);
    const company = sanitizeText(body.company, 100);
    const email = sanitizeText(body.email, 255).toLowerCase();
    const phone = sanitizeText(body.phone, 20);
    const service = sanitizeText(body.service, 100);
    const message = sanitizeText(body.message, 1000);

    if (!name || !email || !phone || !service) {
      return jsonResponse({ error: "Campos obrigatórios não preenchidos." }, 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return jsonResponse({ error: "E-mail inválido." }, 400);
    }

    const phoneClean = phone.replace(/\D/g, "");
    if (phoneClean.length < 10 || phoneClean.length > 13) {
      return jsonResponse({ error: "Telefone inválido." }, 400);
    }

    // Save to database
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { error: dbError } = await supabase.from("contact_submissions").insert({
      name,
      company: company || null,
      email,
      phone,
      service,
      message: message || null,
    });

    if (dbError) {
      console.error("Database insert error:", dbError);
    }

    // Send email via SMTP
    if (SMTP_PASSWORD) {
      try {
        const client = new SMTPClient({
          connection: {
            hostname: SMTP_HOST,
            port: SMTP_PORT,
            tls: true,
            auth: {
              username: SMTP_USER,
              password: SMTP_PASSWORD,
            },
          },
        });

        const htmlBody = `
          <h2>Novo Lead - STD Standard Engenharia</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Nome</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Empresa</td><td style="padding:8px;border:1px solid #ddd;">${company || "—"}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">E-mail</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefone</td><td style="padding:8px;border:1px solid #ddd;">${phone}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Serviço</td><td style="padding:8px;border:1px solid #ddd;">${service}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Mensagem</td><td style="padding:8px;border:1px solid #ddd;">${message || "—"}</td></tr>
          </table>
          <p style="color:#888;font-size:12px;margin-top:16px;">Enviado pelo formulário do site STD Standard Engenharia</p>
        `;

        await client.send({
          from: SMTP_USER,
          to: RECIPIENT_EMAIL,
          subject: `Novo Lead: ${name} - ${service}`,
          content: "auto",
          html: htmlBody,
        });

        await client.close();
        console.log("Email sent successfully via SMTP");
      } catch (smtpError) {
        console.error("SMTP send error:", smtpError);
        // Don't fail the request if email fails but DB succeeded
      }
    } else {
      console.warn("SMTP_PASSWORD not configured, skipping email send");
    }

    return jsonResponse({ success: true });
  } catch (error) {
    console.error("Unexpected error:", error);
    return jsonResponse({ error: "Erro interno." }, 500);
  }
});
