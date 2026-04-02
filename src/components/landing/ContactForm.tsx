import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
    <section id="formulario" className="py-20 bg-muted dark:bg-navy" aria-labelledby="contact-heading">
      <div className="container max-w-2xl">
        <div className="text-center mb-10">
          <h2 id="contact-heading" className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
            {t("Fale com um Especialista", "Schedule a Consultation")}
          </h2>
          <p className="text-muted-foreground">
            {t(
              "Preencha o formulário. Fale com um engenheiro especialista em inspeção NR-13:",
              "Fill out the form and talk to an NR-13 inspection specialist engineer:",
            )}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative bg-card dark:bg-navy-light rounded-2xl p-8 border border-border space-y-4">
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="website_url"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div>
            <Label htmlFor="contact-name" className="text-foreground/90 text-sm mb-1.5 block">
              {t("Nome Completo", "Full Name")} *
            </Label>
            <Input
              id="contact-name"
              required
              value={formData.name}
              onChange={update("name")}
              maxLength={100}
              className="bg-background dark:bg-navy border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div>
            <Label htmlFor="contact-company" className="text-foreground/90 text-sm mb-1.5 block">
              {t("Empresa", "Company")}
            </Label>
            <Input
              id="contact-company"
              value={formData.company}
              onChange={update("company")}
              maxLength={100}
              className="bg-background dark:bg-navy border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="contact-email" className="text-foreground/90 text-sm mb-1.5 block">
                {t("E-mail Corporativo", "Corporate Email")} *
              </Label>
              <Input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={update("email")}
                maxLength={255}
                className="bg-background dark:bg-navy border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <Label htmlFor="contact-phone" className="text-foreground/90 text-sm mb-1.5 block">
                {t("Telefone/WhatsApp", "Phone/WhatsApp")} *
              </Label>
              <Input
                id="contact-phone"
                required
                value={formData.phone}
                onChange={update("phone")}
                maxLength={20}
                className="bg-background dark:bg-navy border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="contact-service" className="text-foreground/90 text-sm mb-1.5 block">
              {t("Serviço de Interesse", "Service of Interest")} *
            </Label>
            <select
              id="contact-service"
              value={formData.service}
              onChange={update("service")}
              required
              className="flex h-10 w-full rounded-md border border-border bg-background dark:bg-navy px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">{t("Selecione um serviço", "Select a service")}</option>
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
          </div>

          <div>
            <Label htmlFor="contact-message" className="text-foreground/90 text-sm mb-1.5 block">
              {t("Mensagem", "Message")}
            </Label>
            <Textarea
              id="contact-message"
              value={formData.message}
              onChange={update("message")}
              maxLength={1000}
              className="bg-background dark:bg-navy border-border text-foreground placeholder:text-muted-foreground min-h-[100px]"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full font-heading font-bold uppercase tracking-wide text-base"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> {t("Enviando...", "Sending...")}
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
              <div key={label} className="flex items-center gap-2 text-muted-foreground text-xs">
                <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
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
