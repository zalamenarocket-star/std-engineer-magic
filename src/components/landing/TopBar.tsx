import { Phone } from "lucide-react";

const TopBar = () => (
  <div className="bg-navy-dark py-2">
    <div className="container flex items-center justify-between text-sm">
      <div className="flex items-center gap-6">
        <a href="tel:+551191693041" className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors">
          <Phone className="w-3.5 h-3.5" />
          (11) 91693-0415
        </a>
        <a href="tel:+551137429014" className="hidden sm:flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors">
          <Phone className="w-3.5 h-3.5" />
          (11) 3742-9014
        </a>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=5511916930415&text=Olá! Gostaria de saber mais sobre os serviços da STD Engenharia."
        className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
      >
        Fale Conosco
      </a>
    </div>
  </div>
);

export default TopBar;
