import { useState, useEffect, useRef } from 'react';
import './AboutCompany.css';

function useCountUp(target, duration = 1600, start = false) {
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

const AboutCompany = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const clients = useCountUp(50, 1800, visible);
  const yearsExp = useCountUp(10, 1500, visible);
  const satisfaction = useCountUp(98, 1400, visible);
  const cities = useCountUp(7, 1200, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const metrics = [
    { value: clients + '+', label: 'Projetos Entregues', icon: '✅' },
    { value: yearsExp + '+', label: 'Anos de Experiência', icon: '📅' },
    { value: satisfaction + '%', label: 'Clientes Satisfeitos', icon: '⭐' },
    { value: cities + '', label: 'Cidades Atendidas', icon: '📍' },
  ];

  return (
    <section id="sobre" className="about-company-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-header">
          <div className="section-badge">
            <span className="badge-dot" />
            <span className="badge-text">Sobre Nós</span>
          </div>

          <h2 className="about-title">
            Engenharia Digital com{' '}
            <span className="title-highlight">Visão de Negócio</span>
          </h2>

          <p className="about-description">
            Somos uma agência de desenvolvimento web especializada em criar presença digital sólida, segura e alinhada aos objetivos reais do seu negócio.
          </p>
        </div>

        {/* Metrics bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
            padding: '2rem',
            background: 'rgba(15, 23, 42, 0.7)',
            border: '1px solid rgba(34, 211, 238, 0.2)',
            borderRadius: '16px',
            backdropFilter: 'blur(8px)',
          }}
        >
          {metrics.map((m, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{m.icon}</div>
              <div
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #22d3ee, #60a5fa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '1',
                  marginBottom: '0.4rem',
                }}
              >
                {m.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: '600' }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div
          className="mission-card"
          style={{ padding: '3rem', marginBottom: '3rem', textAlign: 'center' }}
        >
          <div className="mission-content">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', fontSize: '2.5rem' }}>
              <span>🎯</span>
            </div>
            <h3 className="mission-title" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1.5rem' }}>
              Nossa Missão
            </h3>
            <p className="mission-text" style={{ fontSize: '1.125rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto', color: '#cbd5e1' }}>
              Desenvolver soluções web de alta qualidade que impulsionam o crescimento sustentável dos nossos clientes. Trabalhamos com{' '}
              <strong>foco em estrutura, confiabilidade e posicionamento no Google</strong>,
              entregando produtos digitais que fortalecem a operação e a visibilidade da sua empresa.
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {[
            { icon: '⚡', title: 'Arquitetura Moderna', desc: 'Stack atual (React, Python, Node.js), escalável e com padrões técnicos robustos para crescer com o seu negócio.' },
            { icon: '🤝', title: 'Parceria Próxima', desc: 'Acompanhamento contínuo: ajustes, dúvidas, evolução. Você nunca fica sem suporte após a entrega do projeto.' },
            { icon: '🔒', title: 'Segurança Aplicada', desc: 'SSL, backups automáticos, atualizações de segurança e boas práticas de proteção de dados (LGPD).' },
            { icon: '📈', title: 'Foco em Resultados', desc: 'Sites otimizados para SEO desde a entrega: carregamento rápido, estrutura limpa e presença real no Google.' },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                textAlign: 'center',
                padding: '2rem 1.5rem',
                background: 'rgba(15, 23, 42, 0.5)',
                border: '1px solid rgba(148, 163, 184, 0.15)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.border = '1px solid rgba(34, 211, 238, 0.35)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(2, 6, 23, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.border = '1px solid rgba(148, 163, 184, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '0.5rem' }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-bg-element about-bg-1" />
      <div className="about-bg-element about-bg-2" />
    </section>
  );
};

export default AboutCompany;
