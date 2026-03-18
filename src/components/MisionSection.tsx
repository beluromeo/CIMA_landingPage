import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const objetivos = [
  "Ser un centro de investigaciones municipales de alcance regional, nacional e internacional.",
  "Contribuir al mejoramiento del funcionamiento y la prestación de servicios de los gobiernos municipales.",
  "Promover la autonomía de los gobiernos municipales dentro de un marco de respeto y colaboración.",
  "Generar conocimientos que sirvan a gobiernos locales, ONGs, empresas y la sociedad en general.",
];

const MisionSection = () => {
  return (
    <section id="mision" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-accent mb-3">Nuestra Visión</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">Misión y Objetivos</h2>
          <div className="accent-bar mx-auto" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          >
            <h3 className="font-heading text-xl font-bold text-foreground mb-5">Nuestra Misión</h3>
            <p className="text-muted-foreground leading-relaxed text-[15px]">
              "Ser un reconocido Centro de Investigaciones Municipales, dedicado al desarrollo y perfeccionamiento de la gestión municipal en todo el país, contribuyendo al mejoramiento de las acciones y prácticas de la administración pública local, a través de la investigación, capacitación, y asistencia directa a los municipios."
            </p>
            <div className="mt-6 p-4 rounded-lg bg-primary/5 border-l-4 border-primary">
              <p className="text-sm text-foreground font-medium">
                Los principios rectores: <span className="text-primary font-bold">honestidad, austeridad, eficacia y eficiencia.</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">Objetivos Generales</h3>
            <ul className="space-y-4">
              {objetivos.map((obj, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-muted-foreground text-[15px] leading-relaxed">{obj}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MisionSection;
