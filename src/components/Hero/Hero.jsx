import { scrollToElement } from '../../utils/scrollUtils';

const HeroImproved = () => {
  const stats = [
    { icon: '⚡', value: '10+', label: 'Anos de Experiência' },
    { icon: '✓', value: '50+', label: 'Projetos Concluídos' },
    { icon: '🏆', value: '98%', label: 'Taxa de Sucesso' },
  ];

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'Python', icon: '🐍' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'AWS', icon: '☁️' },
  ];

  return (
    <section
      style={{
        padding: '6rem 2rem 5rem',
        background:
          'radial-gradient(circle at 15% 20%, rgba(6, 182, 212, 0.22) 0%, transparent 35%), radial-gradient(circle at 80% 15%, rgba(99, 102, 241, 0.18) 0%, transparent 40%), linear-gradient(145deg, #040b1a 0%, #07152c 55%, #0b1e3f 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.22,
          backgroundImage:
            'linear-gradient(rgba(34, 211, 238, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.18) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'linear-gradient(120deg, rgba(34, 211, 238, 0.08) 0%, transparent 22%, transparent 60%, rgba(99, 102, 241, 0.12) 100%)',
        }}
      />
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Coluna de Conteúdo */}
          <div>
            {/* Badge Institucional */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(6, 182, 212, 0.14)',
                border: '1px solid rgba(34, 211, 238, 0.35)',
                padding: '0.5rem 1.25rem',
                borderRadius: '50px',
                marginBottom: '1.5rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#67e8f9',
                boxShadow: '0 0 22px rgba(34, 211, 238, 0.2)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  background: '#22d3ee',
                  borderRadius: '50%',
                }}
              />
              <span>Desenvolvimento Web Profissional</span>
            </div>

            {/* Título Institucional */}
            <h1
              style={{
                fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
                fontWeight: '700',
                lineHeight: '1.15',
                color: '#e2e8f0',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              Soluções Digitais que{' '}
              <span
                style={{
                  background:
                    'linear-gradient(120deg, #22d3ee 0%, #60a5fa 50%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '700',
                }}
              >
                Impulsionam Negócios
              </span>
            </h1>

            {/* Subtítulo com Proposta de Valor */}
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75',
                color: '#cbd5e1',
                marginBottom: '2.5rem',
                fontWeight: '400',
              }}
            >
              Desenvolvemos sistemas web, sites institucionais e plataformas
              digitais com tecnologias modernas e foco em qualidade, segurança e
              performance.
            </p>

            {/* Tech Stack */}
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.72)',
                border: '1px solid rgba(34, 211, 238, 0.2)',
                borderRadius: '16px',
                padding: '1.75rem',
                marginBottom: '2.5rem',
                boxShadow: '0 16px 30px rgba(2, 6, 23, 0.35)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: '#67e8f9',
                  marginBottom: '1.25rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Tecnologias que Utilizamos
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '1rem',
                }}
              >
                {techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '1rem',
                      background: 'rgba(15, 23, 42, 0.75)',
                      border: '1px solid rgba(148, 163, 184, 0.2)',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(15, 23, 42, 0.95)';
                      e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.45)';
                      e.currentTarget.style.boxShadow =
                        '0 0 20px rgba(34, 211, 238, 0.18)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(15, 23, 42, 0.75)';
                      e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.2)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <span style={{ fontSize: '1.75rem' }}>{tech.icon}</span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        color: '#cbd5e1',
                      }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs Institucionais */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginBottom: '2.5rem',
              }}
            >
              {/* CTA Primário */}
              <button
                onClick={() =>
                  window.open(
                    'https://wa.me/5521968810478?text=Olá, gostaria de conversar sobre soluções digitais.',
                    '_blank'
                  )
                }
                style={{
                  background:
                    'linear-gradient(135deg, #06b6d4 0%, #3b82f6 55%, #6366f1 100%)',
                  border: 'none',
                  padding: '1.125rem 2rem',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  boxShadow: '0 8px 20px rgba(37, 99, 235, 0.35)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  color: 'white',
                  cursor: 'pointer',
                  width: '100%',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow =
                    '0 0 22px rgba(34, 211, 238, 0.38)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow =
                    '0 8px 20px rgba(37, 99, 235, 0.35)';
                }}
              >
                <span>💬</span>
                <span>Falar com Nossa Equipe</span>
              </button>

              {/* CTA Secundário */}
              <button
                onClick={() =>
                  scrollToElement('products', { behavior: 'smooth' })
                }
                style={{
                  background: 'rgba(15, 23, 42, 0.75)',
                  border: '1.5px solid rgba(34, 211, 238, 0.35)',
                  color: '#67e8f9',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  boxShadow: '0 8px 20px rgba(2, 6, 23, 0.28)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  width: '100%',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(96, 165, 250, 0.8)';
                  e.currentTarget.style.background = 'rgba(30, 41, 59, 0.9)';
                  e.currentTarget.style.boxShadow =
                    '0 0 18px rgba(96, 165, 250, 0.35)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.35)';
                  e.currentTarget.style.background = 'rgba(15, 23, 42, 0.75)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(2, 6, 23, 0.28)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Conhecer Nossos Serviços</span>
                <span>↓</span>
              </button>
            </div>

            {/* Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                padding: '1.5rem',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                borderRadius: '12px',
                boxShadow: '0 18px 34px rgba(2, 6, 23, 0.4)',
              }}
            >
              {stats.map((stat, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
                    {stat.icon}
                  </div>
                  <div
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: '800',
                      color: '#60a5fa',
                      lineHeight: '1',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: '#cbd5e1',
                      fontWeight: '600',
                      lineHeight: '1.3',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna de Imagem */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 24px 48px rgba(2, 6, 23, 0.45)',
                border: '1px solid rgba(34, 211, 238, 0.35)',
              }}
            >
              {/* Imagem otimizada com WebP, aspect-ratio fixo para evitar CLS */}
              <div className="hero-image-container">
                <picture>
                  <source
                    srcSet="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&fm=webp&q=80"
                    type="image/webp"
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop&fm=webp&q=80"
                    type="image/webp"
                    media="(max-width: 767px)"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=75"
                    alt="Desenvolvimento de software profissional"
                    loading="eager"
                    decoding="async"
                    fetchpriority="high"
                    width="800"
                    height="600"
                    sizes="(max-width: 767px) 600px, 800px"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </picture>
              </div>

              {/* Overlay de destaque */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(15, 23, 42, 0.88)',
                  backdropFilter: 'blur(10px)',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(2, 6, 23, 0.3)',
                  border: '1px solid rgba(34, 211, 238, 0.25)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                    }}
                  >
                    🚀
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        color: '#e2e8f0',
                        marginBottom: '0.25rem',
                      }}
                    >
                      Código Limpo & Escalável
                    </div>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        color: '#cbd5e1',
                        lineHeight: '1.4',
                      }}
                    >
                      Seguimos as melhores práticas da engenharia de software
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImproved;
