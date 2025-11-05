import { Container, Row, Col } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import './Services.css';

const Services = () => {
  const mainServices = [
    {
      image: "/src/assets/images/google_maps.jpeg",
      title: "Google Meu Negócio",
      description: "Configuração estratégica completa do Google Meu Negócio para maximizar sua visibilidade local e atrair clientes qualificados da sua região.",
      price: "A partir de R$ 350",
      features: ["Otimização de perfil", "Gestão de avaliações", "Posts regulares"],
      whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre Google Empresas.",
      badge: "Mais Popular",
      icon: "🎯"
    },
    {
      image: "/src/assets/images/site1.jpeg",
      title: "Landing Page Premium",
      description: "Página de conversão profissional com design moderno e otimizada para captar leads de forma eficiente e aumentar suas vendas.",
      price: "A partir de R$ 400",
      features: ["Design responsivo", "SEO otimizado", "Formulários integrados"],
      whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre Página de Conversão Essencial.",
      icon: "🚀"
    },
    {
      image: "/src/assets/images/site_google_maps.jpeg",
      title: "Visibilidade Completa",
      description: "Solução integrada que combina o poder do Google Meu Negócio com uma landing page moderna para máxima conversão de clientes.",
      price: "A partir de R$ 700",
      features: ["Google + Landing Page", "Análise de métricas", "Suporte 30 dias"],
      whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre Visibilidade e Conversão.",
      badge: "Melhor Custo-Benefício",
      icon: "💼"
    },
    {
      image: "/src/assets/images/site.jpg",
      title: "Presença Digital Pro",
      description: "Pacote completo: Google Meu Negócio, landing page personalizada e domínio exclusivo. Sua marca com credibilidade total no digital.",
      price: "A partir de R$ 800",
      features: ["Domínio 1 ano grátis", "E-mail profissional", "SSL incluso"],
      whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre Presença Online Profissional.",
      badge: "Premium",
      icon: "⭐"
    }
  ];

  return (
    <section id="products" className="services-section">
      <Container>
        {/* Header da Seção */}
        <div className="services-header">
          <div className="services-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Nossos Serviços</span>
          </div>

          <h2 className="services-title">
            Soluções Sob Medida Para Seu{' '}
            <span className="title-highlight">Negócio</span>
          </h2>

          <p className="services-description">
            Escolha o pacote ideal para transformar sua presença digital e
            alcançar resultados extraordinários no mercado online.
          </p>
        </div>

        {/* Grid de Serviços */}
        <Row className="g-4 services-grid">
          {mainServices.map((service, index) => (
            <Col
              key={index}
              lg={6}
              md={6}
              className="service-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard service={service} />
            </Col>
          ))}
        </Row>

        {/* CTA Footer */}
        <div className="services-cta">
          <div className="cta-card">
            <div className="cta-content">
              <h3 className="cta-title">
                Não encontrou o que procura?
              </h3>
              <p className="cta-text">
                Entre em contato e criaremos uma solução personalizada
                especialmente para suas necessidades.
              </p>
            </div>
            <a
              href="https://wa.me/5521968810478?text=Oi, gostaria de um orçamento personalizado."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              <span className="cta-button-text">Falar com Consultor</span>
              <span className="cta-button-icon">→</span>
            </a>
          </div>
        </div>
      </Container>

      {/* Background Decorations */}
      <div className="services-bg-element services-bg-1"></div>
      <div className="services-bg-element services-bg-2"></div>
    </section>
  );
};

export default Services;