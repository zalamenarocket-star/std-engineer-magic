import TopBar from "@/components/landing/TopBar";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import WarningSection from "@/components/landing/WarningSection";
import WhyChoose from "@/components/landing/WhyChoose";
import ServicesIncluded from "@/components/landing/ServicesIncluded";
import ServicesDetail from "@/components/landing/ServicesDetail";
import NR13Explainer from "@/components/landing/NR13Explainer";
import FAQ from "@/components/landing/FAQ";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";
import LGPDPopup from "@/components/landing/LGPDPopup";

const Index = () => (
  <div className="min-h-screen">
    <TopBar />
    <Header />
    <Hero />
    <WarningSection />
    <WhyChoose />
    <ServicesIncluded />
    <ServicesDetail />
    <NR13Explainer />
    <FAQ />
    <ContactForm />
    <Footer />
    <FloatingWhatsApp />
    <LGPDPopup />
  </div>
);

export default Index;
