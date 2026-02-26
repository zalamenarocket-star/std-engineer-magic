import { motion } from "framer-motion";

const NR13Explainer = () => (
  <section className="py-20 bg-navy">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary-foreground mb-4">
          Tudo sobre Inspeção NR-13: Caldeiras, Vasos de Pressão e Tubulações
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="prose-invert space-y-8 text-primary-foreground/80 leading-relaxed"
      >
        <div>
          <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">
            Por que a Inspeção NR-13 é obrigatória?
          </h3>
          <p className="text-sm">
            A Norma Regulamentadora NR-13, do Ministério do Trabalho e Emprego (MTE), estabelece requisitos mínimos para gestão da integridade estrutural de caldeiras a vapor, vasos de pressão, suas tubulações de interligação e tanques metálicos de armazenamento. A inspeção NR-13 é obrigatória para todas as empresas que possuem esses equipamentos, visando prevenir acidentes, proteger trabalhadores e garantir a segurança operacional. O descumprimento da NR-13 pode resultar em multas de até R$ 20.000,00, interdição dos equipamentos e responsabilização civil e criminal.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">
            Como são realizadas as inspeções NR-13?
          </h3>
          <p className="text-sm">
            As inspeções NR-13 de caldeiras e vasos de pressão incluem inspeção de segurança inicial (antes da entrada em funcionamento), inspeção de segurança periódica (em intervalos definidos pela norma) e inspeção de segurança extraordinária (em situações especiais como acidentes ou reparos). As inspeções são realizadas por Profissional Habilitado (PH) — engenheiro com registro ativo no CREA — e incluem exame externo, exame interno e teste hidrostático, além de ensaios não destrutivos (END) como ultrassom, líquido penetrante e partículas magnéticas.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">
            Documentos obrigatórios conforme NR-13
          </h3>
          <p className="text-sm">
            A NR-13 exige que todo equipamento pressurizado possua: Prontuário do equipamento contendo dados de projeto, fabricação e inspeções; Registro de Segurança com todas as ocorrências relevantes; Projeto de Instalação conforme normas técnicas aplicáveis; Relatórios de Inspeção NR-13 assinados por Profissional Habilitado; e Certificados de calibração de válvulas de segurança e manômetros. A ausência de qualquer um desses documentos pode gerar autuação pelo MTE durante fiscalizações.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-heading font-bold text-primary-foreground mb-3">
            Calibração de Válvulas de Segurança e Manômetros
          </h3>
          <p className="text-sm">
            A calibração de válvulas de segurança e manômetros é parte fundamental da inspeção NR-13. As válvulas de segurança são os principais dispositivos de proteção de caldeiras e vasos de pressão, devendo ser calibradas e testadas periodicamente para garantir que atuem na pressão correta de abertura. Os manômetros indicam a pressão de operação dos equipamentos e devem apresentar leitura precisa e confiável. A NR-13 determina que esses instrumentos sejam calibrados em intervalos definidos, com rastreabilidade metrológica, assegurando o funcionamento seguro dos equipamentos pressurizados.
          </p>
        </div>
      </motion.article>
    </div>
  </section>
);

export default NR13Explainer;
