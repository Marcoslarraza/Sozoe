import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cardVariants = [
  { initial: { opacity: 0, x: -60, rotate: -3 }, animate: { opacity: 1, x: 0, rotate: 0 } },
  { initial: { opacity: 0, x: 60, rotate: 3 }, animate: { opacity: 1, x: 0, rotate: 0 } },
  { initial: { opacity: 0, y: 80, scale: 0.8 }, animate: { opacity: 1, y: 0, scale: 1 } },
  { initial: { opacity: 0, scale: 0.5, rotate: -5 }, animate: { opacity: 1, scale: 1, rotate: 0 } },
  { initial: { opacity: 0, y: -60, x: 30 }, animate: { opacity: 1, y: 0, x: 0 } },
];

export default function ProductCard({ product, index, onClick }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const variant = cardVariants[index % cardVariants.length];

  return (
    <motion.div
      ref={ref}
      className="product-card"
      initial={variant.initial}
      animate={inView ? variant.animate : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => onClick(product)}
    >
      <div className="product-card__image-wrapper">
        <motion.img
          src={product.image}
          alt={product.name}
          className="product-card__image"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        />
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
