import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ContactModal from './ContactModal';
import { servicesData } from './servicesData';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [service, setService] = useState(null);

  useEffect(() => {
    const foundService = servicesData.find(s => s.id === serviceId);
    if (foundService) {
      setService(foundService);
      window.scrollTo(0, 0);
    } else {
      navigate('/');
    }
  }, [serviceId, navigate]);

  if (!service) return null;

  return (
    <>
      <section style={{
        padding: '6rem 2rem 4rem',
        background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)'
      }}>
        <Container>
          {/* Breadcrumb */}
          <nav style={{
            marginBottom: '2rem',
            fontSize: '0.9rem',
            color: '#64748b'
          }}>
            <span
              onClick={() => navigate('/')}
              style={{ cursor: 'pointer', color: '#2563eb' }}
            >
              Início
            </span>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              style={{ cursor: 'pointer', color: '#2563eb' }}
            >
              Serviços
            </span>
            <span style={{ margin: '0 0.5rem' }}>›</span>
            <span style={{ color: '#0f172a', fontWeight: '600' }}>{service.title}</span>
          </nav>

          <Row className="g-5 align-items-center">
            {/* Imagem */}
            <Col lg={6}>
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)',
                border: '1px solid #e2e8f0'
              }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
                {service.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4)'
                  }}>
                    {service.badge}
                  </div>
                )}
              </div>
            </Col>

            {/* Conteúdo */}
            <Col lg={6}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                border: '1px solid rgba(37, 99, 235, 0.2)',
                padding: '0.5rem 1.25rem',
                borderRadius: '50px',
                marginBottom: '1.5rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#1e40af'
              }}>
                <span style={{ fontSize: '1.25rem' }}>{service.icon}</span>
                <span>Serviço Profissional</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '800',
                color: '#0f172a',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em'
              }}>
                {service.title}
              </h1>

              <p style={{
                fontSize: '1.125rem',
                color: '#64748b',
                lineHeight: '1.7',
                marginBottom: '2rem'
              }}>
                {service.detailedDescription || service.description}
              </p>

              {/* Preço */}
              <div style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '1.5rem',
                marginBottom: '2rem',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.06)'
              }}>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#64748b',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  Investimento
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: '#2563eb',
                  letterSpacing: '-0.02em'
                }}>
                  {service.price}
                </div>
              </div>

              {/* Botão CTA */}
              <button
                onClick={() => setShowModal(true)}
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #0d5996 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '1.125rem 2.5rem',
                  borderRadius: '12px',
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 20px rgba(37, 99, 235, 0.35)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(37, 99, 235, 0.45)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.35)';
                }}
              >
                <span>📞</span>
                <span>Solicitar Contato</span>
              </button>

              <p style={{
                fontSize: '0.875rem',
                color: '#64748b',
                margin: 0
              }}>
                ✓ Resposta em até 2 horas • ✓ Sem compromisso
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Detalhadas */}
      <section style={{
        padding: '4rem 2rem',
        background: 'white'
      }}>
        <Container>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: '800',
            color: '#0f172a',
            marginBottom: '3rem',
            textAlign: 'center',
            letterSpacing: '-0.02em'
          }}>
            O Que Está Incluído
          </h2>

          <Row className="g-4">
            {service.features.map((feature, index) => (
              <Col md={6} key={index}>
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: '#f8fafc',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.borderColor = '#2563eb';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    flexShrink: 0
                  }}>
                    ✓
                  </div>
                  <span style={{
                    fontSize: '0.95rem',
                    color: '#334155',
                    fontWeight: '500',
                    lineHeight: '1.6'
                  }}>
                    {feature}
                  </span>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Final */}
      <section style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, #2563eb 0%, #0d5996 100%)',
        textAlign: 'center'
      }}>
        <Container>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: '800',
            color: 'white',
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            Pronto para Começar?
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Entre em contato agora e receba uma proposta personalizada para o seu negócio
          </p>
          <button
            onClick={() => setShowModal(true)}
            style={{
              background: 'white',
              color: '#2563eb',
              border: 'none',
              padding: '1rem 2.5rem',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
          >
            Solicitar Contato Agora
          </button>
        </Container>
      </section>

      {/* Modal de Contato */}
      <ContactModal
        show={showModal}
        onHide={() => setShowModal(false)}
        serviceName={service.title}
      />
    </>
  );
};

export default ServiceDetails;