import { motion } from "framer-motion";
import { Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const badges = [
  { icon: Shield, label: "100% Conforme NR-13" },
  { icon: Clock, label: "Atendimento desde 1996" },
  { icon: Award, label: "Engenheiros Certificados" },
];

const Hero = () => (
  <section
    className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
  >
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-navy-dark/75" />

    <div className="container relative z-10 text-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/20 text-primary font-heading font-semibold text-sm border border-primary/30">
          ⭐ Padrão em Qualidade desde 1996
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6 max-w-4xl mx-auto">
          Inspeção Especializada em{" "}
          <span className="text-gradient">Caldeiras e Vasos de Pressão</span>
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 font-body">
          Garantia total de segurança e conformidade com a NR-13.
          <br />
          Atendimento rápido por engenheiros certificados.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary/50 backdrop-blur-sm border border-secondary/30 text-primary-foreground/90 text-sm font-medium"
            >
              <Icon className="w-4 h-4 text-primary" />
              {label}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#formulario">
            <Button size="lg" className="font-heading font-bold uppercase tracking-wide text-base px-8 animate-pulse-glow">
              Solicite uma Consultoria
            </Button>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511916930415&text=Olá! Gostaria de saber mais sobre os serviços da STD Engenharia."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="font-heading font-bold uppercase tracking-wide text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Fale com um Especialista
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
