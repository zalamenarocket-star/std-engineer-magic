import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Shield, Clock, Headphones, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", service: "", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact', {
        body: formData,
      });

      if (error) throw error;

      toast({ title: "Formulário enviado com sucesso!", description: "Entraremos em contato em breve." });
      setFormData({ name: "", company: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      console.error('Erro ao enviar:', err);
      toast({ title: "Erro ao enviar", description: "Tente novamente ou entre em contato pelo WhatsApp.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData(prev => ({ ...prev, [field]: e.target.value }));

  return (
    <section id="formulario" className="py-20 bg-navy">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground mb-4">
            Agende uma Consultoria
          </h2>
          <p className="text-primary-foreground/70">
            Preencha o formulário e fale com um engenheiro especialista em inspeção NR-13:
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-navy-light rounded-2xl p-8 border border-secondary/20 space-y-4"
        >
          <Input placeholder="Nome Completo *" required value={formData.name} onChange={update("name")} className="bg-navy border-secondary/30 text-primary-foreground placeholder:text-primary-foreground/40" />
          <Input placeholder="Empresa" value={formData.company} onChange={update("company")} className="bg-navy border-secondary/30 text-primary-foreground placeholder:text-primary-foreground/40" />
          <div className="grid sm:grid-cols-2 gap-4">
            <Input type="email" placeholder="E-mail Corporativo *" required value={formData.email} onChange={update("email")} className="bg-navy border-secondary/30 text-primary-foreground placeholder:text-primary-foreground/40" />
            <Input placeholder="Telefone/WhatsApp *" required value={formData.phone} onChange={update("phone")} className="bg-navy border-secondary/30 text-primary-foreground placeholder:text-primary-foreground/40" />
          </div>
          <select
            value={formData.service}
            onChange={update("service")}
            required
            className="flex h-10 w-full rounded-md border border-secondary/30 bg-navy px-3 py-2 text-sm text-primary-foreground/80 placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Serviço de Interesse *</option>
            <option>Inspeção NR-13</option>
            <option>Inspeção de Caldeiras</option>
            <option>Inspeção de Vasos de Pressão</option>
            <option>Inspeção em Tanques</option>
            <option>Inspeção em Tubulações</option>
            <option>Calibração de Válvulas e Manômetros</option>
            <option>Ensaio Não Destrutivo</option>
            <option>Inspeção em Ganchos</option>
            <option>Offshore</option>
            <option>Outros</option>
          </select>
          <Textarea placeholder="Mensagem" value={formData.message} onChange={update("message")} className="bg-navy border-secondary/30 text-primary-foreground placeholder:text-primary-foreground/40 min-h-[100px]" />
          <Button type="submit" size="lg" className="w-full font-heading font-bold uppercase tracking-wide text-base" disabled={loading}>
            {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Enviando...</> : "Fale com um Engenheiro"}
          </Button>

          <div className="flex justify-center gap-8 pt-4">
            {[
              { icon: Shield, label: "Dados Seguros" },
              { icon: Clock, label: "Resposta Rápida" },
              { icon: Headphones, label: "Suporte Dedicado" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-primary-foreground/60 text-xs">
                <Icon className="w-4 h-4 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
