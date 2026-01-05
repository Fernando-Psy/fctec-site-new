import { useState } from 'react';

const ClientsShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const clients = [
    { name: "Clínica Estética Bella", category: "Saúde & Beleza", logo: "🏥" },
    { name: "Restaurante Sabor da Terra", category: "Gastronomia", logo: "🍽️" },
    { name: "Studio Unhas Perfeitas", category: "Beleza", logo: "💅" },
    { name: "Consórcio Premium", category: "Financeiro", logo: "🏢" },
    { name: "Escola Criativa Kids", category: "Educação", logo: "📚" },
    { name: "Artesanato Maria", category: "Artesanato", logo: "🎨" },
    { name: "Academia Fitness Pro", category: "Esportes", logo: "💪" },
    { name: "Pet Shop Amigo Fiel", category: "Pet Care", logo: "🐾" }
  ];

  // Cores centralizadas para manter consistência visual
  const colorMap = {
    "Saúde & Beleza": { color: "#ec4899", bgColor: "#fce7f3" },
    "Gastronomia": { color: "#f59e0b", bgColor: "#fef3c7" },
    "Educação": { color: "#3b82f6", bgColor: "#dbeafe" },
    "Varejo & Lojas": { color: "#8b5cf6", bgColor: "#ede9fe" }
  };

  const serviceAreas = [
    {
      name: "Saúde & Beleza",
      icon: "💆‍♀️",
      description: "Sistemas de agendamento, sites responsivos e gestão digital para clínicas, consultórios e estúdios de estética."
    },
    {
      name: "Gastronomia",
      icon: "🍔",
      description: "Sites com cardápio interativo, integração com delivery e presença online otimizada para restaurantes e bares."
    },
    {
      name: "Educação",
      icon: "📖",
      description: "Plataformas para cursos online, inscrições, calendários e comunicação eficaz com alunos e responsáveis."
    },
    {
      name: "Varejo & Lojas",
      icon: "🛍️",
      description: "E-commerces modernos, catálogos digitais e sistemas de gestão para lojas físicas e virtuais."
    }
  ];

  return (
    <section style={{
      padding: '6rem 2rem',
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header – linguagem projetiva */}
        <div style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 4rem'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            padding: '0.5rem 1.25rem',
            borderRadius: '50px',
            marginBottom: '1.5rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: '#065f46'
          }}>
            <span>✨</span>
            <span>Parceria em Construção</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: '800',
            color: '#0f172a',
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            Seu Negócio{' '}
            <span style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Pronto para Crescer</span>
          </h2>

          <p style={{
            fontSize: '1.125rem',
            color: '#64748b',
            lineHeight: '1.7'
          }}>
            Criamos soluções digitais sob medida para diversos segmentos — porque acreditamos que todo negócio merece uma presença online poderosa.
          </p>
        </div>

        {/* Service Areas Grid – foco em capacidade, não em casos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {serviceAreas.map((area, idx) => {
            const { color, bgColor } = colorMap[area.name] || { color: "#64748b", bgColor: "#f1f5f9" };
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(`area-${idx}`)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '2rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  transform: hoveredIndex === `area-${idx}` ? 'translateY(-8px)' : 'translateY(0)',
                  boxShadow: hoveredIndex === `area-${idx}`
                    ? '0 12px 28px rgba(15, 23, 42, 0.12)'
                    : 'none',
                  borderColor: hoveredIndex === `area-${idx}` ? color : '#e2e8f0'
                }}
              >
                {/* Icon */}
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: bgColor,
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  marginBottom: '1.25rem',
                  transition: 'transform 0.3s ease',
                  transform: hoveredIndex === `area-${idx}` ? 'scale(1.1)' : 'scale(1)'
                }}>
                  {area.icon}
                </div>

                {/* Content */}
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#0f172a',
                  marginBottom: '0.5rem'
                }}>
                  {area.name}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}>
                  {area.description}
                </p>

                {/* CTA badge neutro */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: bgColor,
                  color: color,
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  fontWeight: '600'
                }}>
                  <span>🚀</span>
                  <span>Solução pronta para você</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clients Logo Grid – apresentado como "exemplos de segmentos atendíveis" */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '3rem 2rem',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 12px rgba(15, 23, 42, 0.06)'
        }}>
          <h3 style={{
            textAlign: 'center',
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#0f172a',
            marginBottom: '0.5rem'
          }}>
            Segmentos que Atendemos
          </h3>
          <p style={{
            textAlign: 'center',
            fontSize: '0.95rem',
            color: '#64748b',
            marginBottom: '2.5rem'
          }}>
            Trabalhamos com empresas de todos os portes — do microempreendedor à startup em crescimento.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {clients.map((client, idx) => {
              // Usamos a categoria para obter cor (fallback seguro)
              const categoryKey = Object.keys(colorMap).find(key =>
                client.category.includes(key.split(' & ')[0]) ||
                key.includes(client.category.split(' & ')[0])
              );
              const { color = "#64748b" } = colorMap[categoryKey] || {};

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIndex(`client-${idx}`)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1.5rem',
                    background: hoveredIndex === `client-${idx}` ? 'white' : '#f8fafc',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    transform: hoveredIndex === `client-${idx}` ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: hoveredIndex === `client-${idx}`
                      ? '0 4px 12px rgba(15, 23, 42, 0.1)'
                      : 'none'
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: hoveredIndex === `client-${idx}`
                      ? `linear-gradient(135deg, ${color}20 0%, ${color}40 100%)`
                      : 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    transition: 'all 0.3s ease',
                    transform: hoveredIndex === `client-${idx}` ? 'rotate(5deg)' : 'rotate(0deg)'
                  }}>
                    {client.logo}
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: '#0f172a',
                      marginBottom: '0.25rem'
                    }}>
                      {client.name}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#64748b',
                      fontWeight: '500'
                    }}>
                      {client.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Bar – reescrita para focar em compromisso, não em métricas falsas */}
        <div style={{
          marginTop: '3rem',
          background: 'linear-gradient(135deg, #2563eb 0%, #0d5996 100%)',
          borderRadius: '16px',
          padding: '2.5rem 2rem',
          boxShadow: '0 8px 24px rgba(37, 99, 235, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
            borderRadius: '50%'
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            {[
              { value: '100%', label: 'Compromisso com seu sucesso', icon: '🤝' },
              { value: 'Sob Medida', label: 'Soluções personalizadas', icon: '✂️' },
              { value: 'Ágil', label: 'Entrega rápida e eficiente', icon: '⚡' },
              { value: 'Suporte', label: 'Acompanhamento contínuo', icon: '🛠️' }
            ].map((stat, idx) => (
              <div
                key={idx}
                style={{ transition: 'transform 0.3s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: 'white',
                  marginBottom: '0.5rem',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA – mantido, pois é legítimo */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '1.125rem',
            color: '#475569',
            marginBottom: '1.5rem',
            fontWeight: '500'
          }}>
            Vamos construir juntos a primeira versão do seu negócio digital? 🚀
          </p>
          <button
            onClick={() => window.open('https://wa.me/5521968810478?text=Oi  , quero transformar meu negócio!', '_blank')}
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #0d5996 100%)',
              color: 'white',
              border: 'none',
              padding: '1rem 2.5rem',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
            }}
          >
            <span>💼</span>
            <span>Começar Minha Transformação Digital</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientsShowcase;