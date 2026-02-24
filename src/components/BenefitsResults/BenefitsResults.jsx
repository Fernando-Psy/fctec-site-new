import { useIsMobile } from '../../hooks/useWindowSize';

const BenefitsResults = () => {
  const isMobile = useIsMobile();

  // Simplified to 3 core benefits - US style: focus on key value props
  const benefits = [
    {
      icon: '📈',
      title: 'Mais Clientes, Mais Resultados',
      description:
        'Soluções que convertem visitantes em clientes reais, com ROI comprovado.',
      color: '#0ea5e9',
      bgColor: '#dbeafe',
      results: [
        '150% mais consultas em média',
        'ROI positivo em 3 meses',
        'Presença forte no Google',
      ],
    },
    {
      icon: '⚡',
      title: 'Automatize e Economize Tempo',
      description:
        'Sistemas que trabalham por você 24/7, automatizando processos repetitivos.',
      color: '#10b981',
      bgColor: '#d1fae5',
      results: [
        '70% menos tempo operacional',
        'Zero ligações para agendar',
        'Gestão centralizada',
      ],
    },
    {
      icon: '💰',
      title: 'Investimento Inteligente',
      description:
        'Cada real retorna em crescimento real. Payback rápido e escalável.',
      color: '#6366f1',
      bgColor: '#e0e7ff',
      results: [
        'Payback em 2-4 meses',
        '+45% no ticket médio',
        '3x mais recorrência',
      ],
    },
  ];

  const transformationSteps = [
    {
      step: '1',
      title: 'Conversamos',
      description:
        'Entendemos seu negócio, objetivos e desafios em uma consultoria gratuita',
      icon: '💬',
    },
    {
      step: '2',
      title: 'Planejamos',
      description:
        'Criamos uma estratégia personalizada com prazos e investimento transparentes',
      icon: '📋',
    },
    {
      step: '3',
      title: 'Desenvolvemos',
      description:
        'Construímos sua solução com tecnologia de ponta e design profissional',
      icon: '🚀',
    },
    {
      step: '4',
      title: 'Lançamos',
      description:
        'Colocamos tudo no ar, treinamos sua equipe e começamos a gerar resultados',
      icon: '🎉',
    },
    {
      step: '5',
      title: 'Acompanhamos',
      description:
        'Monitoramos performance, otimizamos e damos suporte contínuo',
      icon: '📊',
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
                background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                padding: '0.5rem 1.25rem',
                borderRadius: '50px',
                marginBottom: '1.5rem',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#92400e',
              }}
            >
              <span>🎯</span>
              <span>Focado em Resultados Reais</span>
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
              Por Que Escolher a{' '}
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
              Não vendemos apenas tecnologia. Entregamos transformação digital
              que gera RESULTADOS mensuráveis para seu negócio.
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
                    📊 Resultados Reais:
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

      {/* Transformation Process */}
      <div
        style={{
          padding: '6rem 2rem',
          background: 'linear-gradient(135deg, #1a2129 0%, #1e293b 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Header */}
          <div
            style={{
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto 4rem',
              color: 'white',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: '800',
                marginBottom: '1rem',
                letterSpacing: '-0.02em',
                color: '#cbd5e1',
              }}
            >
              Como Funciona a{' '}
              <span
                style={{
                  background:
                    'linear-gradient(135deg, #85b5d5 0%, #6a9dc4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Transformação
              </span>
            </h2>
            <p
              style={{
                fontSize: '1.125rem',
                color: '#cbd5e1',
                lineHeight: '1.7',
              }}
            >
              Um processo simples, transparente e focado nos seus resultados
            </p>
          </div>

          {/* Steps */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              position: 'relative',
            }}
          >
            {transformationSteps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  textAlign: 'center',
                }}
              >
                {/* Connector Line */}
                {idx < transformationSteps.length - 1 && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '40px',
                      left: '50%',
                      width: '100%',
                      height: '2px',
                      background:
                        'linear-gradient(90deg, rgba(96, 165, 250, 0.3) 0%, rgba(96, 165, 250, 0.1) 100%)',
                      zIndex: 0,
                      display: !isMobile ? 'block' : 'none',
                    }}
                  />
                )}

                {/* Step Circle */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    background:
                      'linear-gradient(135deg, #4e83af 0%, #3a5f7d 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: '0 8px 24px rgba(37, 99, 235, 0.4)',
                    border: '4px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '2rem',
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Step Number Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '-8px',
                      width: '32px',
                      height: '32px',
                      background: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.875rem',
                      fontWeight: '800',
                      color: '#4e83af',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <h4
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: 'white',
                    marginBottom: '0.5rem',
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#cbd5e1',
                    lineHeight: '1.6',
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: '4rem',
              textAlign: 'center',
            }}
          >
            <button
              onClick={() =>
                window.open(
                  'https://wa.me/5521968810478?text=Oi, quero iniciar minha transformação digital!',
                  '_blank'
                )
              }
              style={{
                background: 'white',
                color: '#4e83af',
                border: 'none',
                padding: '1.25rem 2.5rem',
                borderRadius: '12px',
                fontSize: '1.05rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 24px rgba(255, 255, 255, 0.2)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform =
                  'translateY(-4px) scale(1.05)';
                e.currentTarget.style.boxShadow =
                  '0 12px 32px rgba(255, 255, 255, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow =
                  '0 8px 24px rgba(255, 255, 255, 0.2)';
              }}
            >
              <span>🚀</span>
              <span>Começar Minha Transformação Agora</span>
            </button>

            <p
              style={{
                fontSize: '0.875rem',
                color: '#94a3b8',
                marginTop: '1rem',
              }}
            >
              ✓ Sem compromisso • ✓ Consultoria gratuita • ✓ Resposta em 2h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsResults;
