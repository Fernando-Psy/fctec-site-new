import { useState } from 'react';

const ClientsShowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const clients = [
    { name: "Clínica Estética Bella", category: "Saúde & Beleza", logo: "🏥", color: "#ec4899" },
    { name: "Restaurante Sabor da Terra", category: "Gastronomia", logo: "🍽️", color: "#f59e0b" },
    { name: "Studio Unhas Perfeitas", category: "Beleza", logo: "💅", color: "#8b5cf6" },
    { name: "Consórcio Premium", category: "Financeiro", logo: "🏢", color: "#2563eb" },
    { name: "Escola Criativa Kids", category: "Educação", logo: "📚", color: "#10b981" },
    { name: "Artesanato Maria", category: "Artesanato", logo: "🎨", color: "#f43f5e" },
    { name: "Academia Fitness Pro", category: "Esportes", logo: "💪", color: "#06b6d4" },
    { name: "Pet Shop Amigo Fiel", category: "Pet Care", logo: "🐾", color: "#84cc16" }
  ];

  const industries = [
    {
      name: "Saúde & Estética",
      icon: "💆‍♀️",
      color: "#ec4899",
      bgColor: "#fce7f3",
      projects: "15+",
      description: "Clínicas, consultórios e estúdios de beleza com sistemas de agendamento"
    },
    {
      name: "Gastronomia",
      icon: "🍔",
      color: "#f59e0b",
      bgColor: "#fef3c7",
      projects: "12+",
      description: "Restaurantes, bares e food services com delivery integrado"
    },
    {
      name: "Educação",
      icon: "📖",
      color: "#3b82f6",
      bgColor: "#dbeafe",
      projects: "8+",
      description: "Escolas, cursos e treinamentos online"
    },
    {
      name: "Varejo & Lojas",
      icon: "🛍️",
      color: "#8b5cf6",
      bgColor: "#ede9fe",
      projects: "10+",
      description: "E-commerce e lojas físicas com gestão completa"
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
        {/* Header */}
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
            <span>Confiança de Quem Já Transformou</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: '800',
            color: '#0f172a',
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            Negócios que{' '}
            <span style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Cresceram</span>{' '}
            Conosco
          </h2>

          <p style={{
            fontSize: '1.125rem',
            color: '#64748b',
            lineHeight: '1.7'
          }}>
            Atendemos diversos segmentos com soluções personalizadas que geram resultados reais
          </p>
        </div>

        {/* Industries Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {industries.map((industry, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(`industry-${idx}`)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '2rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                transform: hoveredIndex === `industry-${idx}` ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: hoveredIndex === `industry-${idx}`
                  ? '0 12px 28px rgba(15, 23, 42, 0.12)'
                  : 'none',
                borderColor: hoveredIndex === `industry-${idx}` ? industry.color : '#e2e8f0'
              }}
            >
              {/* Icon */}
              <div style={{
                width: '60px',
                height: '60px',
                background: industry.bgColor,
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                marginBottom: '1.25rem',
                transition: 'transform 0.3s ease',
                transform: hoveredIndex === `industry-${idx}` ? 'scale(1.1)' : 'scale(1)'
              }}>
                {industry.icon}
              </div>

              {/* Content */}
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#0f172a',
                marginBottom: '0.5rem'
              }}>
                {industry.name}
              </h3>

              <p style={{
                fontSize: '0.9rem',
                color: '#64748b',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                {industry.description}
              </p>

              {/* Projects Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: industry.bgColor,
                color: industry.color,
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}>
                <span>🎯</span>
                <span>{industry.projects} Projetos</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clients Logo Grid */}
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
            Alguns de Nossos Clientes Satisfeitos
          </h3>
          <p style={{
            textAlign: 'center',
            fontSize: '0.95rem',
            color: '#64748b',
            marginBottom: '2.5rem'
          }}>
            Empresas que confiaram em nossa expertise e alcançaram resultados extraordinários
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {clients.map((client, idx) => (
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
                {/* Logo Placeholder */}
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: hoveredIndex === `client-${idx}`
                    ? `linear-gradient(135deg, ${client.color}20 0%, ${client.color}40 100%)`
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

                {/* Name */}
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
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div style={{
          marginTop: '3rem',
          background: 'linear-gradient(135deg, #2563eb 0%, #0d5996 100%)',
          borderRadius: '16px',
          padding: '2.5rem 2rem',
          boxShadow: '0 8px 24px rgba(37, 99, 235, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background decoration */}
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
              { value: '50+', label: 'Clientes Atendidos', icon: '👥' },
              { value: '15+', label: 'Segmentos', icon: '🎯' },
              { value: '98%', label: 'Satisfação', icon: '⭐' },
              { value: '4.9★', label: 'Avaliação Média', icon: '🏆' }
            ].map((stat, idx) => (
              <div
                key={idx}
                style={{
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '0.5rem'
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: '2.25rem',
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

        {/* CTA */}
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
            Seu negócio pode ser o próximo case de sucesso! 🚀
          </p>
          <button
            onClick={() => window.open('https://wa.me/5521968810478?text=Oi, quero transformar meu negócio!', '_blank')}
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