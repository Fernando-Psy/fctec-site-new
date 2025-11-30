import { useState, useRef, useEffect } from 'react';

const QuickQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const timeoutRefs = useRef([]);

  useEffect(() => {
    return () => {
      // Limpar todos os timeouts ao desmontar
      timeoutRefs.current.forEach((t) => clearTimeout(t));
      timeoutRefs.current = [];
    };
  }, []);

  const services = [
    { value: 'google', label: '📍 Google Meu Negócio', icon: '🎯' },
    { value: 'site', label: '🌐 Site Institucional', icon: '💻' },
    { value: 'sistema', label: '⚙️ Sistema Personalizado', icon: '🚀' },
    { value: 'assinatura', label: '📦 Plano de Assinatura', icon: '💎' },
    { value: 'manutencao', label: '🔧 Manutenção', icon: '⚙️' },
    { value: 'outro', label: '💡 Outro Serviço', icon: '✨' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `🎯 *Novo Pedido de Orçamento*\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📱 *Telefone:* ${formData.phone}\n` +
      `🏢 *Negócio:* ${formData.business}\n` +
      `💼 *Serviço:* ${services.find(s => s.value === formData.service)?.label || formData.service}`;

    const whatsappURL = `https://wa.me/5521968810478?text=${encodeURIComponent(message)}`;

    const openTimeout = setTimeout(() => {
      const newWin = window.open(whatsappURL, '_blank');
      // tornar mais seguro: remover referência ao opener quando possível
      try {
        if (newWin) newWin.opener = null;
      } catch (err) {
        // ignora se não for possível
      }

      setIsSubmitting(false);
      setShowSuccess(true);

      const resetTimeout = setTimeout(() => {
        setFormData({ name: '', phone: '', business: '', service: '' });
        setShowSuccess(false);
      }, 3000);

      timeoutRefs.current.push(resetTimeout);
    }, 500);

    timeoutRefs.current.push(openTimeout);
  };

  return (
    <section style={{
      padding: '6rem 2rem',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)'
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Left Column - Info */}
          <div style={{ color: 'white' }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(34, 197, 94, 0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              padding: '0.5rem 1.25rem',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              fontSize: '0.875rem',
              fontWeight: '600'
            }}>
              <span>⚡</span>
              <span>Resposta em até 2 horas</span>
            </div>

            {/* Title */}
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}>
              Receba Seu Orçamento{' '}
              <span style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Grátis</span>
            </h2>

            <p style={{
              fontSize: '1.125rem',
              color: '#cbd5e1',
              lineHeight: '1.7',
              marginBottom: '2rem'
            }}>
              Preencha o formulário ao lado e receba uma proposta personalizada em minutos. Sem compromisso!
            </p>

            {/* Benefits List */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {[
                { icon: '✓', text: 'Consultoria gratuita incluída' },
                { icon: '✓', text: 'Orçamento detalhado e transparente' },
                { icon: '✓', text: 'Sugestões personalizadas para seu negócio' },
                { icon: '✓', text: 'Sem compromisso ou taxas escondidas' }
              ].map((benefit, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    background: 'rgba(34, 197, 94, 0.2)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#22c55e',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    flexShrink: 0
                  }}>
                    {benefit.icon}
                  </div>
                  <span style={{
                    fontSize: '0.95rem',
                    color: '#e2e8f0'
                  }}>
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div style={{
              marginTop: '2rem',
              padding: '1.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                textAlign: 'center'
              }}>
                {[
                  { value: '50+', label: 'Clientes' },
                  { value: '2h', label: 'Resposta' },
                  { value: '98%', label: 'Satisfação' }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div style={{
                      fontSize: '1.75rem',
                      fontWeight: '800',
                      color: '#60a5fa',
                      marginBottom: '0.25rem'
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#cbd5e1',
                      fontWeight: '500'
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '2.5rem',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(226, 232, 240, 0.5)'
          }}>
            {!showSuccess ? (
              <form onSubmit={handleSubmit}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#0f172a',
                  marginBottom: '1.5rem'
                }}>
                  Solicite Seu Orçamento
                </h3>

                {/* Name Input */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="qq-name" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#475569',
                    marginBottom: '0.5rem'
                  }}>
                    Seu Nome *
                  </label>
                  <input
                    id="qq-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="João Silva"
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '10px',
                      fontSize: '0.95rem',
                      color: '#0f172a',
                      transition: 'all 0.2s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#2563eb';
                      e.target.style.boxShadow = '0 0 0 4px rgba(37, 99, 235, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Phone Input */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="qq-phone" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#475569',
                    marginBottom: '0.5rem'
                  }}>
                    WhatsApp *
                  </label>
                  <input
                    id="qq-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(21) 98888-8888"
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '10px',
                      fontSize: '0.95rem',
                      color: '#0f172a',
                      transition: 'all 0.2s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#2563eb';
                      e.target.style.boxShadow = '0 0 0 4px rgba(37, 99, 235, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Business Input */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label htmlFor="qq-business" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#475569',
                    marginBottom: '0.5rem'
                  }}>
                    Tipo de Negócio *
                  </label>
                  <input
                    id="qq-business"
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Clínica de Estética, Restaurante..."
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '10px',
                      fontSize: '0.95rem',
                      color: '#0f172a',
                      transition: 'all 0.2s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#2563eb';
                      e.target.style.boxShadow = '0 0 0 4px rgba(37, 99, 235, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Service Select */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="qq-service" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#475569',
                    marginBottom: '0.5rem'
                  }}>
                    Serviço de Interesse *
                  </label>
                  <select
                    id="qq-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '10px',
                      fontSize: '0.95rem',
                      color: '#0f172a',
                      transition: 'all 0.2s ease',
                      outline: 'none',
                      cursor: 'pointer',
                      backgroundColor: 'white'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#2563eb';
                      e.target.style.boxShadow = '0 0 0 4px rgba(37, 99, 235, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e2e8f0';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">Selecione um serviço...</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: isSubmitting
                      ? '#cbd5e1'
                      : 'linear-gradient(135deg, #2563eb 0%, #0d5996 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isSubmitting
                      ? 'none'
                      : '0 4px 12px rgba(37, 99, 235, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem'
                  }}
                  onMouseOver={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.4)';
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = isSubmitting
                      ? 'none'
                      : '0 4px 12px rgba(37, 99, 235, 0.3)';
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span style={{
                        display: 'inline-block',
                        width: '20px',
                        height: '20px',
                        border: '3px solid rgba(255, 255, 255, 0.3)',
                        borderTop: '3px solid white',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }} />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>📲</span>
                      <span>Receber Orçamento no WhatsApp</span>
                    </>
                  )}
                </button>

                {/* Privacy Note */}
                <p style={{
                  fontSize: '0.75rem',
                  color: '#94a3b8',
                  textAlign: 'center',
                  marginTop: '1rem',
                  lineHeight: '1.5'
                }}>
                  🔒 Seus dados estão seguros. Não compartilhamos com terceiros.
                </p>
              </form>
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '2rem 0'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '3rem'
                }}>
                  ✓
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#0f172a',
                  marginBottom: '0.75rem'
                }}>
                  Solicitação Enviada!
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#64748b',
                  lineHeight: '1.6'
                }}>
                  Abrimos o WhatsApp para você. Já estamos preparando seu orçamento personalizado!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default QuickQuoteForm;