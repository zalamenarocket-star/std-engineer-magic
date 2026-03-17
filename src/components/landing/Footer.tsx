import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-dark py-10 border-t border-secondary/20" role="contentinfo">
      <div className="container text-center">
        <p className="font-heading font-bold text-primary-foreground text-lg mb-1">
          STD <span className="text-primary">Engenharia</span>
        </p>
        <p className="text-primary-foreground/70 text-sm mb-2">
          {t("Padrão em Qualidade desde 1996", "Quality Standard since 1996")}
        </p>
        <p className="text-primary-foreground/70 text-xs mb-4">
          {t(
            "Inspeção NR-13 · Caldeiras · Vasos de Pressão · Tubulações · Tanques · Calibração de Válvulas e Manômetros",
            "NR-13 Inspection · Boilers · Pressure Vessels · Piping · Tanks · Valve & Gauge Calibration"
          )}
        </p>
        <p className="text-primary-foreground/70 text-xs mb-2">
          © 2026 STD Standard Engenharia. {t("Todos os direitos reservados.", "All rights reserved.")}
        </p>
        <p className="text-primary-foreground/70 text-xs">
          {t("Criado por", "Created by")}{" "}
          <a href="https://zrocket.com.br" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">
            Z Rocket | Marketing &amp; IT
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
