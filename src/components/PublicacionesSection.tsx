import { motion } from "framer-motion";
import { BookOpen, Download } from "lucide-react";

const PublicacionesSection = () => {
  return (
    <section id="publicaciones" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-accent mb-3">Conocimiento</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">Nuestras Publicaciones</h2>
          <div className="accent-bar mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Accedé a nuestros trabajos de investigación, informes y documentos de análisis.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
          {[
            { title: "Modelos de Gobierno Local", desc: "Investigación sobre diferentes modelos de gestión municipal en Argentina." },
            { title: "Buenas Prácticas Municipales", desc: "Compilación de experiencias exitosas en la gestión pública local." },
            { title: "Planes Estratégicos", desc: "Guía para la formulación de planes estratégicos de desarrollo local." },
            { title: "Índices de Satisfacción", desc: "Resultados de encuestas sobre satisfacción ciudadana con la gestión local." },
          ].map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="bg-background border border-border rounded-xl p-6 card-hover group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-primary" size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-base font-bold text-foreground mb-1">{pub.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pub.desc}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <Download size={14} />
                Próximamente
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicacionesSection;
