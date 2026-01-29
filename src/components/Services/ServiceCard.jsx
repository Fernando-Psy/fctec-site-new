import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const { id, image, title, description, features = [], icon } = service;

  const handleClick = () => {
    navigate(`/servicos/${id}`);
  };

  return (
    <Card className="service-card-wrapper">
      {/* Imagem do Serviço - Otimizada */}
      <div className="service-image-container">
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          className="service-image"
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />
        <div className="image-overlay">
          <span className="service-icon">{icon}</span>
        </div>
      </div>

      {/* Conteúdo do Card */}
      <Card.Body className="service-body">
        {/* Título */}
        <Card.Title className="service-title">{title}</Card.Title>

        {/* Descrição */}
        <Card.Text className="service-description">{description}</Card.Text>

        {/* Features List (limitado a 4) */}
        {features.length > 0 && (
          <ul className="service-features">
            {features.slice(0, 4).map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">{feature}</span>
              </li>
            ))}
            {features.length > 4 && (
              <li
                className="feature-item"
                style={{ fontStyle: "italic", color: "#4e83af" }}
              >
                <span className="feature-check">+</span>
                <span className="feature-text">
                  E mais {features.length - 4} recursos...
                </span>
              </li>
            )}
          </ul>
        )}

        {/* Footer do Card */}
        <div className="service-footer">
          {/* Botão de Ação */}
          <button className="service-button" onClick={handleClick}>
            <span className="button-text">Saber Mais</span>
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
