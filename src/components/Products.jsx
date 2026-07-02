import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="productos" className="products">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-header__label">Catálogo</span>
          <h2 className="section-header__title">Nuestros productos</h2>
          <p className="section-header__desc">
            Línea completa de alimentos 100% vegetales, elaborados con ingredientes
            certificados y procesos de calidad.
          </p>
        </motion.div>

        <div className="products__grid">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onClick={setSelectedProduct}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
