// ServiceCard.jsx
import { Card, Button } from 'react-bootstrap';

const ServiceCard = ({ service }) => {
  const {
    image,
    title,
    description,
    price,
    whatsappLink,
    buttonText = "Entre em Contato ➤"
  } = service;

  return (
    <Card className="h-100 service-card">
      {/* dentro do Card, usamos um bloco com neumo-card para aplicar o efeito */}
      <div className="neumo-card">
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          className="card-img-top"
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="promocao fs-5 fw-bold">{title}</Card.Title>
          <Card.Text className="flex-grow-1 mb-3">{description}</Card.Text>

          {price && <p className="promocao mb-3">{price}</p>}

          <Button
            className="botao-produto mt-auto border-0 neumo-btn"
            onClick={() => window.open(whatsappLink, '_blank', 'noopener,noreferrer')}
          >
            {buttonText}
          </Button>
        </Card.Body>
      </div>
    </Card>
  );
};

export default ServiceCard;
