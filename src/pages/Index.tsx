import { lazy, Suspense } from "react";
import TopBar from "@/components/landing/TopBar";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";

const WarningSection = lazy(() => import("@/components/landing/WarningSection"));
const WhyChoose = lazy(() => import("@/components/landing/WhyChoose"));
const ServicesIncluded = lazy(() => import("@/components/landing/ServicesIncluded"));
const ServicesDetail = lazy(() => import("@/components/landing/ServicesDetail"));
const NR13Explainer = lazy(() => import("@/components/landing/NR13Explainer"));
const FAQ = lazy(() => import("@/components/landing/FAQ"));
const ContactForm = lazy(() => import("@/components/landing/ContactForm"));
const Footer = lazy(() => import("@/components/landing/Footer"));
const FloatingWhatsApp = lazy(() => import("@/components/landing/FloatingWhatsApp"));
const LGPDPopup = lazy(() => import("@/components/landing/LGPDPopup"));

const Index = () => (
  <div className="min-h-screen">
    <TopBar />
    <Header />
    <Hero />
    <Suspense fallback={null}>
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
    </Suspense>
  </div>
);

export default Index;