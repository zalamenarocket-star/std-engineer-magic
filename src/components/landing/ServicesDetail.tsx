import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Flame, Container, PipetteIcon, Gauge } from "lucide-react";
import serviceCaldeiras from "@/assets/service-caldeiras.jpg";
import serviceVasos from "@/assets/service-vasos.jpg";
import serviceTubulacoes from "@/assets/service-tubulacoes.jpg";
import serviceCalibracao from "@/assets/service-calibracao.jpg";

const services = [
  {
    icon: Flame,
    tag: "NR-13",
    title: "Inspeção de Caldeiras",
    desc: "Inspeção NR-13 de segurança inicial, periódica e extraordinária em caldeiras, garantindo a integridade e conformidade dos equipamentos conforme normas vigentes.",
    image: serviceCaldeiras,
    alt: "Inspeção NR-13 de caldeiras - STD Engenharia",
  },
  {
    icon: Container,
    tag: "NR-13",
    title: "Inspeção de Vasos de Pressão",
    desc: "Inspeção NR-13 abordando aspectos técnicos, de segurança e operacionais de cada vaso de pressão, assegurando plena conformidade com a NR-13.",
    image: serviceVasos,
    alt: "Inspeção NR-13 de vasos de pressão - STD Engenharia",
  },
  {
    icon: PipetteIcon,
    tag: "NR-13",
    title: "Inspeção de Tubulações e Tanques",
    desc: "Tubulações e tanques interligados a vasos de pressão ou caldeiras contendo fluidos classe A ou B são inspecionados conforme NR-13 com equipamentos de última geração.",
    image: serviceTubulacoes,
    alt: "Inspeção NR-13 de tubulações e tanques industriais - STD Engenharia",
  },
  {
    icon: Gauge,
    tag: "NR-13",
    title: "Calibração de Válvulas e Manômetros",
    desc: "Calibração e teste de válvulas de segurança e manômetros conforme NR-13, assegurando o correto funcionamento dos dispositivos de proteção dos equipamentos pressurizados.",
    image: serviceCalibracao,
    alt: "Calibração de válvulas de segurança e manômetros NR-13 - STD Engenharia",
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
          Serviços Especializados em Inspeção NR-13
        </h2>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-4">
          A STD Engenharia oferece serviços completos de inspeção NR-13 para caldeiras, vasos de pressão, tubulações, tanques e calibração de instrumentos.
        </p>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map(({ icon: Icon, tag, title, desc, image, alt }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-navy-light rounded-2xl overflow-hidden border border-secondary/20 hover:border-primary/40 transition-colors group"
          >
            <img src={image} alt={alt} className="w-full h-44 object-cover" loading="lazy" />
            <div className="p-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-heading font-bold text-primary uppercase tracking-widest">{tag}</span>
              <h3 className="text-lg font-heading font-bold text-primary-foreground mt-2 mb-3">{title}</h3>
              <p className="text-primary-foreground/70 text-sm mb-5 leading-relaxed">{desc}</p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-bold text-xs uppercase w-full">
                  Agende sua Inspeção Agora
                </Button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesDetail;
