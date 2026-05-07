import { lazy, Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

// CSS Crítico (carregado imediatamente)
import './styles/bootstrap-critical.css'; // Bootstrap mínimo para Hero/Header
import './styles/neumorphism.css';
import './App.css';

// Utilitário para carregar CSS não bloqueante
import { loadCSSIdle } from './utils/loadCSS';

// Hook para detecção de conexão lenta
import { useIsSlowConnection } from './hooks/useNetworkStatus';

import SEO from './components/SEO/SEO';
import { SEOPages } from './components/SEO/seoConfig';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';

// Lazy loading para componentes pesados
const AboutCompany = lazy(
  () => import('./components/AboutCompany/AboutCompany')
);
const Services = lazy(() => import('./components/Services/Services'));
const ServiceDetails = lazy(
  () => import('./components/Services/ServiceDetails')
);
const ClientsShowcase = lazy(
  () => import('./components/ClientsShowcase/ClientsShowcase')
);
const BenefitsResults = lazy(
  () => import('./components/BenefitsResults/BenefitsResults')
);
const FreeResources = lazy(
  () => import('./components/FreeResources/FreeResources')
);
const SoroBlog = lazy(() => import('./components/SoroBlog/SoroBlog'));
const AdminBlog = lazy(() => import('./components/AdminBlog/AdminBlog'));
const ContactForm = lazy(() => import('./components/ContactForm/ContactForm'));
const FAQ = lazy(() => import('./components/FAQ/FAQ'));
const Location = lazy(() => import('./components/Location/Location'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const PrivacyPolicy = lazy(
  () => import('./components/PrivacyPolicy/PrivacyPolicy')
);
const TermsOfService = lazy(
  () => import('./components/TermsOfService/TermsOfService')
);

// Loading component
const LoadingFallback = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '200px',
      color: '#4e83af',
    }}
  >
    <div className="loading-spinner" />
  </div>
);

function AppContent() {
  // Detectar conexão lenta para otimizações adaptativas
  const isSlowConnection = useIsSlowConnection();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Carregar Bootstrap CSS de forma assíncrona após renderização inicial
  useEffect(() => {
    // Carregar Bootstrap de forma idle para não bloquear LCP
    // Usar maior delay em dispositivos mobile e conexões lentas
    const isMobile = window.innerWidth < 768;
    const baseDelay = isMobile ? 800 : 400;

    // Aumentar delay em conexões lentas para priorizar conteúdo crítico
    const delay = isSlowConnection ? baseDelay * 1.5 : baseDelay;

    const timeoutId = setTimeout(() => {
      loadCSSIdle(
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
        'bootstrap-css'
      );
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [isSlowConnection]);

  return (
    <>
      <ScrollToTop />
      <div className="App">
        {!isAdminRoute ? <Header /> : null}
        <Routes>
          {/* Página Principal */}
          <Route
            path="/"
            element={
              <>
                <SEO {...SEOPages.home} />
                <main>
                  <Hero />
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
                    <FAQ />
                  </Suspense>
                  <Suspense fallback={<LoadingFallback />}>
                    <ClientsShowcase />
                  </Suspense>
                  <Suspense fallback={<LoadingFallback />}>
                    <ContactForm />
                  </Suspense>
                  <Suspense fallback={<LoadingFallback />}>
                    <Location />
                  </Suspense>
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

          {/* Blog */}
          <Route
            path="/blog"
            element={
              <>
                <SEO {...SEOPages.blog} />
                <main>
                  <Suspense fallback={<LoadingFallback />}>
                    <SoroBlog />
                  </Suspense>
                </main>
              </>
            }
          />

          <Route
            path="/blog/:slug"
            element={
              <>
                <SEO {...SEOPages.blog} />
                <main>
                  <Suspense fallback={<LoadingFallback />}>
                    <SoroBlog />
                  </Suspense>
                </main>
              </>
            }
          />

          <Route
            path="/admin"
            element={
              <main>
                <Suspense fallback={<LoadingFallback />}>
                  <AdminBlog />
                </Suspense>
              </main>
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
        {!isAdminRoute ? (
          <>
            <Suspense fallback={<LoadingFallback />}>
              <Footer />
            </Suspense>
            <WhatsAppFloat />
          </>
        ) : null}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
