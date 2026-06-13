import { lazy, Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import './styles/bootstrap-critical.css';
import './styles/neumorphism.css';
import './App.css';

import { loadCSSIdle } from './utils/loadCSS';
import { useIsSlowConnection } from './hooks/useNetworkStatus';
import { captureUtmParams } from './services/api';

import SEO from './components/SEO/SEO';
import { SEOPages } from './components/SEO/seoConfig';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';
import { regionalPages } from './components/RegionalPages/regionalPages';

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
const RegionalLandingPage = lazy(
  () => import('./components/RegionalPages/RegionalLandingPage')
);
const AppointmentButton = lazy(
  () => import('./components/AppointmentForm/AppointmentButton')
);

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
  const isSlowConnection = useIsSlowConnection();
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  useEffect(() => {
    captureUtmParams();

    const isMobile = window.innerWidth < 768;
    const baseDelay = isMobile ? 800 : 400;
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

          <Route
            path="/servicos/:serviceId"
            element={
              <main>
                <Suspense fallback={<LoadingFallback />}>
                  <ServiceDetails />
                </Suspense>
              </main>
            }
          />

          {regionalPages.map((page) => (
            <Route
              key={page.slug}
              path={`/${page.slug}`}
              element={
                <>
                  <SEO
                    title={page.title}
                    description={page.description}
                    keywords={page.keywords}
                  />
                  <main>
                    <Suspense fallback={<LoadingFallback />}>
                      <RegionalLandingPage />
                    </Suspense>
                  </main>
                </>
              }
            />
          ))}

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
            <Suspense fallback={null}>
              <AppointmentButton />
            </Suspense>
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
