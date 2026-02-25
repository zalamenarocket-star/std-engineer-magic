import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O que é a NR-13 e por que a inspeção é obrigatória?",
    a: "A NR-13 é a norma regulamentadora do Ministério do Trabalho que estabelece requisitos de segurança para caldeiras, vasos de pressão e tubulações. A inspeção NR-13 é obrigatória para garantir a integridade dos equipamentos e a segurança dos trabalhadores, evitando multas e interdições.",
  },
  {
    q: "Qual a periodicidade obrigatória para inspeção de caldeiras e vasos de pressão?",
    a: "De acordo com a NR-13, a periodicidade varia: Caldeiras categoria A e B — a cada 12 meses; Caldeiras categoria C — a cada 24 meses; Vasos de pressão categorias I e II — a cada 12 meses; Vasos III, IV e V — a cada 24 meses. O não cumprimento pode resultar em multas e interdição.",
  },
  {
    q: "Quais documentos são obrigatórios para caldeiras e vasos de pressão?",
    a: "Prontuário do equipamento, Registro de Segurança, Projeto de Instalação, Projeto de Alteração ou Reparo (quando aplicável), Relatórios de Inspeção e Certificados de calibração de válvulas de segurança e manômetros.",
  },
  {
    q: "O que inclui a calibração de válvulas de segurança e manômetros?",
    a: "A calibração verifica se as válvulas de segurança e manômetros estão operando dentro dos parâmetros estabelecidos, garantindo a proteção dos equipamentos pressurizados. É um serviço essencial para a conformidade com a NR-13.",
  },
  {
    q: "Quem pode realizar a inspeção NR-13 de caldeiras e vasos de pressão?",
    a: "Conforme a NR-13, apenas Profissionais Habilitados (PH) — engenheiros com registro no CREA e competência legal — podem realizar inspeções de caldeiras, vasos de pressão e tubulações. A STD Engenharia conta com engenheiros certificados desde 1996.",
  },
  {
    q: "A STD Engenharia realiza inspeção de tanques e tubulações?",
    a: "Sim. A STD Engenharia realiza inspeção em tubulações e tanques interligados a caldeiras e vasos de pressão, conforme exigido pela NR-13, utilizando ensaios não destrutivos (END) e equipamentos de última geração.",
  },
  {
    q: "A STD atende fora do Brasil?",
    a: "Sim! A STD atua em todo o Brasil e também em diversos países como Coreia do Sul, China, entre outros, levando nossa expertise em inspeção NR-13 além-fronteiras.",
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
