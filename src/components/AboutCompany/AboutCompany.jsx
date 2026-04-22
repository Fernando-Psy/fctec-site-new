import './AboutCompany.css';

const AboutCompany = () => {
  return (
    <section id="sobre" className="about-company-section">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <div className="section-badge">
            <span className="badge-dot" />
            <span className="badge-text">Sobre Nós</span>
          </div>

          <h2 className="about-title">
            Engenharia Digital com{' '}
            <span className="title-highlight">Visao de Negocio</span>
          </h2>

          <p className="about-description">
            Somos uma equipe de desenvolvimento web voltada para construir
            presenca digital solida, segura e alinhada aos objetivos da empresa.
          </p>
        </div>

        {/* Simplified Mission - More Spacious US Style */}
        <div
          className="mission-card"
          style={{
            padding: '3rem',
            marginBottom: '3rem',
            textAlign: 'center',
          }}
        >
          <div className="mission-content">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
                fontSize: '2.5rem',
              }}
            >
              <span>🎯</span>
            </div>
            <h3
              className="mission-title"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                marginBottom: '1.5rem',
              }}
            >
              Nossa Missão
            </h3>
            <p
              className="mission-text"
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
                maxWidth: '800px',
                margin: '0 auto',
                color: '#cbd5e1',
              }}
            >
              Desenvolver soluções web de alta qualidade que impulsionam o
              crescimento sustentavel dos nossos clientes. Trabalhamos com{' '}
              <strong>foco em estrutura, confiabilidade e evolucao continua</strong>,
              entregando produtos que fortalecem a operacao digital da empresa.
            </p>
          </div>
        </div>

        {/* Key Differentiators - Compact Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              padding: '2rem 1rem',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
            <h4
              style={{
                fontSize: '1.125rem',
                fontWeight: '700',
                color: '#e2e8f0',
                marginBottom: '0.5rem',
              }}
            >
              Arquitetura Moderna
            </h4>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#cbd5e1',
                lineHeight: '1.6',
              }}
            >
              Solucoes com stack atual, escalabilidade e padroes tecnicos robustos
            </p>
          </div>

          <div
            style={{
              textAlign: 'center',
              padding: '2rem 1rem',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
            <h4
              style={{
                fontSize: '1.125rem',
                fontWeight: '700',
                color: '#e2e8f0',
                marginBottom: '0.5rem',
              }}
            >
              Parceria Proxima
            </h4>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#cbd5e1',
                lineHeight: '1.6',
              }}
            >
              Acompanhamento continuo para ajustes, duvidas e evolucao do produto
            </p>
          </div>

          <div
            style={{
              textAlign: 'center',
              padding: '2rem 1rem',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔒</div>
            <h4
              style={{
                fontSize: '1.125rem',
                fontWeight: '700',
                color: '#e2e8f0',
                marginBottom: '0.5rem',
              }}
            >
              Seguranca Aplicada
            </h4>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#cbd5e1',
                lineHeight: '1.6',
              }}
            >
              Dados protegidos com praticas de seguranca e manutencao preventiva
            </p>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="about-bg-element about-bg-1" />
      <div className="about-bg-element about-bg-2" />
    </section>
  );
};

export default AboutCompany;
