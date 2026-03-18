import { motion } from "framer-motion";
import { Search, GraduationCap, Handshake } from "lucide-react";

const actividades = [
  {
    icon: Search,
    title: "Investigación",
    items: [
      "Análisis político local",
      "Aptitud productiva y comercial local",
      "Encuestas de satisfacción de gobierno",
      "Modelos de gobierno local",
      "Planes estratégicos",
      "Buenas prácticas municipales",
    ],
  },
  {
    icon: GraduationCap,
    title: "Capacitación",
    items: [
      "Estrategia y Gestión Municipal",
      "Formulación de Políticas Públicas",
      "Calidad y Técnica Legislativa",
      "Administración y Presupuesto",
      "Comunicación e Identidad Municipal",
      "Producción y Desarrollo Local",
    ],
  },
  {
    icon: Handshake,
    title: "Asistencia Directa",
    items: [
      "Administración tributaria municipal",
      "Asesoramiento en estrategias de gobierno",
      "Digestos municipales",
      "Elaboración de planes de gobierno",
      "Cartas Orgánicas Municipales",
      "Modernización del Estado Municipal",
    ],
  },
];

const QueHacemos = () => {
  return (
    <section id="que-hacemos" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-accent mb-3">Nuestras Actividades</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">Qué Hacemos</h2>
          <div className="accent-bar mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {actividades.map((act, i) => (
            <motion.div
              key={act.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="rounded-2xl border border-border bg-background p-8 card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-6">
                <act.icon className="text-primary-foreground" size={22} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-5">{act.title}</h3>
              <ul className="space-y-3">
                {act.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QueHacemos;
