import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const techStack = [
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-plain.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
];

  const quickLinks = [
    { label: 'Sobre', href: '#about' },
    { label: 'Serviços', href: '#products' },
    { label: 'Contato', href: '#location' }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/fcbj.dev?igsh=MXNvczl0a2Uzcjkybw==',
      icon: 'bi-instagram'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1CC9521Qrs/',
      icon: 'bi-facebook'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5521968810478',
      icon: 'bi-whatsapp'
    }
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-wrapper">
      <Container>
        {/* Main Footer Content */}
        <div className="footer-main">
          <Row className="g-4">
            {/* Company Info */}
            <Col lg={4} md={6}>
              <div className="footer-section">
                <div className="footer-brand">
                  <h3 className="brand-name">FCBJ Desenvolvimento</h3>
                  <div className="brand-tagline">Soluções Digitais Premium</div>
                </div>
                <p className="footer-description">
                  Transformamos ideias em experiências digitais excepcionais,
                  combinando design moderno com tecnologia de ponta.
                </p>
                {/* Social Links */}
                <div className="footer-social">
                  <span className="social-label">Siga-nos:</span>
                  <div className="social-icons">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label={social.name}
                      >
                        <i className={`bi ${social.icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Col>

            {/* Quick Links */}
            <Col lg={2} md={6}>
              <div className="footer-section">
                <h4 className="footer-title">Links Rápidos</h4>
                <ul className="footer-links">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        onClick={(e) => handleScroll(e, link.href)}
                        className="footer-link"
                      >
                        <span className="link-icon">→</span>
                        <span className="link-text">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            {/* Contact Info */}
            <Col lg={3} md={6}>
              <div className="footer-section">
                <h4 className="footer-title">Contato</h4>
                <ul className="footer-contact">
                  <li className="contact-item">
                    <i className="bi bi-envelope contact-icon"></i>
                    <a href="mailto:fernando.cbj.tec@gmail.com" className="contact-link">
                      fernando.cbj.tec@gmail.com
                    </a>
                  </li>
                  <li className="contact-item">
                    <i className="bi bi-phone contact-icon"></i>
                    <a href="tel:+5521968810478" className="contact-link">
                      (21) 96881-0478
                    </a>
                  </li>
                  <li className="contact-item">
                    <i className="bi bi-geo-alt contact-icon"></i>
                    <span className="contact-text">Belford Roxo, RJ</span>
                  </li>
                </ul>
              </div>
            </Col>

            {/* CTA */}
            <Col lg={3} md={6}>
              <div className="footer-section">
                <h4 className="footer-title">Pronto para começar?</h4>
                <p className="cta-text">
                  Entre em contato e transforme sua presença digital hoje mesmo.
                </p>
                <a
                  href="https://wa.me/5521968810478"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-cta-button"
                >
                  <span className="cta-button-text">Falar no WhatsApp</span>
                  <i className="bi bi-arrow-right cta-button-icon"></i>
                </a>
              </div>
            </Col>
          </Row>
        </div>

        {/* Tech Stack */}
        <div className="footer-tech">
          <h5 className="tech-title">Tecnologias que Dominamos</h5>
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-item " title={tech.name}>
                <img
                  src={tech.icon}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="tech-icon"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p className="copyright-text">
              © {currentYear} <strong>FCBJ Desenvolvimento</strong> — CNPJ: 56.323.525/0001-12. Todos os direitos reservados.
            </p>
          </div>
          <div className="footer-legal">
            <a href="#privacy" className="legal-link">Política de Privacidade</a>
            <span className="legal-divider">•</span>
            <a href="#terms" className="legal-link">Termos de Uso</a>
          </div>
        </div>
      </Container>

      {/* Background Decoration */}
      <div className="footer-bg-pattern"></div>
    </footer>
  );
};

export default Footer;