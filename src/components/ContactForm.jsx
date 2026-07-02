import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function ContactForm() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-header__label">Distribuidores</span>
          <h2 className="section-header__title">Sumate a nuestra red</h2>
          <p className="section-header__desc">
            Completá el formulario y nos pondremos en contacto para enviarte
            condiciones comerciales, lista de precios y muestras.
          </p>
        </motion.div>

        <div className="contact__layout">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact__info-item">
              <MapPin size={20} />
              <div>
                <strong>Ubicación</strong>
                <span>Argentina</span>
              </div>
            </div>
            <div className="contact__info-item">
              <Phone size={20} />
              <div>
                <strong>Teléfono</strong>
                <span>+54 9 280 402 2492</span>
              </div>
            </div>
            <div className="contact__info-item">
              <Mail size={20} />
              <div>
                <strong>Email</strong>
                <span>info@sozoe.com.ar</span>
              </div>
            </div>
            <div className="contact__info-item">
              <Globe size={20} />
              <div>
                <strong>Instagram</strong>
                <span>@sozoe.ar</span>
              </div>
            </div>

            <div className="contact__web">
              www.sozoe.com.ar
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
          >
            {submitted ? (
              <motion.div
                className="contact__success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="contact__success-icon">✓</div>
                <h3>¡Mensaje enviado!</h3>
                <p>Nos comunicaremos a la brevedad con información comercial.</p>
              </motion.div>
            ) : (
              <>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="name">Nombre completo *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="company">Empresa / Negocio *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Nombre de la empresa"
                    />
                  </div>
                </div>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@empresa.com"
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+54 9..."
                    />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="city">Ciudad / Provincia *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="¿Dónde estás ubicado?"
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Contanos sobre tu negocio y qué productos te interesan..."
                  />
                </div>
                <button type="submit" className="btn btn--primary contact__submit">
                  <Send size={18} />
                  Enviar consulta
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
