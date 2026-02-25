import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Qual a periodicidade obrigatória para inspeção de caldeiras e vasos de pressão?",
    a: "De acordo com a NR-13, a periodicidade varia: Caldeiras categoria A e B — a cada 12 meses; Caldeiras categoria C — a cada 24 meses; Vasos de pressão categorias I e II — a cada 12 meses; Vasos III, IV e V — a cada 24 meses. O não cumprimento pode resultar em multas e interdição.",
  },
  {
    q: "Quais documentos são obrigatórios para caldeiras e vasos de pressão?",
    a: "Prontuário do equipamento, Registro de Segurança, Projeto de Instalação, Projeto de Alteração ou Reparo (quando aplicável), Relatórios de Inspeção e Certificados de calibração dos dispositivos de segurança.",
  },
  {
    q: "Quem pode realizar a inspeção de caldeiras e vasos de pressão?",
    a: "Conforme a NR-13, apenas Profissionais Habilitados (PH) — engenheiros com registro no CREA e competência legal — podem realizar inspeções. A STD Engenharia conta com engenheiros certificados desde 1996.",
  },
  {
    q: "Quanto tempo leva para realizar uma inspeção completa?",
    a: "Caldeiras: 1 a 2 dias para inspeção in loco. Vasos de pressão: 4 a 8 horas por vaso. Elaboração de relatórios: 3 a 5 dias úteis. Trabalhamos com agilidade para minimizar o impacto nas operações.",
  },
  {
    q: "A STD atende fora do Brasil?",
    a: "Sim! A STD atua em todo o Brasil e também em diversos países como Coreia do Sul, China, entre outros, levando nossa expertise além-fronteiras.",
  },
];

const FAQ = () => (
  <section className="py-20 bg-background">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
          Perguntas Frequentes
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="bg-card rounded-xl border border-border px-6 shadow-sm"
          >
            <AccordionTrigger className="font-heading font-bold text-left text-sm hover:no-underline text-foreground">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
