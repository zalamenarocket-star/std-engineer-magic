import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WarningSection = () => (
  <section className="py-16 bg-background">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8 md:p-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-destructive" />
        </div>

        <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-foreground mb-4">
          Atenção: Fiscalizações Intensificadas
        </h2>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
          A falta de inspeção pode gerar multas de até{" "}
          <strong className="text-foreground">R$ 20.000,00</strong> e interdição
          imediata. Garanta sua regularidade!
        </p>

        <a
          href="https://api.whatsapp.com/send?phone=5511916930415&text=Olá! Gostaria de agendar uma inspeção NR-13 com a STD Engenharia."
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="font-heading font-bold uppercase tracking-wide">
            Fale com um Engenheiro Especialista
          </Button>
        </a>
      </motion.div>
    </div>
  </section>
);

export default WarningSection;
