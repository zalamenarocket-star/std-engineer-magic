import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Flame, Container, PipetteIcon } from "lucide-react";

const services = [
  {
    icon: Flame,
    tag: "NR-13",
    title: "Inspeção de Caldeiras",
    desc: "Inspeção de segurança inicial, periódica e extraordinária, garantindo a integridade e conformidade dos equipamentos conforme normas vigentes.",
  },
  {
    icon: Container,
    tag: "NR-13",
    title: "Inspeção de Vasos de Pressão",
    desc: "Abordamos aspectos técnicos, de segurança e operacionais de cada equipamento, assegurando plena conformidade com a NR-13.",
  },
  {
    icon: PipetteIcon,
    tag: "NR-13",
    title: "Inspeção de Tubulações",
    desc: "Tubulações interligadas a vasos de pressão ou caldeiras contendo fluidos classe A ou B são inspecionadas com equipamentos de última geração.",
  },
];

const whatsappLink =
  "https://api.whatsapp.com/send?phone=5511916930415&text=Olá! Gostaria de agendar uma inspeção com a STD Engenharia.";

const ServicesDetail = () => (
  <section className="py-20 bg-navy">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground mb-4">
          Nossos Serviços Especializados
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map(({ icon: Icon, tag, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-navy-light rounded-2xl p-8 border border-secondary/20 hover:border-primary/40 transition-colors group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <span className="text-xs font-heading font-bold text-primary uppercase tracking-widest">{tag}</span>
            <h3 className="text-xl font-heading font-bold text-primary-foreground mt-2 mb-4">{title}</h3>
            <p className="text-primary-foreground/70 text-sm mb-6 leading-relaxed">{desc}</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-bold text-sm uppercase">
                Agende sua Inspeção Agora
              </Button>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesDetail;
