import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const NR13Explainer = () => {
  const { t } = useLanguage();

  const sections = [
    {
      title: t("Por que a Inspeção NR-13 é obrigatória?", "Why is NR-13 Inspection mandatory?"),
      text: t(
        "A Norma Regulamentadora NR-13, do Ministério do Trabalho e Emprego (MTE), estabelece requisitos mínimos para gestão da integridade estrutural de caldeiras a vapor, vasos de pressão, suas tubulações de interligação e tanques metálicos de armazenamento. A inspeção NR-13 é obrigatória para todas as empresas que possuem esses equipamentos, visando prevenir acidentes, proteger trabalhadores e garantir a segurança operacional. O descumprimento da NR-13 pode resultar em multas de até R$ 20.000,00, interdição dos equipamentos e responsabilização civil e criminal.",
        "Regulatory Standard NR-13, from the Ministry of Labor and Employment (MTE), establishes minimum requirements for structural integrity management of steam boilers, pressure vessels, their interconnecting piping and metal storage tanks. NR-13 inspection is mandatory for all companies that own such equipment, aiming to prevent accidents, protect workers and ensure operational safety. Non-compliance can result in fines up to R$ 20,000.00, equipment shutdown and civil and criminal liability."
      ),
    },
    {
      title: t("Como são realizadas as inspeções NR-13?", "How are NR-13 inspections performed?"),
      text: t(
        "As inspeções NR-13 de caldeiras e vasos de pressão incluem inspeção de segurança inicial (antes da entrada em funcionamento), inspeção de segurança periódica (em intervalos definidos pela norma) e inspeção de segurança extraordinária (em situações especiais como acidentes ou reparos). As inspeções são realizadas por Profissional Habilitado (PH) — engenheiro com registro ativo no CREA — e incluem exame externo, exame interno e teste hidrostático, além de ensaios não destrutivos (END) como ultrassom, líquido penetrante e partículas magnéticas.",
        "NR-13 inspections of boilers and pressure vessels include initial safety inspection (before commissioning), periodic safety inspection (at intervals defined by the standard) and extraordinary safety inspection (in special situations such as accidents or repairs). Inspections are performed by a Qualified Professional (PH) — an engineer with active CREA registration — and include external examination, internal examination and hydrostatic testing, as well as non-destructive testing (NDT) such as ultrasound, liquid penetrant and magnetic particles."
      ),
    },
    {
      title: t("Documentos obrigatórios conforme NR-13", "Mandatory documents per NR-13"),
      text: t(
        "A NR-13 exige que todo equipamento pressurizado possua: Prontuário do equipamento contendo dados de projeto, fabricação e inspeções; Registro de Segurança com todas as ocorrências relevantes; Projeto de Instalação conforme normas técnicas aplicáveis; Relatórios de Inspeção NR-13 assinados por Profissional Habilitado; e Certificados de calibração de válvulas de segurança e manômetros. A ausência de qualquer um desses documentos pode gerar autuação pelo MTE durante fiscalizações.",
        "NR-13 requires all pressurized equipment to have: Equipment record containing design, manufacturing and inspection data; Safety Registry with all relevant occurrences; Installation Project per applicable technical standards; NR-13 Inspection Reports signed by a Qualified Professional; and Calibration certificates for safety valves and gauges. The absence of any of these documents may result in fines during MTE audits."
      ),
    },
    {
      title: t("Calibração de Válvulas de Segurança e Manômetros", "Safety Valve & Gauge Calibration"),
      text: t(
        "A calibração de válvulas de segurança e manômetros é parte fundamental da inspeção NR-13. As válvulas de segurança são os principais dispositivos de proteção de caldeiras e vasos de pressão, devendo ser calibradas e testadas periodicamente para garantir que atuem na pressão correta de abertura. Os manômetros indicam a pressão de operação dos equipamentos e devem apresentar leitura precisa e confiável. A NR-13 determina que esses instrumentos sejam calibrados em intervalos definidos, com rastreabilidade metrológica, assegurando o funcionamento seguro dos equipamentos pressurizados.",
        "Safety valve and gauge calibration is a fundamental part of NR-13 inspection. Safety valves are the main protection devices for boilers and pressure vessels and must be periodically calibrated and tested to ensure they activate at the correct opening pressure. Gauges indicate equipment operating pressure and must provide accurate, reliable readings. NR-13 requires these instruments to be calibrated at defined intervals with metrological traceability, ensuring safe operation of pressurized equipment."
      ),
    },
  ];

  return (
    <section className="py-20 bg-navy">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground mb-4">
            {t("Tudo sobre Inspeção NR-13: Caldeiras, Vasos de Pressão e Tubulações", "Everything about NR-13 Inspection: Boilers, Pressure Vessels & Piping")}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose-invert space-y-8 text-primary-foreground/80 leading-relaxed">
          {sections.map(({ title, text }) => (
            <div key={title}>
              <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">{title}</h3>
              <p className="text-sm">{text}</p>
            </div>
          ))}
        </motion.article>
      </div>
    </section>
  );
};

export default NR13Explainer;
