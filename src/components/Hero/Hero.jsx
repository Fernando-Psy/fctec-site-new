import { useState, useEffect, useRef } from 'react';
import { scrollToElement } from '../../utils/scrollUtils';
import './Hero.css';

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const HeroImproved = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  const years = useCountUp(10, 1600, statsVisible);
  const projects = useCountUp(50, 2000, statsVisible);
  const success = useCountUp(98, 1400, statsVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'Python', icon: '🐍' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'AWS', icon: '☁️' },
  ];

  const stats = [
    { icon: '⚡', value: years + '+', label: 'Anos de Experiência' },
    { icon: '✓', value: projects + '+', label: 'Projetos Concluídos' },
    { icon: '🏆', value: success + '%', label: 'Taxa de Sucesso' },
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
          <div>
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
                  animation: 'pulse-dot 2s ease-in-out infinite',
                }}
              />
              <span>FCTEC Desenvolvimento Web</span>
            </div>

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
              Criação de Sites e Sistemas para{' '}
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
                Empresas de Todo o Brasil
              </span>
            </h1>

            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75',
                color: '#cbd5e1',
                marginBottom: '2.5rem',
                fontWeight: '400',
              }}
            >
              Desenvolvemos sites institucionais, sistemas web personalizados e configuramos o Google Meu Negócio para empresas em Belford Roxo, Nova Iguaçu, Duque de Caxias e todo o Rio de Janeiro. Entregamos com foco em performance, segurança e posicionamento no Google.
            </p>

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
              <div className="hero-tech-grid">
                {techStack.map((tech, idx) => (
                  <div key={idx} className="hero-tech-item">
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginBottom: '2.5rem',
              }}
            >
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
                  e.currentTarget.style.boxShadow = '0 0 28px rgba(34, 211, 238, 0.45)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.35)';
                }}
              >
                <span>💬</span>
                <span>Solicitar Orçamento Gratuito</span>
              </button>

              <button
                onClick={() => scrollToElement('products', { behavior: 'smooth' })}
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
                  e.currentTarget.style.boxShadow = '0 0 18px rgba(96, 165, 250, 0.35)';
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

            <div
              ref={statsRef}
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
                    alt="Desenvolvedor web profissional criando site para empresa em Belford Roxo RJ"
                    loading="eager"
                    decoding="async"
                    fetchpriority="high"
                    width="800"
                    height="600"
                    sizes="(max-width: 767px) 600px, 800px"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </picture>
              </div>

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
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
                      flexShrink: 0,
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
                      Sites que Aparecem no Google
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: '1.4' }}>
                      SEO técnico e conteúdo otimizado desde a entrega
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating trust badge */}
            <div
              style={{
                position: 'absolute',
                top: '-1rem',
                right: '-1rem',
                background: 'linear-gradient(135deg, #06b6d4, #6366f1)',
                borderRadius: '12px',
                padding: '0.875rem 1.25rem',
                boxShadow: '0 8px 24px rgba(6, 182, 212, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '110px',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>⭐</span>
              <span style={{ fontSize: '1.125rem', fontWeight: '800', color: 'white', lineHeight: '1' }}>5.0</span>
              <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.85)', fontWeight: '600' }}>no Google</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }
      `}</style>
    </section>
  );
};

export default HeroImproved;
