import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Clock, Headphones, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactForm = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const formLoadTime = useRef(Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) return;
    const elapsed = Date.now() - formLoadTime.current;
    if (elapsed < 3000) {
      toast({
        title: t("Envio muito rápido", "Submission too fast"),
        description: t("Aguarde alguns segundos.", "Please wait a few seconds."),
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast({
        title: t("E-mail inválido", "Invalid email"),
        description: t("Verifique o e-mail informado.", "Check the email provided."),
        variant: "destructive",
      });
      return;
    }
    const phoneClean = formData.phone.replace(/\D/g, "");
    if (phoneClean.length < 10 || phoneClean.length > 13) {
      toast({
        title: t("Telefone inválido", "Invalid phone"),
        description: t("Informe um telefone válido.", "Enter a valid phone number."),
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact", {
        body: {
          name: formData.name.trim().slice(0, 100),
          company: formData.company.trim().slice(0, 100),
          email: formData.email.trim().slice(0, 255),
          phone: formData.phone.trim().slice(0, 20),
          service: formData.service.slice(0, 100),
          message: formData.message.trim().slice(0, 1000),
        },
      });
      if (error) throw error;
      toast({
        title: t("Formulário enviado com sucesso!", "Form submitted successfully!"),
        description: t("Entraremos em contato em breve.", "We'll get in touch soon."),
      });
      setFormData({ name: "", company: "", email: "", phone: "", service: "", message: "" });
      formLoadTime.current = Date.now();
    } catch {
      toast({
        title: t("Erro ao enviar", "Error sending"),
        description: t("Tente novamente ou entre em contato pelo WhatsApp.", "Try again or contact us via WhatsApp."),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const update =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section id="formulario" className="py-20 bg-navy">
      <div className="container max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground mb-4">
            {t("Agende uma Consultoria", "Schedule a Consultation")}
          </h2>
          <p className="text-primary-foreground/70">
            {t(
              "Preencha o formulário. Fale com um engenheiro especialista em inspeção NR-13:",
              "Fill out the form and talk to an NR-13 inspection specialist engineer:",
            )}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-navy-light rounded-2xl p-8 border border-secondary/20 space-y-4">
          <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
            <Input
              type="text"
              name="website_url"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <Input
            placeholder={t("Nome Completo *", "Full Name *")}
            required
            value={formData.name}
            onChange={update("name")}
            maxLength={100}
            className="bg-navy border-secondary/30 text-primary-foreground placeholder:text-primary-foreground/40"
          />
          <Input
            placeholder={t("Empresa", "Company")}
            value={formData.company}
            onChange={update("company")}
            maxLength={100}
            className="bg-navy border-secondary/30 text-primary-foreground placeholder:text-primary-foreground/40"
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              type="email"
              placeholder={t("E-mail Corporativo *", "Corporate Email *")}
              required
              value={formData.email}
              onChange={update("email")}
              maxLength={255}
              className="bg-navy border-secondary/30 text-primary-foreground placeholder:text-primary-foreground/40"
            />
            <Input
              placeholder={t("Telefone/WhatsApp *", "Phone/WhatsApp *")}
              required
              value={formData.phone}
              onChange={update("phone")}
              maxLength={20}
              className="bg-navy border-secondary/30 text-primary-foreground placeholder:text-primary-foreground/40"
            />
          </div>
          <select
            value={formData.service}
            onChange={update("service")}
            required
            className="flex h-10 w-full rounded-md border border-secondary/30 bg-navy px-3 py-2 text-sm text-primary-foreground/80 placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">{t("Serviço de Interesse *", "Service of Interest *")}</option>
            <option>{t("Inspeção NR-13", "NR-13 Inspection")}</option>
            <option>{t("Inspeção de Caldeiras", "Boiler Inspection")}</option>
            <option>{t("Inspeção de Vasos de Pressão", "Pressure Vessel Inspection")}</option>
            <option>{t("Inspeção em Tanques", "Tank Inspection")}</option>
            <option>{t("Inspeção em Tubulações", "Piping Inspection")}</option>
            <option>{t("Calibração de Válvulas e Manômetros", "Valve & Gauge Calibration")}</option>
            <option>{t("Ensaio Não Destrutivo", "Non-Destructive Testing")}</option>
            <option>{t("Inspeção em Ganchos", "Hook Inspection")}</option>
            <option>Offshore</option>
            <option>{t("Outros", "Others")}</option>
          </select>
          <Textarea
            placeholder={t("Mensagem", "Message")}
            value={formData.message}
            onChange={update("message")}
            maxLength={1000}
            className="bg-navy border-secondary/30 text-primary-foreground placeholder:text-primary-foreground/40 min-h-[100px]"
          />
          <Button
            type="submit"
            size="lg"
            className="w-full font-heading font-bold uppercase tracking-wide text-base"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> {t("Enviando...", "Sending...")}
              </>
            ) : (
              t("Enviar", "Talk to an Engineer")
            )}
          </Button>

          <div className="flex justify-center gap-8 pt-4">
            {[
              { icon: Shield, label: t("Dados Seguros", "Secure Data") },
              { icon: Clock, label: t("Resposta Rápida", "Fast Response") },
              { icon: Headphones, label: t("Suporte Dedicado", "Dedicated Support") },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-primary-foreground/60 text-xs">
                <Icon className="w-4 h-4 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
