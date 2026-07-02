import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShieldCheck, Leaf } from 'lucide-react';

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="certificaciones" className="certifications">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-header__label">Calidad garantizada</span>
          <h2 className="section-header__title">Certificaciones</h2>
        </motion.div>

        <div className="certifications__grid">
          <CertCard
            icon={<Leaf size={32} />}
            title="Orgánico Argentina"
            desc="Certificación orgánica nacional para nuestro tofu de soja. Garantía de producción libre de agroquímicos y transgénicos."
            index={0}
          />
          <CertCard
            icon={<ShieldCheck size={32} />}
            title="Kosher Parve"
            desc="Certificación Kosher Parve otorgada por Yeshivat Jafetz Jaim Argentina. Todos nuestros productos son aptos."
            index={1}
          />
        </div>
      </div>
    </section>
  );
}

function CertCard({ icon, title, desc, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="cert-card"
      initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="cert-card__icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </motion.div>
  );
}
