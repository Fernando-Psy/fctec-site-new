import { useState } from 'react';

const SubscriptionPlans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: "Presença Digital",
      icon: "🌟",
      price: { monthly: 297, yearly: 2970 },
      discount: "Economize 17%",
      description: "Ideal para quem está começando e quer presença online profissional",
      targetAudience: "Autônomos, MEIs, Profissionais Liberais",
      features: [
        "Site institucional completo",
        "Google Meu Negócio otimizado",
        "WhatsApp Business integrado",
        "1 email profissional",
        "Atualizações mensais de conteúdo",
        "Suporte por email (48h)",
        "Relatório mensal de visitantes"
      ],
      highlight: false,
      cta: "Começar Teste Grátis",
      badge: null
    },
    {
      name: "Crescimento Pro",
      icon: "🚀",
      price: { monthly: 597, yearly: 5970 },
      discount: "Economize 17%",
      description: "Para negócios que querem crescer e se destacar da concorrência",
      targetAudience: "Clínicas, Restaurantes, Lojas, Estéticas",
      features: [
        "Tudo do Presença Digital +",
        "Sistema de agendamento online",
        "Integração com redes sociais",
        "3 emails profissionais",
        "Blog com SEO otimizado",
        "Formulários personalizados",
        "Suporte prioritário (24h)",
        "Relatórios avançados semanais",
        "Backup diário automático"
      ],
      highlight: true,
      cta: "Teste 30 Dias Grátis",
      badge: "Mais Popular"
    },
    {
      name: "Enterprise",
      icon: "💎",
      price: { monthly: 1197, yearly: 11970 },
      discount: "Economize 17%",
      description: "Solução completa para empresas que buscam máximo desempenho",
      targetAudience: "Empresas, Redes, Franquias, Consórcios",
      features: [
        "Tudo do Crescimento Pro +",
        "Sistema ERP personalizado",
        "Dashboard administrativo completo",
        "Emails ilimitados",
        "API para integrações",
        "App mobile (iOS + Android)",
        "Suporte 24/7 via WhatsApp",
        "Gerente de conta dedicado",
        "Treinamento da equipe incluso",
        "Desenvolvimento sob demanda (4h/mês)"
      ],
      highlight: false,
      cta: "Agendar Demonstração",
      badge: "Premium"
    }
  ];

  const comparisonFeatures = [
    {
      category: "Presença Online",
      features: [
        { name: "Site Institucional", basic: true, pro: true, enterprise: true },
        { name: "Google Meu Negócio", basic: true, pro: true, enterprise: true },
        { name: "Blog/Notícias", basic: false, pro: true, enterprise: true },
        { name: "App Mobile", basic: false, pro: false, enterprise: true }
      ]
    },
    {
      category: "Funcionalidades",
      features: [
        { name: "Agendamento Online", basic: false, pro: true, enterprise: true },
        { name: "Sistema de Gestão (ERP)", basic: false, pro: false, enterprise: true },
        { name: "Integração Redes Sociais", basic: false, pro: true, enterprise: true },
        { name: "API Personalizada", basic: false, pro: false, enterprise: true }
      ]
    },
    {
      category: "Suporte",
      features: [
        { name: "Email (48h)", basic: true, pro: false, enterprise: false },
        { name: "Prioritário (24h)", basic: false, pro: true, enterprise: false },
        { name: "24/7 + Gerente Dedicado", basic: false, pro: false, enterprise: true }
      ]
    }
  ];

  const getPrice = (plan) => {
    const price = billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly / 12;
    return price.toFixed(0);
  };

  return (
    <section style={{
      padding: '6rem 2rem',
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto 3rem'
        }}>
          <div style={{
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
            color: '#92400e'
          }}>
            <span>⚡</span>
            <span>Primeiro Mês Grátis em Qualquer Plano</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: '800',
            color: '#0f172a',
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            Escolha Seu Plano de{' '}
            <span style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #0d5996 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Crescimento</span>
          </h2>

          <p style={{
            fontSize: '1.125rem',
            color: '#64748b',
            lineHeight: '1.7',
            marginBottom: '2rem'
          }}>
            Planos recorrentes com tudo incluído. Sem surpresas, sem taxas escondidas. Cancele quando quiser.
          </p>

          {/* Billing Toggle */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            background: 'white',
            padding: '0.5rem',
            borderRadius: '50px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.06)'
          }}>
            <button
              onClick={() => setBillingCycle('monthly')}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '50px',
                border: 'none',
                background: billingCycle === 'monthly'
                  ? 'linear-gradient(135deg, #2563eb 0%, #0d5996 100%)'
                  : 'transparent',
                color: billingCycle === 'monthly' ? 'white' : '#64748b',
                fontWeight: '600',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '50px',
                border: 'none',
                background: billingCycle === 'yearly'
                  ? 'linear-gradient(135deg, #2563eb 0%, #0d5996 100%)'
                  : 'transparent',
                color: billingCycle === 'yearly' ? 'white' : '#64748b',
                fontWeight: '600',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              Anual
              <span style={{
                background: '#10b981',
                color: 'white',
                padding: '0.125rem 0.5rem',
                borderRadius: '12px',
                fontSize: '0.75rem'
              }}>-17%</span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {plans.map((plan, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredPlan(idx)}
              onMouseLeave={() => setHoveredPlan(null)}
              style={{
                position: 'relative',
                background: 'white',
                border: plan.highlight ? '2px solid #2563eb' : '1px solid #e2e8f0',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: plan.highlight
                  ? '0 20px 40px rgba(37, 99, 235, 0.2)'
                  : hoveredPlan === idx
                    ? '0 12px 28px rgba(15, 23, 42, 0.12)'
                    : '0 4px 12px rgba(15, 23, 42, 0.06)',
                transform: plan.highlight
                  ? 'scale(1.05)'
                  : hoveredPlan === idx
                    ? 'scale(1.02)'
                    : 'scale(1)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  color: 'white',
                  padding: '0.375rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4)'
                }}>
                  {plan.badge}
                </div>
              )}

              {/* Icon */}
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                marginBottom: '1.5rem'
              }}>
                {plan.icon}
              </div>

              {/* Plan Name */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#0f172a',
                marginBottom: '0.5rem'
              }}>
                {plan.name}
              </h3>

              {/* Target Audience */}
              <p style={{
                fontSize: '0.85rem',
                color: '#2563eb',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                {plan.targetAudience}
              </p>

              {/* Description */}
              <p style={{
                fontSize: '0.9rem',
                color: '#64748b',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {plan.description}
              </p>

              {/* Price */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <span style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    color: '#0f172a'
                  }}>
                    R${getPrice(plan)}
                  </span>
                  <span style={{ color: '#64748b', fontSize: '0.95rem' }}>/mês</span>
                </div>
                {billingCycle === 'yearly' && (
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#10b981',
                    fontWeight: '600',
                    margin: '0.25rem 0 0 0'
                  }}>
                    {plan.discount} • R${plan.price.yearly} cobrado anualmente
                  </p>
                )}
              </div>

              {/* Features */}
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 2rem 0'
              }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '0.75rem',
                    fontSize: '0.9rem',
                    color: '#475569'
                  }}>
                    <span style={{
                      color: '#10b981',
                      fontSize: '1rem',
                      flexShrink: 0
                    }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => window.open('https://wa.me/5521968810478?text=Oi, gostaria de conhecer o plano ' + plan.name, '_blank')}
                style={{
                  width: '100%',
                  background: plan.highlight
                    ? 'linear-gradient(135deg, #2563eb 0%, #0d5996 100%)'
                    : 'white',
                  color: plan.highlight ? 'white' : '#2563eb',
                  border: plan.highlight ? 'none' : '2px solid #2563eb',
                  padding: '1rem',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: plan.highlight
                    ? '0 4px 12px rgba(37, 99, 235, 0.3)'
                    : 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = plan.highlight
                    ? '0 4px 12px rgba(37, 99, 235, 0.3)'
                    : 'none';
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div style={{
          background: 'white',
          borderRadius: '20px',
          padding: '3rem 2rem',
          boxShadow: '0 4px 12px rgba(15, 23, 42, 0.06)',
          border: '1px solid #e2e8f0'
        }}>
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#0f172a',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Compare Todos os Recursos
          </h3>

          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              minWidth: '600px'
            }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{
                    textAlign: 'left',
                    padding: '1rem',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#64748b'
                  }}>Recurso</th>
                  <th style={{
                    textAlign: 'center',
                    padding: '1rem',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#64748b'
                  }}>Presença Digital</th>
                  <th style={{
                    textAlign: 'center',
                    padding: '1rem',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#2563eb',
                    background: '#eff6ff'
                  }}>Crescimento Pro</th>
                  <th style={{
                    textAlign: 'center',
                    padding: '1rem',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#64748b'
                  }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category, catIdx) => (
                  <>
                    <tr key={`cat-${catIdx}`}>
                      <td colSpan={4} style={{
                        padding: '1.5rem 1rem 0.75rem',
                        fontSize: '1rem',
                        fontWeight: '700',
                        color: '#0f172a',
                        background: '#f8fafc'
                      }}>
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, featIdx) => (
                      <tr key={`feat-${catIdx}-${featIdx}`} style={{
                        borderBottom: '1px solid #f1f5f9'
                      }}>
                        <td style={{
                          padding: '1rem',
                          fontSize: '0.9rem',
                          color: '#475569'
                        }}>
                          {feature.name}
                        </td>
                        <td style={{
                          textAlign: 'center',
                          padding: '1rem'
                        }}>
                          {feature.basic ? (
                            <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
                          ) : (
                            <span style={{ color: '#cbd5e1', fontSize: '1.25rem' }}>—</span>
                          )}
                        </td>
                        <td style={{
                          textAlign: 'center',
                          padding: '1rem',
                          background: '#eff6ff'
                        }}>
                          {feature.pro ? (
                            <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
                          ) : (
                            <span style={{ color: '#cbd5e1', fontSize: '1.25rem' }}>—</span>
                          )}
                        </td>
                        <td style={{
                          textAlign: 'center',
                          padding: '1rem'
                        }}>
                          {feature.enterprise ? (
                            <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
                          ) : (
                            <span style={{ color: '#cbd5e1', fontSize: '1.25rem' }}>—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Footer */}
        <div style={{
          marginTop: '4rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #2563eb 0%, #0d5996 100%)',
          padding: '3rem 2rem',
          borderRadius: '20px',
          color: 'white'
        }}>
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            Ainda tem dúvidas sobre qual plano escolher?
          </h3>
          <p style={{
            fontSize: '1.05rem',
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            Fale com nosso time e receba uma consultoria gratuita para encontrar a solução perfeita
          </p>
          <button
            onClick={() => window.open('https://wa.me/5521968810478?text=Oi, gostaria de uma consultoria sobre os planos', '_blank')}
            style={{
              background: 'white',
              color: '#2563eb',
              border: 'none',
              padding: '1rem 2.5rem',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
          >
            Falar com Consultor Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;