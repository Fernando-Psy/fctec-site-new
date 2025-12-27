import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/neumorphism.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SEO from './components/SEO/SEO';
import { SEOPages } from './components/SEO/seoConfig';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import ServiceDetails from './components/Services/ServiceDetails';
import FAQ from './components/FAQ/FAQ';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';
import Testimonials from './components/Testimonials/Testimonials';
import SubscriptionPlans from './components/SubscriptionPlans/SubscriptionPlans';
import BenefitsResults from './components/BenefitsResults/BenefitsResults';
import ClientsShowcase from './components/ClientsShowcase/ClientsShowcase';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Página Principal */}
          <Route path="/" element={
            <>
              <SEO {...SEOPages.home} />
              <main>
                <div className="container">
                  <Hero />

                <Services />
                <ClientsShowcase />
                <BenefitsResults />
                <SubscriptionPlans />
                <Testimonials />
                <FAQ />
                </div>
                <div className="container">
                  <Location />
                </div>
              </main>
            </>
          } />

          {/* Páginas de Serviços Individuais */}
          <Route path="/servicos/:serviceId" element={
            <>
              <main>
                <ServiceDetails />
              </main>
            </>
          } />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;