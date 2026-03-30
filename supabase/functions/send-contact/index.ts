import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? Deno.env.get("VITE_SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const RECIPIENT_EMAIL = "zalamenarocket@gmail.com";

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

    // Send email via Resend API
    if (RESEND_API_KEY) {
      try {
        const htmlBody = `
          <h2 style="color:#0a1628;font-family:Arial,sans-serif;">Novo Lead - STD Standard Engenharia</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:Arial,sans-serif;">
            <tr><td style="padding:10px 12px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5;width:140px;">Nome</td><td style="padding:10px 12px;border:1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding:10px 12px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5;">Empresa</td><td style="padding:10px 12px;border:1px solid #ddd;">${company || "—"}</td></tr>
            <tr><td style="padding:10px 12px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5;">E-mail</td><td style="padding:10px 12px;border:1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:10px 12px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5;">Telefone</td><td style="padding:10px 12px;border:1px solid #ddd;"><a href="https://wa.me/55${phoneClean}">${phone}</a></td></tr>
            <tr><td style="padding:10px 12px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5;">Serviço</td><td style="padding:10px 12px;border:1px solid #ddd;">${service}</td></tr>
            <tr><td style="padding:10px 12px;border:1px solid #ddd;font-weight:bold;background:#f5f5f5;">Mensagem</td><td style="padding:10px 12px;border:1px solid #ddd;">${message || "—"}</td></tr>
          </table>
          <p style="color:#888;font-size:12px;margin-top:20px;font-family:Arial,sans-serif;">Enviado pelo formulário do site STD Standard Engenharia</p>
        `;

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "STD Engenharia <onboarding@resend.dev>",
            to: [RECIPIENT_EMAIL],
            subject: `Novo Lead: ${name} - ${service}`,
            html: htmlBody,
            reply_to: email,
          }),
        });

        const resData = await res.json();
        if (res.ok) {
          console.log("Email sent via Resend:", resData.id);
        } else {
          console.error("Resend error:", JSON.stringify(resData));
        }
      } catch (emailError) {
        console.error("Email send error:", emailError);
      }
    } else {
      console.warn("RESEND_API_KEY not configured");
    }

    return jsonResponse({ success: true });
  } catch (error) {
    console.error("Unexpected error:", error);
    return jsonResponse({ error: "Erro interno." }, 500);
  }
});
