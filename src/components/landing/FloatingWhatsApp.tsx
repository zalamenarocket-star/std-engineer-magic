import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => (
  <a
    href="https://api.whatsapp.com/send?phone=5511916930415&text=Olá! Gostaria de saber mais sobre os serviços da STD Engenharia."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
    aria-label="Fale conosco pelo WhatsApp"
  >
    <MessageCircle className="w-7 h-7" />
  </a>
);

export default FloatingWhatsApp;
