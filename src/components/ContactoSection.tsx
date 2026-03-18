import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin } from "lucide-react";

const ContactoSection = () => {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground/60 mb-3">Hablemos</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Contacto</h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-10" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
            <motion.a
              href="https://mail.google.com/mail/?view=cm&to=municipioscima@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl px-6 py-4 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <Mail size={20} />
              <span className="font-medium">municipioscima@gmail.com</span>
            </motion.a>

            <motion.a
              href="https://instagram.com/cimamunicipios"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl px-6 py-4 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <Instagram size={20} />
              <span className="font-medium">@cimamunicipios</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/company/centro-de-investigaciones-municipales-aplicadas/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl px-6 py-4 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <Linkedin size={20} />
              <span className="font-medium">CIMA LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactoSection;
