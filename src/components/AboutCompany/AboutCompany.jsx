import './AboutCompany.css';

const AboutCompany = () => {
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
            Transformamos Ideias em{' '}
            <span className="title-highlight">Resultados Digitais</span>
          </h2>

          <p className="about-description">
            Somos especialistas em desenvolvimento web que criam soluções
            digitais que realmente funcionam para o seu negócio.
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
                color: '#5a6978',
              }}
            >
              Desenvolver soluções web de alta qualidade que impulsionam o
              crescimento dos nossos clientes. Trabalhamos com{' '}
              <strong>foco em resultados</strong>, entregando produtos que fazem
              diferença real no seu negócio.
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
                color: '#1a2129',
                marginBottom: '0.5rem',
              }}
            >
              Entrega Rápida
            </h4>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#7a8a99',
                lineHeight: '1.6',
              }}
            >
              Projetos concluídos em prazos realistas sem comprometer qualidade
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
                color: '#1a2129',
                marginBottom: '0.5rem',
              }}
            >
              Suporte Dedicado
            </h4>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#7a8a99',
                lineHeight: '1.6',
              }}
            >
              Acompanhamento contínuo e suporte sempre que você precisar
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
                color: '#1a2129',
                marginBottom: '0.5rem',
              }}
            >
              100% Seguro
            </h4>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#7a8a99',
                lineHeight: '1.6',
              }}
            >
              Seus dados protegidos com as melhores práticas de segurança
            </p>
          </div>
        </div>

        {/* CTA Section - More Spacious */}
        <div
          className="about-cta"
          style={{
            padding: '3rem 2rem',
            marginTop: '4rem',
          }}
        >
          <div className="cta-content" style={{ textAlign: 'center' }}>
            <h3
              className="cta-title"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                marginBottom: '1rem',
              }}
            >
              Vamos Conversar?
            </h3>
            <p
              className="cta-description"
              style={{
                fontSize: '1.05rem',
                maxWidth: '600px',
                margin: '0 auto 2rem',
              }}
            >
              Conte-nos sobre seu projeto e vamos apresentar a melhor solução
            </p>
          </div>
          <div
            className="cta-buttons"
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
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
