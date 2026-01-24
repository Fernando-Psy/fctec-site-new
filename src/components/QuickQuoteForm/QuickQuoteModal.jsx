import { useState, useRef, useEffect } from 'react';

const QuickQuoteModal = ({ show, onHide, planName = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    service: planName
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const timeoutRefs = useRef([]);

  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach((t) => clearTimeout(t));
      timeoutRefs.current = [];
    };
  }, []);

  useEffect(() => {
    // Atualizar o serviço quando o modal abrir com um plano específico
    if (planName) {
      setFormData(prev => ({ ...prev, service: planName }));
    }
  }, [planName, show]);

  const services = [
    { value: 'google', label: '📍 Google Meu Negócio', icon: '🎯' },
    { value: 'site', label: '🌐 Site Institucional', icon: '💻' },
    { value: 'sistema', label: '⚙️ Sistema Personalizado', icon: '🚀' },
    { value: 'assinatura-basico', label: '📦 Presença Digital', icon: '🌟' },
    { value: 'assinatura-pro', label: '📦 Crescimento Pro', icon: '🚀' },
    { value: 'assinatura-enterprise', label: '📦 Enterprise', icon: '💎' },
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

    const serviceLabel = services.find(s => s.value === formData.service)?.label || formData.service;

    const message = `🎯 *Novo Pedido de Orçamento*\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📱 *Telefone:* ${formData.phone}\n` +
      `🏢 *Negócio:* ${formData.business}\n` +
      `💼 *Serviço:* ${serviceLabel}`;

    const whatsappURL = `https://wa.me/5521968810478?text=${encodeURIComponent(message)}`;

    const openTimeout = setTimeout(() => {
      const newWin = window.open(whatsappURL, '_blank');
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
        onHide();
      }, 3000);

      timeoutRefs.current.push(resetTimeout);
    }, 500);

    timeoutRefs.current.push(openTimeout);
  };

  const handleClose = () => {
    setFormData({ name: '', phone: '', business: '', service: '' });
    setShowSuccess(false);
    onHide();
  };

  if (!show) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={handleClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.7)',
          backdropFilter: 'blur(4px)',
          zIndex: 9999,
          animation: 'fadeIn 0.3s ease'
        }}
      />

      {/* Modal */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10000,
        maxWidth: '1100px',
        width: '90%',
        maxHeight: '90vh',
        overflowY: 'auto',
        animation: 'slideIn 0.3s ease'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(226, 232, 240, 0.5)'
        }}>
          {!showSuccess ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth > 991 ? '40% 60%' : '1fr',
              minHeight: '500px'
            }}>
              {/* Coluna Esquerda - Informações */}
              {window.innerWidth > 991 && (
                <div style={{
                  background: 'linear-gradient(135deg, #4e83af 0%, #3a5f7d 100%)',
                  padding: '3rem 2rem',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                    💼
                  </div>
                  <h3 style={{
                    fontSize: '1.75rem',
                    fontWeight: '700',
                    marginBottom: '1rem',
                    color: 'white'
                  }}>
                    Solicite Seu Orçamento!
                  </h3>
                  <p style={{
                    fontSize: '0.95rem',
                    opacity: 0.9,
                    lineHeight: '1.6',
                    marginBottom: '2rem',
                    color: 'white'
                  }}>
                    Preencha o formulário e entraremos em contato em até 2 horas para discutir seu projeto.
                  </p>

                  {planName && (
                    <div style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '12px',
                      padding: '1.25rem',
                      marginBottom: '2rem'
                    }}>
                      <div style={{
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        marginBottom: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Plano Selecionado
                      </div>
                      <div style={{
                        fontSize: '1.05rem',
                        fontWeight: '600'
                      }}>
                        {planName}
                      </div>
                    </div>
                  )}

                  <div style={{
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      fontSize: '0.85rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>✓</span>
                        <span>Resposta rápida garantida</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>✓</span>
                        <span>Consulta sem compromisso</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span>✓</span>
                        <span>Proposta personalizada</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Coluna Direita - Formulário */}
              <div style={{
                padding: '3rem 2.5rem',
                background: 'white'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '2rem'
                }}>
                  <h4 style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#0f172a',
                    margin: 0
                  }}>
                    Seus Dados
                  </h4>
                  <button
                    onClick={handleClose}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      fontSize: '1.5rem',
                      color: '#94a3b8',
                      cursor: 'pointer',
                      padding: '0.5rem',
                      lineHeight: '1',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = '#0f172a'}
                    onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Nome */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label htmlFor="qq-name-modal" style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#475569',
                      marginBottom: '0.5rem'
                    }}>
                      Seu Nome *
                    </label>
                    <input
                      id="qq-name-modal"
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
                        e.target.style.borderColor = '#4e83af';
                        e.target.style.boxShadow = '0 0 0 4px rgba(37, 99, 235, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e2e8f0';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label htmlFor="qq-phone-modal" style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#475569',
                      marginBottom: '0.5rem'
                    }}>
                      WhatsApp *
                    </label>
                    <input
                      id="qq-phone-modal"
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
                        e.target.style.borderColor = '#4e83af';
                        e.target.style.boxShadow = '0 0 0 4px rgba(37, 99, 235, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e2e8f0';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Business */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label htmlFor="qq-business-modal" style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#475569',
                      marginBottom: '0.5rem'
                    }}>
                      Tipo de Negócio *
                    </label>
                    <input
                      id="qq-business-modal"
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
                        e.target.style.borderColor = '#4e83af';
                        e.target.style.boxShadow = '0 0 0 4px rgba(37, 99, 235, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e2e8f0';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Service */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="qq-service-modal" style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#475569',
                      marginBottom: '0.5rem'
                    }}>
                      Serviço de Interesse *
                    </label>
                    <select
                      id="qq-service-modal"
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
                        e.target.style.borderColor = '#4e83af';
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
                        : 'linear-gradient(135deg, #4e83af 0%, #3a5f7d 100%)',
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
              </div>
            </div>
          ) : (
            <div style={{
              padding: '4rem 2rem',
              textAlign: 'center',
              minHeight: '500px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
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
                fontSize: '3rem',
                color: 'white'
              }}>
                ✓
              </div>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#0f172a',
                marginBottom: '0.75rem'
              }}>
                Solicitação Enviada!
              </h3>
              <p style={{
                fontSize: '1.05rem',
                color: '#64748b',
                lineHeight: '1.6',
                maxWidth: '400px'
              }}>
                Abrimos o WhatsApp para você. Já estamos preparando seu orçamento personalizado!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translate(-50%, -48%) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </>
  );
};

// Exemplo de uso
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Teste do Modal de Orçamento</h1>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        <button
          onClick={() => {
            setSelectedPlan('Presença Digital');
            setShowModal(true);
          }}
          style={{
            padding: '1rem 2rem',
            background: '#4e83af',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Plano Presença Digital
        </button>

        <button
          onClick={() => {
            setSelectedPlan('');
            setShowModal(true);
          }}
          style={{
            padding: '1rem 2rem',
            background: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Agende uma Conversa
        </button>
      </div>

      <QuickQuoteModal
        show={showModal}
        onHide={() => setShowModal(false)}
        planName={selectedPlan}
      />
    </div>
  );
};

export default App;