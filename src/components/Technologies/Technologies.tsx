import { Container, Row, Col } from 'react-bootstrap';

const Technologies = () => {
  const technologies = [
    {
      phase: "Fundamentos Front-End",
      items: [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", description: "Estrutura semântica das páginas web" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", description: "Estilização e layout de elementos" }
      ]
    },
    {
      phase: "Interatividade",
      items: [
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", description: "Interatividade e manipulação de DOM" },
        { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg", description: "Biblioteca para efeitos e DOM" }
      ]
    },
    {
      phase: "Responsividade",
      items: [
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", description: "Framework para interfaces responsivas" }
      ]
    },
    {
      phase: "Automação e Pré-processadores",
      items: [
        { name: "SASS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg", description: "Pré-processador CSS avançado" },
        { name: "LESS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg", description: "Pré-processador CSS modular" },
        { name: "Gulp", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gulp/gulp-plain.svg", description: "Automação de tarefas front-end" },
        { name: "Grunt", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grunt/grunt-original.svg", description: "Task runner para projetos web" }
      ]
    },
    {
      phase: "JavaScript Avançado",
      items: [
        { name: "ES6+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", description: "Recursos modernos do JavaScript" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", description: "Superset com tipagem estática" }
      ]
    },
    {
      phase: "Frameworks Front-End",
      items: [
        { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", description: "Framework progressivo para UI" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "Biblioteca baseada em componentes" }
      ]
    },
    {
      phase: "Back-End e Banco de Dados",
      items: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", description: "Linguagem versátil para back-end" },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", description: "Framework web em Python" },
        { name: "Django REST", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", description: "Criação de APIs RESTful" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", description: "Manipulação de dados relacionais" }
      ]
    },
    {
      phase: "DevOps e Containerização",
      items: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", description: "Containerização e DevOps" }
      ]
    }
  ];

  return (
    <section id="technologies" className="py-6 bg-light" style={{ borderRadius: '0 0 12px 12px' }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3 pt-5">Tecnologias que Dominamos</h2>
          <p className="lead text-muted">
            Nossa stack tecnológica para entregar soluções de alta qualidade
          </p>
        </div>

        {technologies.map((techGroup, index) => (
          <div key={index} className="mb-5 pb-5">
            <h3 className="h4 mb-4 text-primary">{techGroup.phase}</h3>
            <Row className="g-4">
              {techGroup.items.map((tech, techIndex) => (
                <Col key={techIndex} lg={3} md={4} sm={6}>
                  <div className="h-100 p-4 bg-white rounded-3 shadow-sm d-flex flex-column align-items-center text-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      width="48"
                      height="48"
                      className="mb-3"
                    />
                    <h4 className="h5 mb-2">{tech.name}</h4>
                    <p className="text-muted small mb-0">{tech.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Technologies;