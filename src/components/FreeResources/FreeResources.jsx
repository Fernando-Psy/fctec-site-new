import "./FreeResources.css";

const resources = [
  {
    title: "LinkedIn Profissional",
    description:
      'Checklist de perfil, headline com palavras-chave, exemplos de "Sobre" e dicas de networking para atrair clientes.',
    items: [
      "Modelo de headline focada em solução",
      "Estrutura pronta para sessão Sobre",
      "Sequência de conexões e mensagens",
    ],
    cta: {
      label: "Agendar para receber",
      link: "https://wa.me/5521968810478?text=Quero agendar um encontro presencial para receber o checklist gratuito de LinkedIn profissional, com suporte do especialista.",
    },
  },
  {
    title: "Currículo em HTML/CSS",
    description:
      "Template responsivo para você personalizar, publicar no GitHub Pages e baixar em PDF para entrevistas.",
    items: [
      "Layout pronto em HTML/CSS",
      "Guia de publicação no GitHub Pages",
      "Dicas de conteúdo para cada seção",
    ],
    cta: {
      label: "Agendar para criar",
      link: "https://wa.me/5521968810478?text=Quero agendar um encontro presencial para criar meu currículo em HTML/CSS com apoio do especialista.",
    },
  },
];

const FreeResources = () => {
  return (
    <section id="free-resources" className="free-resources-section">
      <div className="free-resources-container">
        <div className="free-resources-header">
          <div className="badge">
            <span className="badge-dot" />
            <span className="badge-text">Recursos Gratuitos</span>
          </div>
          <h2 className="free-resources-title">
            Comece Sua Jornada Digital{" "}
            <span className="title-highlight">Grátis</span>
          </h2>
          <p className="free-resources-description">
            Construção prática entregue em encontro presencial agendado com nosso
            especialista. Você agenda, comparece e configuramos tudo juntos, sem
            custo.
          </p>
        </div>

        <div className="resource-grid">
          {resources.map((resource) => (
            <article key={resource.title} className="resource-card">
              <div className="resource-card-header">
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
              </div>
              <ul className="resource-list">
                {resource.items.map((item) => (
                  <li key={item} className="resource-item">
                    <span className="item-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="resource-actions">
                <a
                  href={resource.cta.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-button"
                >
                  {resource.cta.label}
                  <span className="button-arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="free-session">
          <div>
            <p className="free-session-kicker">
              Sessão presencial 100% gratuita
            </p>
            <h3 className="free-session-title">Capacitação Digital Gratuita</h3>
            <p className="free-session-text">
              Configuramos seu LinkedIn profissional e montamos um currículo em
              HTML/CSS ao vivo, em encontro presencial com nosso especialista.
              Você sai com tudo pronto para compartilhar.
            </p>
          </div>
          <a
            href="https://wa.me/5521968810478?text=Quero agendar um encontro presencial para a Configuração Digital Gratuita."
            target="_blank"
            rel="noopener noreferrer"
            className="free-session-button"
          >
            Agendar agora
            <span className="button-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
