import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const {
    id,
    image,
    title,
    description,
    price,
    features = [],
    badge,
    icon
  } = service;

  const handleClick = () => {
    navigate(`/servicos/${id}`);
  };

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

        {/* Features List (limitado a 3) */}
        {features.length > 0 && (
          <ul className="service-features">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">{feature}</span>
              </li>
            ))}
            {features.length > 3 && (
              <li className="feature-item" style={{ fontStyle: 'italic', color: '#2563eb' }}>
                <span className="feature-check">+</span>
                <span className="feature-text">E mais {features.length - 3} benefícios...</span>
              </li>
            )}
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
          <button
            className="service-button"
            onClick={handleClick}
          >
            <span className="button-text">Ver Detalhes</span>
            <span className="button-arrow">→</span>
            <div className="button-shine"></div>
          </button>
        </div>
      </Card.Body>

      {/* Efeito de Brilho no Hover */}
      <div className="card-glow"></div>
    </Card>
  );
};

export default ServiceCard;