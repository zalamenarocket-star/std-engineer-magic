import { motion } from "framer-motion";
import { CheckCircle, Cpu, FileText, Headphones, ShieldCheck } from "lucide-react";
import inspectionImg from "@/assets/inspection-1.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChoose = () => {
  const { t } = useLanguage();

  const reasons = [
    { icon: CheckCircle, title: t("Especialização em Inspeção NR-13", "NR-13 Inspection Expertise"), desc: t("Desde 1996, realizamos inspeção NR-13 em caldeiras, vasos de pressão e tubulações com 100% de aprovação.", "Since 1996, we perform NR-13 inspection of boilers, pressure vessels and piping with 100% approval rate.") },
    { icon: Cpu, title: t("Tecnologia de Ponta", "Cutting-Edge Technology"), desc: t("Equipamentos e softwares de última geração para inspeções NR-13 precisas e confiáveis.", "State-of-the-art equipment and software for accurate and reliable NR-13 inspections.") },
    { icon: FileText, title: t("Laudos e Prontuários Completos", "Complete Reports & Records"), desc: t("Emissão de laudos de inspeção NR-13, abertura de livro de registro e reconstituição de prontuários.", "Issuance of NR-13 inspection reports, registry book opening and record reconstitution.") },
    { icon: Headphones, title: t("Suporte em Fiscalizações NR-13", "NR-13 Audit Support"), desc: t("Acompanhamento durante todo o processo de inspeção, inclusive em fiscalizações do MTE.", "Support throughout the entire inspection process, including MTE audits.") },
    { icon: ShieldCheck, title: t("Conformidade com o MTE", "MTE Compliance"), desc: t("Garantimos que caldeiras, vasos de pressão e tubulações estão em conformidade com a NR-13.", "We ensure boilers, pressure vessels and piping are NR-13 compliant.") },
  ];

  return (
    <section className="py-20 bg-navy">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground mb-10">
              {t(
                <>Por que escolher a{" "}<span className="text-gradient">STD Engenharia</span> para sua Inspeção NR-13?</>,
                <>Why choose{" "}<span className="text-gradient">STD Engenharia</span> for your NR-13 Inspection?</>
              )}
            </h2>
            <div className="space-y-6">
              {reasons.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-primary-foreground text-base mb-1">{title}</h3>
                    <p className="text-primary-foreground/70 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <img src={inspectionImg} alt={t("Inspeção NR-13 em vaso de pressão realizada por engenheiro habilitado da STD Engenharia", "NR-13 pressure vessel inspection by certified STD Engenharia engineer")} className="rounded-2xl shadow-2xl w-full object-cover max-h-[500px]" />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl px-6 py-4 shadow-glow">
              <p className="font-heading font-extrabold text-2xl">{t("Desde 1996", "Since 1996")}</p>
              <p className="text-sm font-medium opacity-90">{t("Referência em NR-13", "NR-13 Reference")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
