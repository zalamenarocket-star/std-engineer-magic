import { motion } from "framer-motion";
import { Shield, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const whatsappLink =
  "https://api.whatsapp.com/send?phone=5511916930415&text=Olá! Gostaria de agendar uma inspeção NR-13 com a STD Engenharia.";

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy-dark))] via-[hsl(var(--navy-dark)/0.85)] to-transparent" />

    <div className="container relative z-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-primary" />
          <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">
            Desde 1996
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary-foreground leading-[1.1] mb-6">
          Inspeção em Vasos de Pressão conforme{" "}
          <span className="text-gradient">NR-13</span>
        </h1>

        <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed max-w-xl">
          A STD Engenharia atua com soluções especializadas em inspeções técnicas
          de caldeiras, vasos de pressão e tubulações, garantindo conformidade,
          precisão e confiança em cada projeto.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-12">
          <a href="#formulario">
            <Button
              size="lg"
              className="font-heading font-bold uppercase tracking-wide text-sm px-6 animate-pulse-glow w-full sm:w-auto"
            >
              Agende sua Inspeção Agora
            </Button>
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="font-heading font-bold uppercase tracking-wide text-sm px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto"
            >
              Fale com um Especialista
            </Button>
          </a>
        </div>

        <div className="flex flex-wrap gap-8">
          {[
            { icon: Shield, value: "NR-13", label: "Conformidade Total" },
            { icon: Award, value: "Desde 1996", label: "Referência no Mercado" },
            { icon: Globe, value: "Brasil e Exterior", label: "Atuação Global" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={value} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-heading font-extrabold text-primary-foreground text-sm">{value}</p>
                <p className="text-primary-foreground/60 text-xs">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
