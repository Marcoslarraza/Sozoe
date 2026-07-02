import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Clock, Package } from 'lucide-react';

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modal = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 25 },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    y: 40,
    transition: { duration: 0.25 },
  },
};

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="modal-backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="modal"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal__close" onClick={onClose}>
              <X size={18} />
            </button>

            <div className="modal__layout">
              <div className="modal__image-section">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="modal__image"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                />
              </div>

              <div className="modal__info">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <h2 className="modal__title">{product.name}</h2>
                  <p className="modal__subtitle">{product.subtitle}</p>
                </motion.div>

                <motion.p
                  className="modal__description"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  {product.description}
                </motion.p>

                <motion.div
                  className="modal__details"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <div className="modal__detail">
                    <Package size={18} />
                    <span>Presentaciones: {product.sizes.join(', ')}</span>
                  </div>
                  <div className="modal__detail">
                    <Clock size={18} />
                    <span>Vida útil: {product.shelfLife}</span>
                  </div>
                </motion.div>

                <motion.div
                  className="modal__features"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  <h4>Características</h4>
                  <ul>
                    {product.features.map((feature) => (
                      <li key={feature}>
                        <Check size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="modal__certifications"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55 }}
                >
                  {product.certifications.map((cert) => (
                    <span key={cert} className="modal__cert-badge">{cert}</span>
                  ))}
                </motion.div>

                <motion.a
                  href="#contacto"
                  className="btn btn--primary modal__cta"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={onClose}
                >
                  Consultar disponibilidad
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
