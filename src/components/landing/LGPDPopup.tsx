import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LGPDPopup = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const accepted = localStorage.getItem("lgpd-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("lgpd-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-navy-dark border-t border-secondary/30 p-4 md:p-6">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-primary-foreground/80 text-sm text-center sm:text-left">
          {t(
            <>Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}<span className="text-primary font-semibold">Política de Privacidade</span> conforme a LGPD.</>,
            <>We use cookies and similar technologies to improve your experience. By continuing to browse, you agree to our{" "}<span className="text-primary font-semibold">Privacy Policy</span> per LGPD.</>
          )}
        </p>
        <Button onClick={accept} size="sm" className="font-heading font-bold uppercase tracking-wide whitespace-nowrap">
          {t("Aceitar Cookies", "Accept Cookies")}
        </Button>
      </div>
    </div>
  );
};

export default LGPDPopup;
