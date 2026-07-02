import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sprout, Award, Recycle, Heart } from 'lucide-react';

const features = [
  {
    icon: Sprout,
    title: 'Orgánico certificado',
    desc: 'Soja orgánica argentina certificada. Procesos libres de agroquímicos.',
  },
  {
    icon: Award,
    title: 'Certificación Kosher',
    desc: 'Todos nuestros productos cuentan con certificación Kosher Parve.',
  },
  {
    icon: Recycle,
    title: 'Producción sustentable',
    desc: 'Compromiso con el medio ambiente en cada etapa del proceso productivo.',
  },
  {
    icon: Heart,
    title: 'Sin conservantes',
    desc: 'Alimentos naturales sin agregados artificiales. Sabor auténtico.',
  },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="nosotros" className="about">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-header__label">Nosotros</span>
          <h2 className="section-header__title">¿Por qué Sozoé?</h2>
          <p className="section-header__desc">
            Somos una empresa argentina que elabora alimentos 100% vegetales
            con los más altos estándares de calidad y certificaciones internacionales.
          </p>
        </motion.div>

        <div className="about__grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FeatureCard key={feature.title} feature={feature} Icon={Icon} index={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, Icon, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="about__card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -4 }}
    >
      <div className="about__card-icon">
        <Icon size={24} />
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.desc}</p>
    </motion.div>
  );
}
