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
          'linear-gradient(135deg, #ffffff 0%, #fafbfc 50%, #f0f9ff 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
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
                background: 'rgba(14, 165, 233, 0.06)',
                border: '1px solid rgba(14, 165, 233, 0.15)',
                padding: '0.5rem 1.25rem',
                borderRadius: '50px',
                marginBottom: '1.5rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#0284c7',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  background: '#0ea5e9',
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
                color: '#1a2129',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              Soluções Digitais que{' '}
              <span
                style={{
                  color: '#1a2129',
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
                color: '#5a6978',
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
                background: 'white',
                border: '1px solid #f0f2f5',
                borderRadius: '16px',
                padding: '1.75rem',
                marginBottom: '2.5rem',
                boxShadow: '0 2px 8px rgba(26, 33, 41, 0.03)',
              }}
            >
              <div
                style={{
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: '#7a8a99',
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
                      background: '#fafbfc',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = '#f0f9ff';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = '#fafbfc';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <span style={{ fontSize: '1.75rem' }}>{tech.icon}</span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        color: '#3f4b57',
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
                    'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
                  border: 'none',
                  padding: '1.125rem 2rem',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  boxShadow: '0 4px 12px rgba(14, 165, 233, 0.2)',
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
                    '0 8px 20px rgba(14, 165, 233, 0.25)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow =
                    '0 4px 12px rgba(14, 165, 233, 0.2)';
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
                  background: 'white',
                  border: '1.5px solid #e8ecf1',
                  color: '#0284c7',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  boxShadow: '0 2px 6px rgba(26, 33, 41, 0.03)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  width: '100%',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = '#0ea5e9';
                  e.currentTarget.style.background = '#f0f9ff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = '#e8ecf1';
                  e.currentTarget.style.background = 'white';
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
                background: 'white',
                border: '1px solid #f0f2f5',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)',
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
                      color: '#4e83af',
                      lineHeight: '1',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: '#7a8a99',
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
                boxShadow: '0 20px 40px rgba(15, 23, 42, 0.12)',
                border: '1px solid #f0f2f5',
              }}
            >
              {/* Imagem otimizada com WebP e tamanhos responsivos */}
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
                  alt="Desenvolvimento de software"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  width="800"
                  height="600"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </picture>

              {/* Overlay de destaque */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
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
                      background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
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
                        color: '#1a2129',
                        marginBottom: '0.25rem',
                      }}
                    >
                      Código Limpo & Escalável
                    </div>
                    <div
                      style={{
                        fontSize: '0.75rem',
                        color: '#7a8a99',
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
