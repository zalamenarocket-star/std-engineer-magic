import { Button } from "@/components/ui/button";
import { Flame, Container, PipetteIcon, Gauge } from "lucide-react";
import serviceCaldeiras from "@/assets/service-caldeiras.jpg";
import serviceVasos from "@/assets/service-vasos.jpg";
import serviceTubulacoes from "@/assets/service-tubulacoes.jpg";
import serviceCalibracao from "@/assets/service-calibracao.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const whatsappLink =
  "https://api.whatsapp.com/send?phone=5511916930415&text=Olá! Gostaria de agendar uma inspeção com a STD Engenharia.";

const ServicesDetail = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Flame, tag: "NR-13", title: t("Inspeção de Caldeiras", "Boiler Inspection"), desc: t("Inspeção NR-13 de segurança inicial, periódica e extraordinária em caldeiras, garantindo a integridade e conformidade dos equipamentos conforme normas vigentes.", "Initial, periodic and extraordinary NR-13 safety inspection of boilers, ensuring equipment integrity and compliance with current regulations."), image: serviceCaldeiras, alt: t("Inspeção NR-13 de caldeiras - STD Engenharia", "NR-13 boiler inspection - STD Engenharia") },
    { icon: Container, tag: "NR-13", title: t("Inspeção de Vasos de Pressão", "Pressure Vessel Inspection"), desc: t("Inspeção NR-13 abordando aspectos técnicos, de segurança e operacionais de cada vaso de pressão, assegurando plena conformidade com a NR-13.", "NR-13 inspection addressing technical, safety and operational aspects of each pressure vessel, ensuring full NR-13 compliance."), image: serviceVasos, alt: t("Inspeção NR-13 de vasos de pressão - STD Engenharia", "NR-13 pressure vessel inspection - STD Engenharia") },
    { icon: PipetteIcon, tag: "NR-13", title: t("Inspeção de Tubulações e Tanques", "Piping & Tank Inspection"), desc: t("Tubulações e tanques interligados a vasos de pressão ou caldeiras contendo fluidos classe A ou B são inspecionados conforme NR-13 com equipamentos de última geração.", "Piping and tanks connected to pressure vessels or boilers containing class A or B fluids inspected per NR-13 with state-of-the-art equipment."), image: serviceTubulacoes, alt: t("Inspeção NR-13 de tubulações e tanques - STD Engenharia", "NR-13 piping and tank inspection - STD Engenharia") },
    { icon: Gauge, tag: "NR-13", title: t("Calibração de Válvulas e Manômetros", "Valve & Gauge Calibration"), desc: t("Calibração e teste de válvulas de segurança e manômetros conforme NR-13, assegurando o correto funcionamento dos dispositivos de proteção.", "Calibration and testing of safety valves and gauges per NR-13, ensuring proper functioning of protection devices."), image: serviceCalibracao, alt: t("Calibração de válvulas NR-13 - STD Engenharia", "NR-13 valve calibration - STD Engenharia") },
  ];

  return (
    <section className="py-20 bg-navy">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground mb-4">
            {t("Serviços Especializados em Inspeção NR-13", "Specialized NR-13 Inspection Services")}
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-4">
            {t("A STD Engenharia oferece serviços completos de inspeção NR-13 para caldeiras, vasos de pressão, tubulações, tanques e calibração de instrumentos.", "STD Engenharia offers complete NR-13 inspection services for boilers, pressure vessels, piping, tanks and instrument calibration.")}
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ icon: Icon, tag, title, desc, image, alt }) => (
            <div key={title} className="bg-navy-light rounded-2xl overflow-hidden border border-secondary/20 hover:border-primary/40 transition-colors group">
              <img src={image} alt={alt} className="w-full h-44 object-cover" loading="lazy" width="350" height="176" />
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-heading font-bold text-primary uppercase tracking-widest">{tag}</span>
                <h3 className="text-lg font-heading font-bold text-primary-foreground mt-2 mb-3">{title}</h3>
                <p className="text-primary-foreground/70 text-sm mb-5 leading-relaxed">{desc}</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-bold text-xs uppercase w-full">
                    {t("Agende sua Inspeção Agora", "Schedule Your Inspection Now")}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetail;