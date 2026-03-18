const Footer = () => {
  return (
    <footer className="bg-foreground py-8">
      <div className="container mx-auto px-6 text-center space-y-2">
        <p className="text-background/60 text-sm">
          © {new Date().getFullYear()} CIMA — Centro de Investigaciones Municipales Aplicadas. Todos los derechos reservados.
        </p>
        <p className="text-background/40 text-xs">
          Desarrollado por{" "}
          <a
            href="https://www.lrsolutions.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-background/60 hover:text-background transition-colors underline underline-offset-2"
          >
           
            L&R Solutions

             <img
              src="/SINFondo.png"
              alt="L&R Solutions"
              className="h-4 w-auto"
            />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
