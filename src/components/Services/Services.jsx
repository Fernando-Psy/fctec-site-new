import { Container, Row, Col } from 'react-bootstrap';
import ServiceCard from './ServiceCard';

const Services = () => {
  const mainServices = [
    {
      image: "/src/assets/images/google_maps.jpeg",
      title: "Google Empresas",
      description: "Configuração completa do Google Meu Negócio para aumentar sua visibilidade e atrair clientes da sua região.",
      price: "A partir de R$ 350,00",
      whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre Google Empresas."
    },
    {
      image: "/src/assets/images/site1.jpeg",
      title: "Página de Conversão Essencial",
      description: "Landing page profissional e otimizada para destacar sua marca e captar contatos de forma rápida e eficiente.",
      price: "A partir de R$ 400,00",
      whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre Página de Conversão Essencial."
    },
    {
      image: "/src/assets/images/site_google_maps.jpeg",
      title: "Visibilidade e Conversão",
      description: "Combine o poder do Google Meu Negócio com uma landing page moderna para atrair e converter clientes em um só pacote.",
      price: "A partir de R$ 700,00",
      whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre Visibilidade e Conversão."
    },
    {
      image: "/src/assets/images/site.jpg",
      title: "Presença Online Profissional",
      description: "Google Meu Negócio, landing page personalizada e domínio exclusivo por um ano. Sua marca com credibilidade e alcance digital.",
      price: "A partir de R$ 800,00",
      whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre Presença Online Profissional."
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