import { motion } from "framer-motion";
import { Eye, FlaskConical, BookOpen, FileCheck } from "lucide-react";
import inspectionImg from "@/assets/inspection-2.jpg";

const items = [
  { icon: Eye, title: "Inspeção Visual e Dimensional", desc: "Avaliação minuciosa conforme NR-13 para identificação de desgastes, corrosão e irregularidades em vasos de pressão e caldeiras." },
  { icon: FlaskConical, title: "Ensaios Não Destrutivos (END)", desc: "Técnicas avançadas de END — ultrassom, líquido penetrante e partículas magnéticas — para inspeção NR-13." },
  { icon: BookOpen, title: "Abertura de Livro de Registro", desc: "Correta abertura do livro de registro de segurança conforme exigido pela NR-13 para caldeiras e vasos de pressão." },
  { icon: FileCheck, title: "Reconstituição de Prontuário", desc: "Elaboração de memoriais de cálculos e reconstituição de prontuários conforme NR-13 com software de última geração." },
];

const ServicesIncluded = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4">
          O que está incluso na Inspeção NR-13?
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-sm mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={inspectionImg}
            alt="Ensaio não destrutivo por ultrassom em vaso de pressão conforme inspeção NR-13"
            className="rounded-2xl shadow-2xl w-full object-cover max-h-[450px]"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ServicesIncluded;
