import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.footer
      ref={ref}
      className="footer"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <span className="footer__logo">
              <span>SOZO</span>
              <span className="footer__logo-accent">É</span>
            </span>
            <p className="footer__tagline">BETTER FOODS</p>
            <p className="footer__desc">
              Alimentos 100% vegetales, elaborados con ingredientes certificados y procesos de calidad.
            </p>
          </div>

          <div className="footer__links">
            <h4>Navegación</h4>
            <a href="#productos">Productos</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#certificaciones">Certificaciones</a>
            <a href="#contacto">Contacto</a>
          </div>

          <div className="footer__links">
            <h4>Productos</h4>
            <a href="#productos">Tofu Orgánico</a>
            <a href="#productos">Veganteca</a>
            <a href="#productos">Vegurt Natural</a>
            <a href="#productos">Vegurt Frutilla</a>
            <a href="#productos">Vegurt Frutos Rojos</a>
          </div>

          <div className="footer__links">
            <h4>Contacto</h4>
            <span>info@sozoe.com.ar</span>
            <span>+54 9 280 402 2492</span>
            <span>@sozoe.ar</span>
            <span>www.sozoe.com.ar</span>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2024 Sozoé Better Foods. Todos los derechos reservados.</p>
          <p>Industria Argentina</p>
        </div>
      </div>
    </motion.footer>
  );
}
