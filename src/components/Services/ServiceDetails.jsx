import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ContactModal from './ContactModal';
import { servicesData } from './servicesData';
import { scrollToElement } from '../../utils/scrollUtils';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [service, setService] = useState(null);

  useEffect(() => {
    const foundService = servicesData.find((s) => s.id === serviceId);
    if (foundService) {
      setService(foundService);
      // Usar requestAnimationFrame para evitar reflow forçado após setState
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      });
    } else {
      navigate('/');
    }
  }, [serviceId, navigate]);

  if (!service) return null;

  return (
    <>
      <section
        style={{
          padding: '6rem 2rem 4rem',
          background:
            'radial-gradient(circle at 15% 20%, rgba(6, 182, 212, 0.13) 0%, transparent 32%), radial-gradient(circle at 78% 12%, rgba(99, 102, 241, 0.14) 0%, transparent 35%), linear-gradient(145deg, #040b1a 0%, #07152c 55%, #0b1e3f 100%)',
        }}
      >
        <Container>
          {/* Breadcrumb */}
          <nav
            style={{
              marginBottom: '2rem',
              fontSize: '0.9rem',
              color: '#94a3b8',
            }}
          >
            <span
              onClick={() => navigate('/')}
              style={{ cursor: 'pointer', color: '#38bdf8' }}
            >
              Início
            </span>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span
              onClick={() => {
                navigate('/');
                // Usar função otimizada que aguarda DOM atualizar
                requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    scrollToElement('products', { behavior: 'smooth' });
                  });
                });
              }}
              style={{ cursor: 'pointer', color: '#38bdf8' }}
            >
              Serviços
            </span>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span style={{ color: '#e2e8f0', fontWeight: '600' }}>
              {service.title}
            </span>
          </nav>

          <Row className="g-5 align-items-center">
            {/* Imagem */}
            <Col lg={6}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(2, 6, 23, 0.45)',
                  border: '1px solid rgba(148, 163, 184, 0.24)',
                }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </div>
            </Col>

            {/* Conteúdo */}
            <Col lg={6}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(6, 182, 212, 0.14)',
                  border: '1px solid rgba(34, 211, 238, 0.35)',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '50px',
                  marginBottom: '1.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#67e8f9',
                }}
              >
                <span style={{ fontSize: '1.25rem' }}>{service.icon}</span>
                <span>Especialidade Tecnica</span>
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: '800',
                  color: '#e2e8f0',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {service.title}
              </h1>

              <p
                style={{
                  fontSize: '1.125rem',
                  color: '#cbd5e1',
                  lineHeight: '1.7',
                  marginBottom: '2.5rem',
                }}
              >
                {service.detailedDescription || service.description}
              </p>

              {/* Botões CTA */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <button
                  onClick={() => setShowModal(true)}
                  style={{
                    background:
                      'linear-gradient(135deg, #1e3a8a 0%, #0284c7 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '1.125rem 2.5rem',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 20px rgba(59, 130, 246, 0.3)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow =
                      '0 12px 28px rgba(37, 99, 235, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow =
                      '0 8px 20px rgba(37, 99, 235, 0.3)';
                  }}
                >
                  <span>📧</span>
                  <span>Entrar em Contato</span>
                </button>

                <a
                  href={service.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#06cf9c',
                    color: 'white',
                    border: 'none',
                    padding: '1.125rem 2.5rem',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 20px rgba(6, 207, 156, 0.3)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    textDecoration: 'none',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow =
                      '0 12px 28px rgba(6, 207, 156, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow =
                      '0 8px 20px rgba(6, 207, 156, 0.3)';
                  }}
                >
                  <span>💬</span>
                  <span>Conversar no WhatsApp</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Detalhadas */}
      <section
        style={{
          padding: '4rem 2rem',
          background:
            'radial-gradient(circle at 80% 80%, rgba(99, 102, 241, 0.12) 0%, transparent 35%), linear-gradient(145deg, #07152c 0%, #0b1e3f 100%)',
        }}
      >
        <Container>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '800',
              color: '#e2e8f0',
              marginBottom: '3rem',
              textAlign: 'center',
              letterSpacing: '-0.02em',
            }}
          >
            Escopo Tecnico
          </h2>

          <Row className="g-4">
            {service.features.map((feature, index) => (
              <Col md={6} key={index}>
                <div
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1.5rem',
                    background: 'rgba(15, 23, 42, 0.84)',
                    borderRadius: '12px',
                    border: '1px solid rgba(148, 163, 184, 0.24)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(15, 23, 42, 0.96)';
                    e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.45)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(15, 23, 42, 0.84)';
                    e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.24)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      background:
                        'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </div>
                  <span
                    style={{
                      fontSize: '0.95rem',
                      color: '#e2e8f0',
                      fontWeight: '500',
                      lineHeight: '1.6',
                    }}
                  >
                    {feature}
                  </span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Modal de Contato */}
      <ContactModal
        show={showModal}
        onHide={() => setShowModal(false)}
        serviceName={service.title}
        serviceId={service.id}
      />
    </>
  );
};

export default ServiceDetails;
