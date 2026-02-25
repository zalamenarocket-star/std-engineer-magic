const Footer = () => (
  <footer className="bg-navy-dark py-10 border-t border-secondary/20">
    <div className="container text-center">
      <p className="font-heading font-bold text-primary-foreground text-lg mb-1">
        STD <span className="text-primary">Engenharia</span>
      </p>
      <p className="text-primary-foreground/50 text-sm mb-4">
        Padrão em Qualidade desde 1996
      </p>
      <p className="text-primary-foreground/40 text-xs">
        © {new Date().getFullYear()} STD Standard Engenharia. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
