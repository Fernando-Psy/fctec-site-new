import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // Top 5 most critical questions - combate ao efeito porta mostrando menos inicialmente
  const topFaqs = [
    {
      question: 'Quanto tempo leva para desenvolver um site?',
      answer:
        'Google Meu Negócio: 3-5 dias • Site Institucional: 10-15 dias • Sistema Web: 30-60 dias. Cronograma detalhado fornecido antes de iniciar.',
    },
    {
      question: 'Qual a diferença entre site e sistema web?',
      answer:
        'Site é para divulgação (portfólio, serviços). Sistema web tem funcionalidades como agendamento, relatórios e gestão de dados.',
    },
    {
      question: 'O que está incluso no preço?',
      answer:
        'Design, desenvolvimento, domínio (1 ano), hospedagem (1 ano), SSL, mobile, treinamento e 30 dias de suporte.',
    },
    {
      question: 'O site funciona em celulares?',
      answer:
        '100% responsivo. Otimizado para desktop, tablet e celular. Testado em todos os navegadores principais.',
    },
    {
      question: 'Como funciona o início do projeto?',
      answer:
        'Reunião gratuita → Proposta detalhada → Aprovação → Início. Sem surpresas, sem cobranças ocultas.',
    },
  ];

  // Additional questions (shown when "Ver mais" is clicked)
  const additionalFaqs = [
    {
      question: 'Preciso ter conhecimento técnico?',
      answer:
        'Não! Painel de administração intuitivo + treinamento completo. Você atualiza conteúdo sem programar.',
    },
    {
      question: 'O que acontece se eu cancelar?',
      answer:
        'Exportamos todos os seus dados em formato aberto. Domínio e contas permanecem suas. Sem multas ou retenção.',
    },
    {
      question: 'Quais são as formas de pagamento?',
      answer:
        'PIX, cartão (até 3x), transferência. Projetos acima de R$ 5.000: parcelamento direto até 5x sem juros.',
    },
    {
      question: 'Quem fica com o domínio e redes sociais?',
      answer:
        'Você! Domínio registrado em seu nome/CNPJ. Redes sociais vinculadas à sua conta. Nós configuramos, você controla.',
    },
    {
      question: 'Existe algum custo adicional depois?',
      answer:
        'Após 1 ano: renovação de domínio (~R$ 50/ano) e hospedagem (R$ 20+/mês). Manutenção opcional: R$ 350/mês.',
    },
    {
      question: 'Vocês fazem integração com WhatsApp?',
      answer:
        'Sim! Botão flutuante, links para redes sociais e APIs do WhatsApp Business para mensagens automáticas.',
    },
    {
      question: 'Meu site pode sair do ar?',
      answer:
        'Usamos servidores confiáveis (AWS, DigitalOcean) com 99.9% uptime. Backups diários automáticos.',
    },
    {
      question: 'Por que a manutenção é importante?',
      answer:
        'Garante segurança, correção de bugs, performance, backups e suporte prioritário. Evita 90% dos problemas.',
    },
    {
      question: 'Posso cancelar a manutenção quando quiser?',
      answer:
        'Sim, sem fidelidade. Recomendamos manter nos primeiros 6 meses para garantir estabilidade.',
    },
  ];

  const displayedFaqs = showAll ? [...topFaqs, ...additionalFaqs] : topFaqs;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #ffffff 0%, #ffffff 100%)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header - More Spacious */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              padding: '0.5rem 1.25rem',
              borderRadius: '50px',
              marginBottom: '1.5rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              color: '#0ea5e9',
            }}
          >
            <span>❓</span>
            <span>Perguntas Frequentes</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: '800',
              color: '#1a2129',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            Tire Suas{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Dúvidas
            </span>
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: '#7a8a99',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.7',
            }}
          >
            Respostas rápidas e diretas para as perguntas mais comuns
          </p>
        </div>

        {/* FAQ List - Cleaner Design */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {displayedFaqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                border: '1px solid #f0f2f5',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow:
                  openIndex === index
                    ? '0 4px 16px rgba(15, 23, 42, 0.08)'
                    : 'none',
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: '1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '1rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                }}
              >
                <span
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: '600',
                    color: openIndex === index ? '#0ea5e9' : '#1a2129',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {faq.question}
                </span>
                <span
                  style={{
                    fontSize: '1.5rem',
                    color: '#0ea5e9',
                    transform:
                      openIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0,
                  }}
                >
                  ▼
                </span>
              </button>

              {openIndex === index && (
                <div
                  style={{
                    padding: '0 1.5rem 1.5rem',
                    color: '#5a6978',
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    animation: 'fadeIn 0.3s ease',
                    borderTop: '1px solid #fafbfc',
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <div
            style={{
              textAlign: 'center',
              marginTop: '3rem',
            }}
          >
            <button
              onClick={() => setShowAll(true)}
              style={{
                padding: '1rem 2rem',
                background: 'white',
                border: '2px solid #0ea5e9',
                borderRadius: '12px',
                color: '#0ea5e9',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#0ea5e9';
                e.currentTarget.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#0ea5e9';
              }}
            >
              <span>Ver mais perguntas</span>
              <span>({additionalFaqs.length})</span>
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div
          style={{
            marginTop: '4rem',
            padding: '3rem 2rem',
            background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
            borderRadius: '16px',
            textAlign: 'center',
            border: '1px solid #bfdbfe',
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
              fontWeight: '700',
              color: '#1a2129',
              marginBottom: '1rem',
            }}
          >
            Ainda tem dúvidas?
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#5a6978',
              marginBottom: '2rem',
              maxWidth: '500px',
              margin: '0 auto 2rem',
            }}
          >
            Fale conosco no WhatsApp. Responderemos rapidamente!
          </p>
          <a
            href="https://wa.me/5521968810478?text=Oi, tenho algumas dúvidas sobre os serviços."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '12px',
              fontSize: '1.05rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow =
                '0 8px 20px rgba(59, 130, 246, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow =
                '0 4px 12px rgba(59, 130, 246, 0.3)';
            }}
          >
            <span>💬</span>
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Add fadeIn animation */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
