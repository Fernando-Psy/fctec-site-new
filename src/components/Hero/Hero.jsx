const HeroImproved = () => {
  const urgencyReasons = [
    { icon: '📈', text: 'Seus concorrentes já estão online' },
    { icon: '💰', text: 'Cada dia offline = clientes perdidos' },
    { icon: '🎯', text: '73% dos clientes pesquisam online antes de comprar' }
  ];

  const trustSignals = [
    { icon: '⚡', value: '2-3 semanas', label: 'Entrega Rápida' },
    { icon: '✓', value: '98%', label: 'Clientes Satisfeitos' },
    { icon: '🏆', value: '50+', label: 'Projetos Entregues' }
  ];

  return (
    <section style={{
      padding: '4rem 2rem 3rem',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Coluna de Conteúdo */}
          <div>
            {/* Badge de Urgência/Prova Social */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              padding: '0.5rem 1rem',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: '#92400e'
            }}>
              <span>🔥</span>
              <span>+15 empresas nos procuraram esta semana</span>
            </div>

            {/* Título com Benefício Claro */}
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: '800',
              lineHeight: '1.15',
              color: '#0f172a',
              marginBottom: '1.25rem',
              letterSpacing: '-0.03em'
            }}>
              Transforme Visitantes em{' '}
              <span style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #0d5996 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                position: 'relative'
              }}>
                Clientes Pagantes
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, #2563eb, #0d5996)',
                  borderRadius: '2px',
                  opacity: 0.3
                }} />
              </span>
            </h1>

            {/* Subtítulo com Resultado Específico */}
            <p style={{
              fontSize: '1.25rem',
              lineHeight: '1.6',
              color: '#475569',
              marginBottom: '2rem',
              fontWeight: '500'
            }}>
              Sites e sistemas que <strong>geram resultados reais</strong> para clínicas,
              restaurantes e empresas em Belford Roxo e região.
            </p>

            {/* Por que agir agora */}
            <div style={{
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1.25rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                fontSize: '0.875rem',
                fontWeight: '700',
                color: '#0f172a',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                ⏰ Por que agir agora?
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {urgencyReasons.map((reason, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <span style={{ fontSize: '1.25rem' }}>{reason.icon}</span>
                    <span style={{
                      fontSize: '0.95rem',
                      color: '#334155',
                      fontWeight: '500'
                    }}>
                      {reason.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs com Hierarquia Clara */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {/* CTA Primário */}
              <button
                onClick={() => window.open('https://wa.me/5521968810478?text=Oi! Quero um orçamento gratuito para meu negócio', '_blank')}
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #0d5996 100%)',
                  border: 'none',
                  padding: '1.125rem 2rem',
                  borderRadius: '12px',
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  boxShadow: '0 8px 20px rgba(37, 99, 235, 0.35)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  color: 'white',
                  cursor: 'pointer',
                  width: '100%'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(37, 99, 235, 0.45)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.35)';
                }}
              >
                <span>💬</span>
                <span>Quero Meu Orçamento Grátis Agora</span>
              </button>

              <p style={{
                fontSize: '0.875rem',
                color: '#64748b',
                textAlign: 'center',
                margin: 0
              }}>
                ✓ Resposta em até 2 horas • ✓ Sem compromisso • ✓ Consultoria incluída
              </p>

              {/* CTA Secundário */}
              <button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: 'white',
                  border: '2px solid #e2e8f0',
                  color: '#2563eb',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.08)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  width: '100%'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = '#2563eb';
                  e.currentTarget.style.background = '#eff6ff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Ver Preços e Serviços</span>
                <span>↓</span>
              </button>
            </div>

            {/* Trust Signals */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              padding: '1.5rem',
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.06)'
            }}>
              {trustSignals.map((signal, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>
                    {signal.icon}
                  </div>
                  <div style={{
                    fontSize: '1.375rem',
                    fontWeight: '800',
                    color: '#2563eb',
                    lineHeight: '1',
                    marginBottom: '0.25rem'
                  }}>
                    {signal.value}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#64748b',
                    fontWeight: '600'
                  }}>
                    {signal.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna de Imagem com Prova Social */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)',
              border: '1px solid #e2e8f0'
            }}>
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                alt="Dashboard de resultados"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />

              {/* Floating Cards com Resultados Reais */}
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1rem',
                right: '1rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem'
              }}>
                {[
                  { icon: '📈', label: '+150% Visitantes', color: '#10b981' },
                  { icon: '💰', label: '+45% Vendas', color: '#f59e0b' }
                ].map((result, idx) => (
                  <div key={idx} style={{
                    background: 'white',
                    padding: '0.875rem',
                    borderRadius: '10px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>{result.icon}</span>
                    <div>
                      <div style={{
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        color: result.color
                      }}>
                        {result.label}
                      </div>
                      <div style={{
                        fontSize: '0.7rem',
                        color: '#64748b'
                      }}>
                        Resultado médio
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Depoimento Rápido
            <div style={{
              marginTop: '1.5rem',
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1.25rem',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.06)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '0.75rem'
              }}>
                <img
                  src="https://ui-avatars.com/api/?name=Maria+Silva&background=10b981&color=fff&size=48"
                  alt="Cliente"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: '2px solid #10b981'
                  }}
                />
                <div>
                  <div style={{
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    color: '#0f172a'
                  }}>
                    Maria Silva
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#64748b'
                  }}>
                    Clínica Estética Bella
                  </div>
                </div>
                <div style={{
                  marginLeft: 'auto',
                  color: '#f59e0b',
                  fontSize: '1rem'
                }}>
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              <p style={{
                fontSize: '0.9rem',
                color: '#334155',
                fontStyle: 'italic',
                margin: 0,
                lineHeight: '1.5'
              }}>
                "Em 2 meses aumentei 250% os agendamentos. O melhor investimento que fiz!"
              </p>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImproved;