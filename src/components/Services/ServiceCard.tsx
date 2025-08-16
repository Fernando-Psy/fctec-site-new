import { Card, Button } from 'react-bootstrap';

interface Service {
  image: string;
  title: string;
  description: string;
  price?: string;
  whatsappLink: string;
  buttonText?: string;
  isExternal?: boolean;
}

const ServiceCard = ({ service }: { service: Service }) => {
  const {
    image,
    title,
    description,
    price,
    whatsappLink,
    buttonText = "Entre em Contato ➤"
  } = service;

  return (
    <Card className="h-100 sombreamento service-card">
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        className="card-img-top"
        style={{
          height: '200px',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="promocao fs-5 fw-bold">
          {title}
        </Card.Title>
        <Card.Text className="flex-grow-1 mb-3">
          {description}
        </Card.Text>

        {price && (
          <>
            <p className="promocao mb-3">{price}</p>
          </>
        )}

        <Button
          className="botao-produto mt-auto border-0"
          onClick={() => window.open(whatsappLink, '_blank', 'noopener,noreferrer')}
        >
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;