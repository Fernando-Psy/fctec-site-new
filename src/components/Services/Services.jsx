import { Container, Row, Col } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import './Services.css';
import googleMapsImage from "../../assets/images/google_maps.jpeg";
import site1Image from "../../assets/images/site1.jpeg";
import siteManutencao from "../../assets/images/manutencao.jpg";
import siteImage from "../../assets/images/site.jpg";

const Services = () => {
  const mainServices = [
    {
      image: googleMapsImage,
      title: "Google Meu Negócio",
      description: "Configuração estratégica completa do Google Meu Negócio para maximizar sua visibilidade local e atrair clientes qualificados da sua região.",
      price: "A partir de R$ 450",
      features: ["Otimização de perfil", "Landing Page básica", "Deploy grátis"],
      whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre Google Empresas.",
      badge: "Mais Popular",
      icon: "🎯"
    },
    {
      image: site1Image,
      title: "Sistema Web Personalizado",
      description: "Ideal para clínicas, consultórios, escolas ou pequenos negócios que precisam automatizar agendas, cadastros ou relatórios.",
      price: "A partir de R$ 8.000",
      features: ["Backend robusto (Python + Django)", "Frontend moderno (React)", "Banco de dados PostgreSQL", "Deploy profissional (Docker + AWS/Heroku)"],
      whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre Sistema Web Personalizado.",
      badge: "Premium",
      icon: "⚙️"
    },
    {
      image: siteImage,
      title: "Presença Digital Inteligente",
      description: "Site institucional ou portfólio com CMS integrado (você edita o conteúdo sem depender de programador).",
      price: "A partir de R$ 1.800",
      features: ["Totalmente responsivo", "Painel de atualização fácil", "Hospedagem segura", "Integrado ao WhatsApp"],
      whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre Presença Digital Inteligente.",
      badge: "Melhor Custo-Benefício",
      icon: "🌐"
    },
    {
      image: siteManutencao,
      title: "Manutenção Básica de Sistemas",
      description: "90% dos sistemas quebram por falta de atualização. Garanta que seu sistema esteja sempre atualizado.",
      price: "A partir de R$ 350/mês",
      features: ["Correções", "Ajustes", "Trocas de imagens", "Atualizações de segurança", "Melhorias de performance"],
      whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre Manutenção Básica.",
      icon: "⚙️"
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