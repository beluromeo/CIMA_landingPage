import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpeg";
import hero2 from "@/assets/fotos/hero2.jpeg";
import hero3 from "@/assets/fotos/hero3.jpeg";
import hero4 from "@/assets/fotos/hero4.jpeg";
import hero5 from "@/assets/fotos/hero5.jpeg";

const images = [heroBg, hero2, hero3, hero4, hero5];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Avance automático cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carrusel de fondo */}
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={images[current]}
          alt={`Hero ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 hero-gradient" />

      {/* Controles laterales */}
      <button
        onClick={prev}
        aria-label="Imagen anterior"
        className="absolute left-4 md:left-8 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        aria-label="Imagen siguiente"
        className="absolute right-4 md:right-8 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores de puntos */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir a imagen ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-heading text-5xl md:text-7xl font-black text-primary-foreground mb-6 leading-tight tracking-tight">
            CIMA
          </h1>
          <p className="font-heading text-lg md:text-2xl font-semibold text-primary-foreground/90 mb-3 tracking-wide uppercase">
            Centro de Investigaciones Municipales Aplicadas
          </p>
          <div className="w-20 h-1 bg-accent mx-auto my-8 rounded-full" />
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-body leading-relaxed">
            Fortaleciendo la gestión local a través de la investigación, capacitación y asistencia a municipios de todo el país.
          </p>

          <motion.a
            href="#quienes-somos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="inline-flex items-center gap-2 mt-12 px-8 py-3 rounded-full bg-accent text-accent-foreground font-heading font-semibold text-sm uppercase tracking-wider hover:brightness-110 transition-all"
          >
            Conocenos
            <ChevronDown size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
