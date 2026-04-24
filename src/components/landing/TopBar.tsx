import { Phone } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

const TopBar = () => (
  <div className="bg-muted dark:bg-navy-dark py-2">
    <div className="container flex items-center justify-between text-sm">
      <div className="flex items-center gap-6">
        <a href="https://api.whatsapp.com/send?phone=5511916930415&text=Ol%C3%A1%2C%20vim%20do%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground dark:text-secondary-foreground/80 hover:text-primary transition-colors" aria-label="WhatsApp: (11) 91693-0415">
          <Phone className="w-3.5 h-3.5" aria-hidden="true" />
          <span>(11) 91693-0415</span>
        </a>
        <a href="https://api.whatsapp.com/send?phone=5511916930415&text=Ol%C3%A1%2C%20vim%20do%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 text-muted-foreground dark:text-secondary-foreground/80 hover:text-primary transition-colors" aria-label="WhatsApp: (11) 3742-9014">
          <Phone className="w-3.5 h-3.5" aria-hidden="true" />
          <span>(11) 3742-9014</span>
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
