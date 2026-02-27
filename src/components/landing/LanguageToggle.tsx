import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setLang("pt")}
        className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-bold transition-colors ${
          lang === "pt"
            ? "bg-primary/20 text-primary"
            : "text-secondary-foreground/60 hover:text-primary"
        }`}
        aria-label="Português"
      >
        <span className="text-base leading-none">🇧🇷</span>
        <span className="hidden sm:inline">PT</span>
      </button>
      <button
        onClick={() => setLang("en")}
        className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-bold transition-colors ${
          lang === "en"
            ? "bg-primary/20 text-primary"
            : "text-secondary-foreground/60 hover:text-primary"
        }`}
        aria-label="English"
      >
        <span className="text-base leading-none">🇺🇸</span>
        <span className="hidden sm:inline">EN</span>
      </button>
    </div>
  );
};

export default LanguageToggle;
