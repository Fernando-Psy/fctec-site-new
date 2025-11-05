import { Card, Button } from 'react-bootstrap';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  const {
    image,
    title,
    description,
    price,
    features = [],
    whatsappLink,
    buttonText = "Solicitar Orçamento",
    badge,
    icon
  } = service;

  return (
    <Card className="service-card-wrapper">
      {/* Badge de Destaque */}
      {badge && (
        <div className="service-badge">
          <span className="badge-text">{badge}</span>
        </div>
      )}

      {/* Imagem do Serviço */}
      <div className="service-image-container">
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          className="service-image"
        />
        <div className="image-overlay">
          <span className="service-icon">{icon}</span>
        </div>
      </div>

      {/* Conteúdo do Card */}
      <Card.Body className="service-body">
        {/* Título */}
        <Card.Title className="service-title">
          {title}
        </Card.Title>

        {/* Descrição */}
        <Card.Text className="service-description">
          {description}
        </Card.Text>

        {/* Features List */}
        {features.length > 0 && (
          <ul className="service-features">
            {features.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Footer do Card */}
        <div className="service-footer">
          {/* Preço */}
          <div className="service-price-container">
            <span className="price-label">Investimento</span>
            <span className="service-price">{price}</span>
          </div>

          {/* Botão de Ação */}
          <Button
            className="service-button"
            onClick={() => window.open(whatsappLink, '_blank', 'noopener,noreferrer')}
          >
            <span className="button-text">{buttonText}</span>
            <span className="button-arrow">→</span>
            <div className="button-shine"></div>
          </Button>
        </div>
      </Card.Body>

      {/* Efeito de Brilho no Hover */}
      <div className="card-glow"></div>
    </Card>
  );
};

export default ServiceCard;