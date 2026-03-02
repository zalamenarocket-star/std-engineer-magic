import { Phone } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

const TopBar = () => (
  <div className="bg-navy-dark py-2">
    <div className="container flex items-center justify-between text-sm">
      <div className="flex items-center gap-6">
        <a href="https://api.whatsapp.com/send?phone=5511916930415&text=Olá! Gostaria de saber mais sobre os serviços da STD Engenharia." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors">
          <Phone className="w-3.5 h-3.5" />
          (11) 91693-0415
        </a>
        <a href="https://api.whatsapp.com/send?phone=551137429014&text=Olá! Gostaria de saber mais sobre os serviços da STD Engenharia." target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors">
          <Phone className="w-3.5 h-3.5" />
          (11) 3742-9014
        </a>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </div>
  </div>
);

export default TopBar;
