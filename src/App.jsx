import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/neumorphism.css';
import './App.css';

import SEO from './components/SEO/SEO';
import { SEOPages } from './components/SEO/seoConfig';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import FAQ from './components/FAQ/FAQ';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';

function App() {
  return (
    <div className="App">
      <SEO {...SEOPages.home} />
      <Header />
      <main>
        <div className="container">
          <Hero />
        </div>
          <Services />
          <FAQ />
        <div className="container">
          <Location />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;