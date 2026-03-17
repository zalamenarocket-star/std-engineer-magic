import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoStd from "@/assets/logo-std.png";
import { useLanguage } from "@/contexts/LanguageContext";

const whatsappLink =
  "https://api.whatsapp.com/send?phone=5511916930415&text=Olá! Gostaria de saber mais sobre os serviços da STD Engenharia.";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="bg-navy sticky top-0 z-50 border-b border-secondary/20">
      <div className="container flex items-center justify-between py-3">
        <a href="/" aria-label="STD Engenharia - Página inicial">
          <img src={logoStd} alt="STD Engenharia - Padrão em Qualidade desde 1996" className="h-10 md:h-12" width="160" height="48" />
        </a>
        <nav aria-label={t("Navegação principal", "Main navigation")} className="flex items-center gap-3">
          <a href="https://api.whatsapp.com/send?phone=5511916930415&text=Olá! Gostaria de saber mais sobre os serviços da STD Engenharia." target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-secondary-foreground/80 hover:text-primary transition-colors text-sm" aria-label={t("Ligar para (11) 91693-0415", "Call (11) 91693-0415")}>
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span className="hidden md:inline">(11) 91693-0415</span>
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="sm" className="font-heading font-bold uppercase tracking-wide flex items-center gap-2">
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              {t("Fale Conosco", "Contact Us")}
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
