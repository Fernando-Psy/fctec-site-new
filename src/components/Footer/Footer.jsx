import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const techStack = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    {name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg'},
    {name:'SASS', icon:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'},
    {name: "Gulp", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gulp/gulp-plain.svg"},
    {name: "Grunt", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grunt/grunt-original.svg"},
    {name: "ES6+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    {name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"},
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    {name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  ];

  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <h3 className="h5 mb-3">FCTEC</h3>
            <p className="text-white">
              Soluções digitais inovadoras para impulsionar seu negócio.
            </p>
          </Col>

          <Col lg={2} className="mb-4 mb-lg-0">
            <h4 className="h6 mb-3">Links</h4>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#about" className="text-white">Sobre</a></li>
              <li className="mb-2"><a href="#products" className="text-white">Serviços</a></li>
              <li className="mb-2"><a href="#location" className="text-white">Contato</a></li>
            </ul>
          </Col>

          <Col lg={3} className="mb-4 mb-lg-0">
            <h4 className="h6 mb-3">Contato</h4>
            <ul className="list-unstyled text-white">
              <li className="mb-2">fernando.cbj.tec@gmail.com</li>
              <li className="mb-2">(21) 96881-0478</li>
              <li>Belford Roxo, RJ</li>
            </ul>
          </Col>

          <Col lg={3}>
            <h4 className="h6 mb-3">Redes Sociais</h4>
            <div className="d-flex gap-3">
              <a href="https://www.instagram.com/fcbj.dev?igsh=MXNvczl0a2Uzcjkybw==" className="text-white" target='_blank'>
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="https://www.facebook.com/share/1CC9521Qrs/" className="text-white" target='_blank'>
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="https://wa.me/5521968810478" className="text-white" target='_blank'>
                <i className="bi bi-whatsapp fs-5"></i>
              </a>
            </div>
          </Col>
        </Row>

        <hr className="my-4 bg-secondary opacity-10" />

        <Row className="justify-content-center mb-4">
          <Col xs="auto" className="text-center">
            <h6 className="mb-3 text-uppercase text-white">Nossas Tecnologias</h6>
            <div className="d-flex justify-content-center gap-3 gap-md-4 flex-wrap">
              {techStack.map((tech) => (
                <img
                  key={tech.name}
                  src={tech.icon}
                  alt={tech.name}
                  title={tech.name}
                  width={32}
                  height={32}
                  className="filter-white"
                />
              ))}
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center text-md-start">
            <p className="small text-white mb-0">
              &copy; {currentYear} FCTEC. Todos os direitos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;