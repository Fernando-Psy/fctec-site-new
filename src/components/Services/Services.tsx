import { Container, Row, Col } from 'react-bootstrap';
import ServiceCard from './ServiceCard';

const Services = () => {
  const mainServices = [
    {
      image: "/src/assets/images/web-development.jpg",
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web personalizadas com React, Django e outras tecnologias modernas. Design responsivo, performance otimizada e experiência do usuário excepcional.",
      price: "A partir de R$ 1.500,00",
      whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre desenvolvimento web."
    },
    {
      image: "/src/assets/images/seo.jpg",
      title: "Otimização SEO",
      description: "Melhore seu posicionamento nos mecanismos de busca com nossa estratégia completa de SEO técnico e de conteúdo.",
      price: "A partir de R$ 800,00",
      whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre SEO."
    },
    {
      image: "/src/assets/images/social-media.jpg",
      title: "Gestão de Redes Sociais",
      description: "Estratégia completa para redes sociais incluindo criação de conteúdo, gestão de comunidade e análise de resultados.",
      price: "A partir de R$ 1.200,00/mês",
      whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre gestão de redes sociais."
    }
  ];

  return (
    <section id="products" className="py-6 bg-white">
      <Container>
        <div className="text-center mb-6">
          <h2 className="display-5 fw-bold mb-3 pt-5">Nossos Serviços</h2>
          <p className="lead text-muted">
            Soluções personalizadas para impulsionar seu negócio digital
          </p>
        </div>

        <Row className="g-4 pb-5">
          {mainServices.map((service, index) => (
            <Col key={index} lg={4} md={6}>
              <ServiceCard service={service} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;