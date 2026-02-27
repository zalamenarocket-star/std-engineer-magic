import { Phone } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

const TopBar = () => (
  <div className="bg-navy-dark py-2">
    <div className="container flex items-center justify-between text-sm">
      <div className="flex items-center gap-6">
        <a href="tel:+5511916930415" className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors">
          <Phone className="w-3.5 h-3.5" />
          (11) 91693-0415
        </a>
        <a href="tel:+551137429014" className="hidden sm:flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors">
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
