import { motion } from "framer-motion";
import { CheckCircle, Cpu, FileText, Headphones, ShieldCheck } from "lucide-react";
import inspectionImg from "@/assets/inspection-1.jpg";

const reasons = [
  { icon: CheckCircle, title: "Especialização em Inspeção NR-13", desc: "Desde 1996, realizamos inspeção NR-13 em caldeiras, vasos de pressão e tubulações com 100% de aprovação." },
  { icon: Cpu, title: "Tecnologia de Ponta", desc: "Equipamentos e softwares de última geração para inspeções NR-13 precisas e confiáveis." },
  { icon: FileText, title: "Laudos e Prontuários Completos", desc: "Emissão de laudos de inspeção NR-13, abertura de livro de registro e reconstituição de prontuários." },
  { icon: Headphones, title: "Suporte em Fiscalizações NR-13", desc: "Acompanhamento durante todo o processo de inspeção, inclusive em fiscalizações do MTE." },
  { icon: ShieldCheck, title: "Conformidade com o MTE", desc: "Garantimos que caldeiras, vasos de pressão e tubulações estão em conformidade com a NR-13." },
];

const WhyChoose = () => (
  <section className="py-20 bg-navy">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground mb-10">
            Por que escolher a{" "}
            <span className="text-gradient">STD Engenharia</span> para sua Inspeção NR-13?
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

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={inspectionImg}
            alt="Inspeção NR-13 em vaso de pressão realizada por engenheiro habilitado da STD Engenharia"
            className="rounded-2xl shadow-2xl w-full object-cover max-h-[500px]"
          />
          <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl px-6 py-4 shadow-glow">
            <p className="font-heading font-extrabold text-2xl">Desde 1996</p>
            <p className="text-sm font-medium opacity-90">Referência em NR-13</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyChoose;
