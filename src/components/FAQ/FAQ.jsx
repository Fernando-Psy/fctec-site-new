import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Sobre os Serviços",
      icon: "💼",
      questions: [
        {
          question: "Quanto tempo leva para desenvolver um site ou sistema?",
          answer: "O prazo varia conforme a complexidade: Google Meu Negócio (3-5 dias), Site Institucional (10-15 dias), Sistema Web Personalizado (30-60 dias). Sempre entregamos um cronograma detalhado antes de iniciar."
        },
        {
          question: "Qual a diferença entre site institucional e sistema web?",
          answer: "Site institucional é voltado para divulgação (portfólio, serviços, contato). Sistema web é uma aplicação completa com funcionalidades específicas como agendamento, cadastros, relatórios e gestão de dados."
        },
        {
          question: "Preciso ter conhecimento técnico para usar o site?",
          answer: "Não! Nossos sites vêm com painel de administração intuitivo. Você consegue atualizar textos, imagens e conteúdos sem precisar programar. Oferecemos treinamento completo."
        }
      ]
    },
    {
      category: "Investimento",
      icon: "💰",
      questions: [
        {
          question: "Quais são as formas de pagamento?",
          answer: "Aceitamos PIX, cartão de crédito (até 3x via Mercado Pago) e transferência bancária. Para projetos acima de R$ 5.000, oferecemos parcelamento direto em até 5x sem juros."
        },
        {
          question: "O que está incluso no preço?",
          answer: "Todos os pacotes incluem: design personalizado, desenvolvimento completo, domínio (.com.br) por 1 ano, hospedagem por 1 ano, SSL (segurança), otimização mobile, treinamento e 30 dias de suporte pós-lançamento."
        },
        {
          question: "Posso testar antes de contratar?",
          answer: "Com certeza! Nos planos de assinatura, você tem 7 DIAS GRÁTIS para testar tudo. Para projetos personalizados, agendamos uma reunião para entender suas necessidades e mostramos cases similares."
        },
        {
          question: "Existe algum custo adicional depois da entrega?",
          answer: "Após 1 ano, há apenas a renovação de domínio (~R$ 50/ano) e hospedagem (a partir de R$ 20/mês). A manutenção é opcional (R$ 350/mês) mas altamente recomendada para segurança e atualizações."
        }
      ]
    },
    {
      category: "Técnico e Suporte",
      icon: "⚙️",
      questions: [
        {
          question: "Vocês fazem integração com redes sociais e WhatsApp?",
          answer: "Sim! Integramos botão de WhatsApp flutuante, links para Instagram/Facebook, e podemos configurar APIs do WhatsApp Business para envio automático de mensagens e notificações."
        },
        {
          question: "O site funciona em celulares e tablets?",
          answer: "Todos os nossos projetos são 100% responsivos, ou seja, se adaptam perfeitamente a qualquer dispositivo (desktop, tablet, celular). Testamos em diversos navegadores e resoluções."
        },
        {
          question: "Como funciona a hospedagem? Meu site pode sair do ar?",
          answer: "Usamos servidores confiáveis (AWS, DigitalOcean) com 99.9% de uptime. Fazemos backups automáticos diários. No plano de manutenção, monitoramos 24/7 e resolvemos qualquer problema rapidamente."
        }
      ]
    },
    {
      category: "Manutenção",
      icon: "🛠️",
      questions: [
        {
          question: "Por que a manutenção é importante?",
          answer: "90% dos sistemas quebram por falta de atualização. A manutenção garante: atualizações de segurança, correção de bugs, melhorias de performance, backups regulares e suporte prioritário."
        },
        {
          question: "O que está incluso no plano de manutenção?",
          answer: "Atualizações de segurança, correções de bugs, ajustes de conteúdo (textos/imagens), melhorias de performance, backups semanais, monitoramento 24/7 e suporte prioritário via WhatsApp."
        },
        {
          question: "Posso cancelar a manutenção quando quiser?",
          answer: "Sim, não há fidelidade. Você pode cancelar a qualquer momento. Porém, recomendamos manter pelo menos nos primeiros 6 meses para garantir estabilidade total do sistema."
        }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{
      padding: '6rem 2rem',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
            border: '1px solid rgba(37, 99, 235, 0.2)',
            padding: '0.5rem 1.25rem',
            borderRadius: '50px',
            marginBottom: '1.5rem',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: '#1e40af'
          }}>
            <span>❓</span>
            <span>Tire suas dúvidas</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: '800',
            color: '#0f172a',
            marginBottom: '1rem',
            letterSpacing: '-0.02em'
          }}>
            Perguntas <span style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #0d5996 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Frequentes</span>
          </h2>

          <p style={{
            fontSize: '1.125rem',
            color: '#64748b',
            lineHeight: '1.7'
          }}>
            Respostas claras e diretas para as principais dúvidas dos nossos clientes
          </p>
        </div>

        {/* FAQ Categories */}
        {faqs.map((category, catIdx) => (
          <div key={catIdx} style={{
            marginBottom: '3rem'
          }}>
            {/* Category Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1.5rem',
              paddingBottom: '0.75rem',
              borderBottom: '2px solid #e2e8f0'
            }}>
              <span style={{ fontSize: '1.75rem' }}>{category.icon}</span>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#0f172a',
                margin: 0
              }}>
                {category.category}
              </h3>
            </div>

            {/* Questions */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {category.questions.map((faq, faqIdx) => {
                const globalIndex = `${catIdx}-${faqIdx}`;
                const isOpen = openIndex === globalIndex;

                return (
                  <div key={faqIdx} style={{
                    background: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    boxShadow: isOpen
                      ? '0 4px 12px rgba(37, 99, 235, 0.15)'
                      : '0 2px 4px rgba(15, 23, 42, 0.06)'
                  }}>
                    {/* Question */}
                    <button
                      onClick={() => toggleFAQ(globalIndex)}
                      style={{
                        width: '100%',
                        padding: '1.25rem 1.5rem',
                        background: 'transparent',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'background 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        if (!isOpen) e.currentTarget.style.background = '#f8fafc';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <span style={{
                        fontSize: '1.05rem',
                        fontWeight: '600',
                        color: isOpen ? '#2563eb' : '#0f172a',
                        transition: 'color 0.2s ease'
                      }}>
                        {faq.question}
                      </span>

                      <div style={{
                        width: '32px',
                        height: '32px',
                        background: isOpen
                          ? 'linear-gradient(135deg, #2563eb 0%, #0d5996 100%)'
                          : '#f1f5f9',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.3s ease',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}>
                        <span style={{
                          color: isOpen ? 'white' : '#64748b',
                          fontSize: '1.25rem',
                          fontWeight: '300',
                          lineHeight: '1'
                        }}>
                          {isOpen ? '−' : '+'}
                        </span>
                      </div>
                    </button>

                    {/* Answer */}
                    <div style={{
                      maxHeight: isOpen ? '500px' : '0',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease'
                    }}>
                      <div style={{
                        padding: '0 1.5rem 1.25rem',
                        color: '#475569',
                        fontSize: '0.95rem',
                        lineHeight: '1.7',
                        borderTop: '1px solid #f1f5f9'
                      }}>
                        <div style={{ paddingTop: '1rem' }}>
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* CTA Footer */}
        <div style={{
          marginTop: '4rem',
          padding: '2.5rem',
          background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
          borderRadius: '16px',
          textAlign: 'center',
          border: '1px solid rgba(37, 99, 235, 0.2)'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#0f172a',
            marginBottom: '1rem'
          }}>
            Ainda tem alguma dúvida?
          </h3>
          <p style={{
            fontSize: '1.05rem',
            color: '#475569',
            marginBottom: '1.5rem'
          }}>
            Nossa equipe está pronta para te atender e esclarecer qualquer questão!
          </p>
          <button
            onClick={() => window.open('https://wa.me/5521968810478?text=Oi, tenho algumas dúvidas sobre os serviços', '_blank')}
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #0d5996 100%)',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
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
            <span>💬</span>
            <span>Falar no WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;