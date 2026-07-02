import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Certifications from './components/Certifications';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollWaves from './components/ScrollWaves';
import './App.css';

function App() {
  return (
    <>
      <ScrollWaves />
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Certifications />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
