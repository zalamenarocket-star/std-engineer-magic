import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => (
  <a
    href="https://api.whatsapp.com/send?phone=5511916930415&text=Ol%C3%A1%2C%20vim%20do%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-20 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
    aria-label="Fale conosco pelo WhatsApp"
    role="button"
  >
    <MessageCircle className="w-7 h-7" aria-hidden="true" />
  </a>
);

export default FloatingWhatsApp;
