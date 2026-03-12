import { Shield, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const whatsappLink =
  "https://api.whatsapp.com/send?phone=5511916930415&text=Olá! Gostaria de agendar uma inspeção NR-13 com a STD Engenharia.";

import logoRaizen from "@/assets/clients/raizen.png";
import logoPetrobras from "@/assets/clients/petrobras.png";
import logoDuratex from "@/assets/clients/duratex.png";
import logoScania from "@/assets/clients/scania.png";
import logoMercedes from "@/assets/clients/mercedes.png";

const clientLogos = [
  { name: "Raízen", src: logoRaizen },
  { name: "Petrobrás", src: logoPetrobras },
  { name: "Duratex", src: logoDuratex },
  { name: "Scania", src: logoScania },
  { name: "Mercedes-Benz", src: logoMercedes },
];

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0 bg-[hsl(var(--navy-dark)/0.8)]" />

      <div className="container relative z-10 py-20 flex flex-col items-center text-center">
        <div className="max-w-2xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-primary" />
            <span className="text-primary font-heading font-bold text-sm uppercase tracking-widest">
              {t("Desde 1996", "Since 1996")}
            </span>
            <div className="h-px w-10 bg-primary" />
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-primary-foreground leading-[1.1] mb-6">
            {t(
              <>
                Inspeção NR-13, Caldeiras, Vasos de Pressão, Tanques e Tubulações{" "}
                <span className="text-gradient"></span>
              </>,
              <>
                Pressure Vessel Inspection per <span className="text-gradient">NR-13</span>
              </>,
            )}
          </h1>

          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed max-w-xl mx-auto">
            {t(
              "A STD Engenharia é referência em inspeção NR-13 de caldeiras, vasos de pressão, tubulações e tanques. Atuamos desde 1996 com engenheiros habilitados, garantindo conformidade com a NR-13 e segurança operacional em todo o Brasil e exterior.",
              "STD Engenharia is a reference in NR-13 inspection of boilers, pressure vessels, piping and tanks. Operating since 1996 with certified engineers, ensuring NR-13 compliance and operational safety throughout Brazil and abroad.",
            )}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="font-heading font-bold uppercase tracking-wide text-sm px-6 animate-pulse-glow w-full"
              >
                {t("Agende sua Inspeção Agora", "Schedule Your Inspection Now")}
              </Button>
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="font-heading font-bold uppercase tracking-wide text-sm px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
              >
                {t("Fale com um Especialista", "Talk to a Specialist")}
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { icon: Shield, value: "NR-13", label: t("Conformidade Total", "Full Compliance") },
              {
                icon: Award,
                value: t("Desde 1996", "Since 1996"),
                label: t("Referência no Mercado", "Market Reference"),
              },
              {
                icon: Globe,
                value: t("Brasil e Exterior", "Brazil & Abroad"),
                label: t("Atuação Global", "Global Presence"),
              },
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

          {/* Client Logos */}
          <div>
            <p className="text-primary-foreground/50 text-xs uppercase tracking-widest font-heading font-bold mb-4">
              {t(
                "Algumas das centenas de empresas que confiam na STD",
                "Some of the hundreds of companies that trust STD",
              )}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              {clientLogos.map((client) => (
                <img
                  key={client.name}
                  src={client.src}
                  alt={client.name}
                  className="h-10 md:h-12 w-auto max-w-[120px] md:max-w-[140px] object-contain opacity-80 hover:opacity-100 transition-opacity"
                  loading="eager"
                  width="120"
                  height="40"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
