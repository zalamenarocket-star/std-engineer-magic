import { Button } from "@/components/ui/button";

const Header = () => (
  <header className="bg-navy sticky top-0 z-50 border-b border-secondary/20">
    <div className="container flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <span className="text-2xl font-heading font-extrabold text-primary-foreground tracking-tight">
            STD
          </span>
          <span className="text-[10px] font-heading font-medium text-muted-foreground uppercase tracking-widest -mt-1">
            Padrão em Qualidade desde 1996
          </span>
        </div>
      </div>
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
