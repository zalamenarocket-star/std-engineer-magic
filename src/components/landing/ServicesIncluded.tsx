import { motion } from "framer-motion";
import { Eye, FlaskConical, BookOpen, FileCheck } from "lucide-react";
import inspectionImg from "@/assets/inspection-2.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesIncluded = () => {
  const { t } = useLanguage();

  const items = [
    { icon: Eye, title: t("Inspeção Visual e Dimensional", "Visual & Dimensional Inspection"), desc: t("Avaliação minuciosa conforme NR-13 para identificação de desgastes, corrosão e irregularidades em vasos de pressão e caldeiras.", "Thorough NR-13 assessment to identify wear, corrosion and irregularities in pressure vessels and boilers.") },
    { icon: FlaskConical, title: t("Ensaios Não Destrutivos (END)", "Non-Destructive Testing (NDT)"), desc: t("Técnicas avançadas de END — ultrassom, líquido penetrante e partículas magnéticas — para inspeção NR-13.", "Advanced NDT techniques — ultrasound, liquid penetrant and magnetic particles — for NR-13 inspection.") },
    { icon: BookOpen, title: t("Abertura de Livro de Registro", "Registry Book Opening"), desc: t("Correta abertura do livro de registro de segurança conforme exigido pela NR-13 para caldeiras e vasos de pressão.", "Proper opening of the safety registry book as required by NR-13 for boilers and pressure vessels.") },
    { icon: FileCheck, title: t("Reconstituição de Prontuário", "Record Reconstitution"), desc: t("Elaboração de memoriais de cálculos e reconstituição de prontuários conforme NR-13 com software de última geração.", "Preparation of calculation reports and record reconstitution per NR-13 with state-of-the-art software.") },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
            {t("O que está incluso na Inspeção NR-13?", "What's Included in the NR-13 Inspection?")}
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map(({ icon: Icon, title, desc }, i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground text-sm mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={inspectionImg} alt={t("Ensaio não destrutivo por ultrassom em vaso de pressão conforme inspeção NR-13", "Ultrasound non-destructive testing on pressure vessel per NR-13 inspection")} className="rounded-2xl shadow-2xl w-full object-cover max-h-[450px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesIncluded;
