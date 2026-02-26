const Footer = () => (
  <footer className="bg-navy-dark py-10 border-t border-secondary/20">
    <div className="container text-center">
      <p className="font-heading font-bold text-primary-foreground text-lg mb-1">
        STD <span className="text-primary">Engenharia</span>
      </p>
      <p className="text-primary-foreground/50 text-sm mb-2">
        Padrão em Qualidade desde 1996
      </p>
      <p className="text-primary-foreground/40 text-xs mb-4">
        Inspeção NR-13 · Caldeiras · Vasos de Pressão · Tubulações · Tanques · Calibração de Válvulas e Manômetros
      </p>
      <p className="text-primary-foreground/40 text-xs mb-2">
        © 2026 STD Standard Engenharia. Todos os direitos reservados.
      </p>
      <p className="text-primary-foreground/40 text-xs">
        Criado por{" "}
        <a
          href="https://zrocket.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          Z Rocket | Marketing &amp; IT
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
