import { Container, Row, Col } from 'react-bootstrap';

const SocialMedia = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/fernandocesarbotelhojunior/",
      alt: "Instagram",
      icon: "/src/assets/images/instagram (1).png"
    },
    {
      href: "https://www.facebook.com/profile.php?id=61564994712206",
      alt: "Facebook",
      icon: "/src/assets/images/facebook (1).png"
    },
    {
      href: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre a construção de site e outros serviços.",
      alt: "WhatsApp",
      icon: "/src/assets/images/whatsapp (1).png"
    }
  ];

  return (
    <section className="py-4">
      <Container>
        <Row>
          <Col xs={12} className="d-flex justify-content-center align-items-center">
            <div className="d-flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn p-2 social-link"
                  style={{ transition: 'transform 0.2s ease' }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'scale(1)'}
                >
                  <img
                    alt={link.alt}
                    src={link.icon}
                    style={{
                      maxWidth: '56px',
                      height: '56px',
                      width: '100%'
                    }}
                    className="img-fluid"
                  />
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SocialMedia;