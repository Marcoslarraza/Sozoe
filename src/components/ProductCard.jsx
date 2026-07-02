import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ProductCard({ product, index, onClick }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="product-card"
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => onClick(product)}
    >
      <div
        className="product-card__image-wrapper"
        style={{ background: `linear-gradient(135deg, ${product.color}, #ffffff)` }}
      >
        <img src={product.image} alt={product.name} className="product-card__image" />
      </div>
      <div className="product-card__content">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__subtitle">{product.subtitle}</p>
        <div className="product-card__tags">
          {product.sizes.map((size) => (
            <span key={size} className="product-card__tag">{size}</span>
          ))}
          <span className="product-card__tag product-card__tag--green">
            {product.shelfLife.split('/')[0]}
          </span>
        </div>
        <button className="product-card__btn">Ver detalle</button>
      </div>
    </motion.div>
  );
}
