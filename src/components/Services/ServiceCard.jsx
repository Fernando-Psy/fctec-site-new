import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const { image, title, description, features = [], icon } = service;
  const visibleFeatures = features.slice(0, 3);

  const handleClick = () => {
    navigate(`/servicos/${service.slug || service.id}`);
  };

  return (
    <Card className="service-card-wrapper">
      <Card.Body className="service-body">
        <div className="service-card-header">
          {image ? (
            <div className="service-thumb">
              <img
                src={image}
                alt={`Imagem do servico ${title}`}
                loading="lazy"
                decoding="async"
                width="560"
                height="240"
              />
            </div>
          ) : (
            <div className="service-thumb service-thumb-fallback" aria-hidden="true">
              <span className="service-icon">{icon}</span>
            </div>
          )}

          <div className="service-heading">
            <span className="service-icon-badge" aria-hidden="true">
              {icon}
            </span>
            <Card.Title className="service-title">{title}</Card.Title>
          </div>
        </div>

        <Card.Text className="service-description">{description}</Card.Text>

        {features.length > 0 && (
          <ul className="service-features">
            {visibleFeatures.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">{feature}</span>
              </li>
            ))}
            {features.length > visibleFeatures.length && (
              <li className="feature-item feature-item-more">
                <span className="feature-check">+</span>
                <span className="feature-text">
                  E mais {features.length - visibleFeatures.length} recursos...
                </span>
              </li>
            )}
          </ul>
        )}

        <div className="service-footer">
          <button className="service-button" onClick={handleClick}>
            <span className="button-text">Saber Mais</span>
            <span className="button-arrow">→</span>
            <div className="button-shine"></div>
          </button>
        </div>
      </Card.Body>

      <div className="card-glow"></div>
    </Card>
  );
};

export default ServiceCard;
