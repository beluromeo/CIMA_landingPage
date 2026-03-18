import { motion } from "framer-motion";
import { Users, Target, Lightbulb } from "lucide-react";

const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-accent mb-3">Presentación</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">Quiénes Somos</h2>
          <div className="accent-bar mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-12 text-center"
          >
            El Centro de Investigaciones Municipales Aplicadas -CIMA- es una organización creada en el año 2003 con el fin de contribuir a la elevación de la capacidad de gestión de los gobiernos municipales. Los servicios brindados por CIMA contribuyen a que los municipios cuenten con una administración más efectiva y transparente, y posean herramientas que les permitan realizar una gestión eficiente y ordenada. Para el cumplimiento de estos propósitos, el CIMA está conformado por un equipo de profesionales multidisciplinario, con experiencia en la gestión local, provincial y nacional, la investigación, el dictado de cursos de capacitación, y la asistencia directa a gobiernos municipales de diversas regiones del país.
          </motion.p>

          {/* Tres columnas horizontales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Investigación", desc: "Ahondamos en el conocimiento de realidades locales para diagnosticar y resolver problemas municipales." },
              { icon: Target, title: "Capacitación", desc: "Sistematizamos y difundimos conocimiento adquirido para fortalecer las capacidades de los funcionarios." },
              { icon: Lightbulb, title: "Asistencia", desc: "Aplicamos conocimientos para responder a requerimientos concretos de los gobiernos locales." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + 0.1 * i }}
                className="bg-secondary rounded-xl p-6 flex flex-col items-start gap-4 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-primary-foreground" size={22} />
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
