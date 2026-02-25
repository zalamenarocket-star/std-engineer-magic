import { Button } from "@/components/ui/button";
import logoStd from "@/assets/logo-std.png";

const Header = () => (
  <header className="bg-navy sticky top-0 z-50 border-b border-secondary/20">
    <div className="container flex items-center justify-between py-3">
      <img src={logoStd} alt="STD Engenharia - Padrão em Qualidade desde 1996" className="h-10 md:h-12" />
      <a
        href="https://api.whatsapp.com/send?phone=5511916930415&text=Olá! Gostaria de saber mais sobre os serviços da STD Engenharia."
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="default" size="sm" className="font-heading font-bold uppercase tracking-wide">
          Fale Conosco
        </Button>
      </a>
    </div>
  </header>
);

export default Header;
