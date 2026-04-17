const BenefitsResults = () => {
  // Posicionamento institucional: foco em capacidade técnica e parceria
  const benefits = [
    {
      icon: '🧠',
      title: 'Estrutura Tecnica Confiavel',
      description:
        'Arquitetura planejada para estabilidade, seguranca e evolucao continua.',
      color: '#38bdf8',
      bgColor: '#e0f2fe',
      results: [
        'Padrao de codigo consistente',
        'Base preparada para crescimento',
        'Boas praticas de seguranca',
      ],
    },
    {
      icon: '⚙️',
      title: 'Processos Digitais Integrados',
      description:
        'Sistemas conectados para reduzir retrabalho e melhorar a rotina da equipe.',
      color: '#14b8a6',
      bgColor: '#ccfbf1',
      results: [
        'Fluxos mais organizados',
        'Informacao centralizada',
        'Operacao com menos atrito',
      ],
    },
    {
      icon: '🚀',
      title: 'Acompanhamento e Evolucao',
      description:
        'Atuacao proxima para manter a plataforma atualizada e alinhada aos objetivos.',
      color: '#818cf8',
      bgColor: '#e0e7ff',
      results: [
        'Roadmap tecnico claro',
        'Melhoria continua orientada por dados',
        'Suporte para novas demandas',
      ],
    },
  ];

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Benefits Section */}
      <div style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Header */}
          <div
            style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto 4rem',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                padding: '0.5rem 1.25rem',
                borderRadius: '50px',
                marginBottom: '1.5rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#1e3a8a',
              }}
            >
              <span>💻</span>
              <span>Capacidade Tecnologica e Operacional</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '800',
                color: '#1a2129',
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
              }}
            >
              Como Trabalhamos na{' '}
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #4e83af 0%, #06b6d4 50%, #7c3aed 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                FCBJ?
              </span>
            </h2>

            <p
              style={{
                fontSize: '1.125rem',
                color: '#7a8a99',
                lineHeight: '1.7',
              }}
            >
              Apresentamos solucoes digitais com foco em estrutura, confiabilidade
              e continuidade. Mantemos um canal direto de contato para entender
              cada contexto com profundidade.
            </p>
          </div>

          {/* Benefits Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                style={{
                  background: 'white',
                  border: '1px solid #f0f2f5',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow =
                    '0 20px 40px rgba(15, 23, 42, 0.12)';
                  e.currentTarget.style.borderColor = benefit.color;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#f0f2f5';
                }}
              >
                {/* Background decoration */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '150px',
                    height: '150px',
                    background: benefit.bgColor,
                    borderRadius: '50%',
                    opacity: 0.5,
                    transition: 'all 0.3s ease',
                  }}
                />

                {/* Icon */}
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    background: benefit.bgColor,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    marginBottom: '1.5rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3
                  style={{
                    fontSize: '1.375rem',
                    fontWeight: '700',
                    color: '#1a2129',
                    marginBottom: '1rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {benefit.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#7a8a99',
                    lineHeight: '1.7',
                    marginBottom: '1.5rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {benefit.description}
                </p>

                {/* Results List */}
                <div
                  style={{
                    background: benefit.bgColor,
                    borderRadius: '12px',
                    padding: '1.25rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      color: benefit.color,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Camadas de Valor:
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem',
                    }}
                  >
                    {benefit.results.map((result, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.875rem',
                          color: '#1a2129',
                          fontWeight: '500',
                        }}
                      >
                        <span style={{ color: benefit.color }}>✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsResults;
