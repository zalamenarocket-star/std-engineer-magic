const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const WEBHOOK_URL = "https://sites-clientes-n8n.stpanz.easypanel.host/webhook/std-contato";

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

    // Send all data to webhook
    const webhookPayload = {
      name,
      company: company || null,
      email,
      phone,
      service,
      message: message || null,
      submitted_at: new Date().toISOString(),
    };

    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(webhookPayload),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Webhook error:", res.status, errorText);
      return jsonResponse({ error: "Erro ao enviar dados." }, 502);
    }

    console.log("Webhook sent successfully");
    return jsonResponse({ success: true });
  } catch (error) {
    console.error("Unexpected error:", error);
    return jsonResponse({ error: "Erro interno." }, 500);
  }
});
