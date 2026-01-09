import "./AboutCompany.css";

const AboutCompany = () => {
  const values = [
    {
      icon: "🎯",
      title: "Expertise Técnica",
      description:
        "Equipe especializada em desenvolvimento web com anos de experiência em tecnologias modernas e boas práticas de engenharia de software.",
    },
    {
      icon: "🤝",
      title: "Parceria de Longo Prazo",
      description:
        "Construímos relacionamentos duradouros, acompanhando a evolução digital dos nossos clientes com suporte contínuo e dedicado.",
    },
    {
      icon: "⚡",
      title: "Agilidade e Qualidade",
      description:
        "Processos otimizados que garantem entregas rápidas sem comprometer a qualidade técnica e a excelência do código.",
    },
    {
      icon: "🔒",
      title: "Segurança e Confiabilidade",
      description:
        "Implementamos as melhores práticas de segurança e garantimos a integridade dos dados com infraestrutura robusta.",
    },
  ];

  return (
    <section id="sobre" className="about-company-section">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Sobre Nós</span>
          </div>

          <h2 className="about-title">
            Transformando Ideias em{" "}
            <span className="title-highlight">Soluções Digitais</span>
          </h2>

          <p className="about-description">
            Somos uma empresa especializada em desenvolvimento de soluções web,
            comprometida em criar produtos digitais que fazem a diferença para
            nossos clientes.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mission-card">
          <div className="mission-content">
            <h3 className="mission-title">Nossa Missão</h3>
            <p className="mission-text">
              Desenvolver soluções tecnológicas de alta qualidade que
              impulsionam o crescimento e a transformação digital de empresas,
              profissionais e instituições. Trabalhamos com dedicação para
              entregar produtos que realmente atendem às necessidades dos nossos
              clientes, sempre com foco em inovação, qualidade e resultados.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="values-grid">
          {values.map((value, index) => (
            <div
              key={index}
              className="value-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="value-icon">{value.icon}</div>
              <h4 className="value-title">{value.title}</h4>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="about-cta">
          <div className="cta-content">
            <h3 className="cta-title">Vamos Conversar?</h3>
            <p className="cta-description">
              Estamos prontos para entender suas necessidades e apresentar as
              melhores soluções para o seu projeto.
            </p>
          </div>
          <div className="cta-buttons">
            <a
              href="https://wa.me/5521968810478?text=Olá, gostaria de conversar sobre soluções digitais."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button primary"
            >
              <span>Falar no WhatsApp</span>
              <span className="button-icon">💬</span>
            </a>
            <a href="#contato" className="cta-button secondary">
              <span>Enviar Mensagem</span>
              <span className="button-icon">✉️</span>
            </a>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="about-bg-element about-bg-1"></div>
      <div className="about-bg-element about-bg-2"></div>
    </section>
  );
};

export default AboutCompany;
