import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    { q: t("O que é a NR-13 e por que a inspeção é obrigatória?", "What is NR-13 and why is inspection mandatory?"), a: t("A NR-13 é a norma regulamentadora do Ministério do Trabalho que estabelece requisitos de segurança para caldeiras, vasos de pressão e tubulações. A inspeção NR-13 é obrigatória para garantir a integridade dos equipamentos e a segurança dos trabalhadores, evitando multas e interdições.", "NR-13 is the regulatory standard from the Ministry of Labor establishing safety requirements for boilers, pressure vessels and piping. NR-13 inspection is mandatory to ensure equipment integrity and worker safety, avoiding fines and shutdowns.") },
    { q: t("Qual a periodicidade obrigatória para inspeção de caldeiras e vasos de pressão?", "What is the mandatory inspection frequency for boilers and pressure vessels?"), a: t("De acordo com a NR-13, a periodicidade varia: Caldeiras categoria A e B — a cada 12 meses; Caldeiras categoria C — a cada 24 meses; Vasos de pressão categorias I e II — a cada 12 meses; Vasos III, IV e V — a cada 24 meses.", "According to NR-13, frequency varies: Category A and B boilers — every 12 months; Category C boilers — every 24 months; Category I and II pressure vessels — every 12 months; Vessels III, IV and V — every 24 months.") },
    { q: t("Quais documentos são obrigatórios para caldeiras e vasos de pressão?", "What documents are mandatory for boilers and pressure vessels?"), a: t("Prontuário do equipamento, Registro de Segurança, Projeto de Instalação, Projeto de Alteração ou Reparo (quando aplicável), Relatórios de Inspeção e Certificados de calibração de válvulas de segurança e manômetros.", "Equipment record, Safety Registry, Installation Project, Alteration or Repair Project (when applicable), Inspection Reports and Calibration certificates for safety valves and gauges.") },
    { q: t("O que inclui a calibração de válvulas de segurança e manômetros?", "What does safety valve and gauge calibration include?"), a: t("A calibração verifica se as válvulas de segurança e manômetros estão operando dentro dos parâmetros estabelecidos, garantindo a proteção dos equipamentos pressurizados.", "Calibration verifies that safety valves and gauges are operating within established parameters, ensuring protection of pressurized equipment.") },
    { q: t("Quem pode realizar a inspeção NR-13?", "Who can perform NR-13 inspection?"), a: t("Apenas Profissionais Habilitados (PH) — engenheiros com registro no CREA e competência legal — podem realizar inspeções. A STD Engenharia conta com engenheiros certificados desde 1996.", "Only Qualified Professionals (PH) — engineers with CREA registration and legal competence — can perform inspections. STD Engenharia has certified engineers since 1996.") },
    { q: t("A STD Engenharia realiza inspeção de tanques e tubulações?", "Does STD Engenharia inspect tanks and piping?"), a: t("Sim. Realizamos inspeção em tubulações e tanques interligados a caldeiras e vasos de pressão, conforme exigido pela NR-13, utilizando ensaios não destrutivos (END).", "Yes. We inspect piping and tanks connected to boilers and pressure vessels, as required by NR-13, using non-destructive testing (NDT).") },
    { q: t("A STD atende fora do Brasil?", "Does STD operate outside Brazil?"), a: t("Sim! Atuamos em todo o Brasil e em diversos países como Coreia do Sul, China, entre outros.", "Yes! We operate throughout Brazil and in several countries such as South Korea, China, among others.") },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
            {t("Perguntas Frequentes", "Frequently Asked Questions")}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-xl border border-border px-6 shadow-sm">
              <AccordionTrigger className="font-heading font-bold text-left text-sm hover:no-underline text-foreground">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
