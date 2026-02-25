import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const fines = [
  { label: "Sem placa de identificação", range: "R$400 a R$1.700" },
  { label: "Sem prontuário", range: "R$716 a R$3.480" },
  { label: "Sem registro de segurança", range: "R$1.431 a R$6.682" },
  { label: "Sem relatório NR13", range: "R$4.000 a R$20.000" },
];

const WarningSection = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-heading font-bold uppercase mb-4">
          <AlertTriangle className="w-4 h-4" />
          Atenção: Fiscalizações Intensificadas
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
          Evite Multas e Interdições
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto mb-6 rounded-full" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A falta de inspeção pode gerar multas de até{" "}
          <strong className="text-foreground">R$ 20.000,00</strong> e interdição imediata.
          Garanta sua regularidade!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {fines.map((fine, i) => (
          <motion.div
            key={fine.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border-l-4 border-warning bg-card p-6 shadow-sm"
          >
            <p className="font-heading font-bold text-foreground text-sm mb-2">{fine.label}</p>
            <p className="text-primary font-heading font-extrabold text-lg">{fine.range}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="https://api.whatsapp.com/send?phone=5511916930415&text=Olá! Gostaria de saber mais sobre os serviços da STD Engenharia."
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="font-heading font-bold uppercase tracking-wide">
            Fale com um Engenheiro Especialista
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default WarningSection;
