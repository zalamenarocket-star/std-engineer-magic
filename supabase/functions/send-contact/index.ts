import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? Deno.env.get("VITE_SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

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
      console.error("Missing backend credentials for send-contact function.");
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

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { error } = await supabase.from("contact_submissions").insert({
      name,
      company: company || null,
      email,
      phone,
      service,
      message: message || null,
    });

    if (error) {
      console.error("Database insert error:", error);
      return jsonResponse({ error: "Erro ao enviar formulário." }, 500);
    }

    return jsonResponse({ success: true });
  } catch (error) {
    console.error("Unexpected error:", error);
    return jsonResponse({ error: "Erro interno." }, 500);
  }
});
