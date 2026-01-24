import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/neumorphism.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SEO from "./components/SEO/SEO";
import { SEOPages } from "./components/SEO/seoConfig";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WhatsAppFloat from "./components/WhatsAppFloat/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";

// Lazy loading para componentes pesados
const AboutCompany = lazy(
  () => import("./components/AboutCompany/AboutCompany"),
);
const Services = lazy(() => import("./components/Services/Services"));
const ServiceDetails = lazy(
  () => import("./components/Services/ServiceDetails"),
);
const ClientsShowcase = lazy(
  () => import("./components/ClientsShowcase/ClientsShowcase"),
);
const BenefitsResults = lazy(
  () => import("./components/BenefitsResults/BenefitsResults"),
);
const Testimonials = lazy(
  () => import("./components/Testimonials/Testimonials"),
);
const ContactForm = lazy(() => import("./components/ContactForm/ContactForm"));
const FAQ = lazy(() => import("./components/FAQ/FAQ"));
const Location = lazy(() => import("./components/Location/Location"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const PrivacyPolicy = lazy(
  () => import("./components/PrivacyPolicy/PrivacyPolicy"),
);
const TermsOfService = lazy(
  () => import("./components/TermsOfService/TermsOfService"),
);

// Loading component
const LoadingFallback = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "200px",
      color: "#4e83af",
    }}
  >
    <div
      style={{
        width: "40px",
        height: "40px",
        border: "4px solid rgba(37, 99, 235, 0.1)",
        borderTopColor: "#4e83af",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }}
    />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          {/* Página Principal */}
          <Route
            path="/"
            element={
              <>
                <SEO {...SEOPages.home} />
                <main>
                  <Hero />
                  <div className="container">
                    <Suspense fallback={<LoadingFallback />}>
                      <AboutCompany />
                    </Suspense>
                    <Suspense fallback={<LoadingFallback />}>
                      <Services />
                    </Suspense>
                    <Suspense fallback={<LoadingFallback />}>
                      <BenefitsResults />
                    </Suspense>
                    <Suspense fallback={<LoadingFallback />}>
                      <ClientsShowcase />
                    </Suspense>
                    <Suspense fallback={<LoadingFallback />}>
                      <Testimonials />
                    </Suspense>
                    <Suspense fallback={<LoadingFallback />}>
                      <ContactForm />
                    </Suspense>
                    <Suspense fallback={<LoadingFallback />}>
                      <FAQ />
                    </Suspense>
                  </div>
                  <div className="container">
                    <Suspense fallback={<LoadingFallback />}>
                      <Location />
                    </Suspense>
                  </div>
                </main>
              </>
            }
          />

          {/* Páginas de Serviços Individuais */}
          <Route
            path="/servicos/:serviceId"
            element={
              <>
                <SEO {...SEOPages.services} />
                <main>
                  <Suspense fallback={<LoadingFallback />}>
                    <ServiceDetails />
                  </Suspense>
                </main>
              </>
            }
          />

          {/* Política de Privacidade */}
          <Route
            path="/politica-privacidade"
            element={
              <>
                <SEO
                  title="Política de Privacidade | FCBJ Desenvolvimento"
                  description="Conheça nossa política de privacidade e como protegemos seus dados em conformidade com a LGPD."
                />
                <main>
                  <Suspense fallback={<LoadingFallback />}>
                    <PrivacyPolicy />
                  </Suspense>
                </main>
              </>
            }
          />

          {/* Termos de Uso */}
          <Route
            path="/termos-de-uso"
            element={
              <>
                <SEO
                  title="Termos de Uso | FCBJ Desenvolvimento"
                  description="Conheça os termos e condições de uso dos nossos serviços e site."
                />
                <main>
                  <Suspense fallback={<LoadingFallback />}>
                    <TermsOfService />
                  </Suspense>
                </main>
              </>
            }
          />
        </Routes>
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
