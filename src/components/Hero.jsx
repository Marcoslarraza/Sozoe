import { motion } from 'framer-motion';
import { ArrowDown, Leaf, ShieldCheck, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-shapes">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__blob hero__blob--3" />
      </div>

      <div className="hero__content container">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Leaf size={14} />
          <span>100% Plant-Based Foods</span>
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        >
          Alimentos vegetales
          <br />
          <span className="hero__title-accent">para tu negocio</span>
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          Distribuí productos orgánicos y certificados de alta rotación.
          <br />
          Tofu, yogurt vegetal y manteca plant-based con calidad garantizada.
        </motion.p>

        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a href="#contacto" className="btn btn--primary">
            Quiero ser distribuidor
          </a>
          <a href="#productos" className="btn btn--outline">
            Ver catálogo
          </a>
        </motion.div>

        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          <div className="hero__stat">
            <ShieldCheck size={20} />
            <div>
              <strong>Certificado</strong>
              <span>Orgánico & Kosher</span>
            </div>
          </div>
          <div className="hero__stat">
            <Truck size={20} />
            <div>
              <strong>Distribución</strong>
              <span>Todo el país</span>
            </div>
          </div>
          <div className="hero__stat">
            <Leaf size={20} />
            <div>
              <strong>100% Vegetal</strong>
              <span>Sin conservantes</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero__scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
