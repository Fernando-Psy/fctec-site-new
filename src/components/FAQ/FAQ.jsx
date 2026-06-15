import { useState, useEffect } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const topFaqs = [
    {
      question: 'Quanto tempo leva para desenvolver um site profissional?',
      answer:
        'Depende do tipo de projeto: Google Meu Negócio leva 3 a 5 dias úteis, um Site Institucional completo fica pronto em 10 a 15 dias, e um Sistema Web personalizado (com painel, agendamento ou relatórios) leva entre 30 e 60 dias. Antes de começar, fornecemos um cronograma detalhado sem surpresas.',
    },
    {
      question: 'Qual a diferença entre site institucional e sistema web?',
      answer:
        'O site institucional é voltado para divulgação: apresenta seus serviços, portfólio e contato — ideal para empresas que querem ter presença digital e aparecer no Google. Já o sistema web tem funcionalidades dinâmicas como agendamento online, controle de clientes, relatórios e gestão de dados. Cada solução tem um propósito diferente e trabalhamos com as duas.',
    },
    {
      question: 'O que está incluso no preço do site?',
      answer:
        'Nossos projetos incluem: design responsivo personalizado, desenvolvimento completo, domínio por 1 ano, hospedagem por 1 ano, certificado SSL (HTTPS), adaptação para celular e tablet, treinamento para uso do painel, e 30 dias de suporte técnico pós-entrega. Sem cobranças ocultas.',
    },
    {
      question: 'O site funciona bem em celulares e tablets?',
      answer:
        'Sim! Todos os nossos sites são 100% responsivos e testados em dispositivos móveis, tablets e navegadores modernos (Chrome, Safari, Firefox, Edge). Seguimos as diretrizes do Google para Mobile First Indexing, o que também melhora o posicionamento nos resultados de busca.',
    },
    {
      question: 'Como funciona o início de um projeto comigo?',
      answer:
        'O processo é simples: 1) Reunião gratuita de diagnóstico para entender seu negócio e objetivos; 2) Envio de proposta detalhada com prazo, escopo e valor; 3) Aprovação e assinatura do contrato; 4) Início do desenvolvimento com atualizações periódicas. Você participa ativamente e aprova cada etapa.',
    },
  ];

  const additionalFaqs = [
    {
      question: 'Preciso ter conhecimento técnico para gerenciar o site?',
      answer:
        'Não! Entregamos um painel de administração intuitivo e realizamos treinamento completo. Você consegue atualizar textos, imagens, blog e informações de contato sem precisar saber programar. E se tiver dúvidas, nossa equipe de suporte está disponível.',
    },
    {
      question: 'O que acontece se eu quiser cancelar o contrato?',
      answer:
        'Você fica com tudo. Exportamos seus dados em formato aberto (sem bloqueio proprietário), o domínio fica registrado em seu nome ou CNPJ, e as contas de hospedagem são transferidas para você. Sem multas ou retenção de dados.',
    },
    {
      question: 'Quais são as formas de pagamento aceitas?',
      answer:
        'Aceitamos PIX, cartão de crédito (até 3x sem juros) e transferência bancária. Para projetos acima de R$ 5.000 oferecemos parcelamento direto em até 5x sem juros. O pagamento é dividido em entrada e entrega para maior segurança.',
    },
    {
      question: 'Quem fica com o domínio e redes sociais após o projeto?',
      answer:
        'Você! Sempre registramos o domínio em seu CPF ou CNPJ e criamos as contas de redes sociais vinculadas ao seu e-mail. Nós configuramos tudo do zero, mas o controle é 100% seu desde o início.',
    },
    {
      question: 'Existe custo adicional depois da entrega do site?',
      answer:
        'Após o primeiro ano, há renovação de domínio (em torno de R$ 50/ano) e hospedagem (a partir de R$ 20/mês, dependendo do plano). A manutenção mensal é opcional e custa R$ 350/mês, incluindo atualizações de segurança, backups e suporte prioritário.',
    },
    {
      question: 'Vocês integram o site com WhatsApp e redes sociais?',
      answer:
        'Sim! Todos os projetos incluem botão flutuante do WhatsApp, links para redes sociais e integração com o WhatsApp Business. Para sistemas mais avançados, oferecemos automações via API do WhatsApp para mensagens automáticas e atendimento digital.',
    },
    {
      question: 'O site pode sair do ar? Como funciona a hospedagem?',
      answer:
        'Utilizamos servidores profissionais (AWS e DigitalOcean) com 99,9% de uptime garantido e backups diários automáticos. Em caso de qualquer instabilidade, somos notificados automaticamente e agimos de imediato para restaurar o serviço.',
    },
    {
      question: 'Por que a manutenção mensal é importante?',
      answer:
        'Um site sem manutenção fica vulnerável a ataques, plugins desatualizados e quedas de performance. A manutenção mensal garante: segurança contínua, correção de bugs, melhorias de velocidade, backups e suporte prioritário — evitando 90% dos problemas comuns.',
    },
    {
      question: 'Posso cancelar a manutenção mensal quando quiser?',
      answer:
        'Sim, sem fidelidade ou multa. O plano de manutenção é mensal e pode ser cancelado a qualquer momento. Recomendamos manter nos primeiros 6 meses para garantir a estabilidade do projeto após o lançamento.',
    },
  ];

  const displayedFaqs = showAll ? [...topFaqs, ...additionalFaqs] : topFaqs;
  const allFaqs = [...topFaqs, ...additionalFaqs];

  // FAQPage Schema for Google Rich Results
  useEffect(() => {
    const schemaFAQ = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: allFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    };

    let script = document.getElementById('schema-faq');
    if (!script) {
      script = document.createElement('script');
      script.id = 'schema-faq';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaFAQ);

    return () => {
      const el = document.getElementById('schema-faq');
      if (el) el.remove();
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      style={{
        padding: '6rem 2rem',
        background:
          'radial-gradient(circle at 12% 20%, rgba(6, 182, 212, 0.14) 0%, transparent 34%), radial-gradient(circle at 80% 15%, rgba(99, 102, 241, 0.14) 0%, transparent 36%), linear-gradient(145deg, #040b1a 0%, #07152c 55%, #0b1e3f 100%)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
              fontWeight: '600',
              color: '#67e8f9',
            }}
          >
            <span>❓</span>
            <span>Perguntas Frequentes</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: '800',
              color: '#e2e8f0',
              marginBottom: '1rem',
              letterSpacing: '-0.02em',
            }}
          >
            Tire Suas{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, #22d3ee 0%, #60a5fa 45%, #a78bfa 100%)',
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
              color: '#cbd5e1',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.7',
            }}
          >
            Respostas completas para as perguntas mais comuns sobre desenvolvimento web, prazos e valores
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {displayedFaqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background:
                  openIndex === index
                    ? 'rgba(20, 30, 55, 0.95)'
                    : 'rgba(15, 23, 42, 0.84)',
                border: openIndex === index
                  ? '1px solid rgba(34, 211, 238, 0.45)'
                  : '1px solid rgba(148, 163, 184, 0.24)',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow:
                  openIndex === index
                    ? '0 14px 26px rgba(2, 6, 23, 0.45), 0 0 0 1px rgba(34,211,238,0.1)'
                    : 'none',
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
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
                }}
              >
                <span
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: '600',
                    color: openIndex === index ? '#67e8f9' : '#e2e8f0',
                    transition: 'color 0.3s ease',
                    lineHeight: '1.4',
                  }}
                >
                  {faq.question}
                </span>
                <span
                  style={{
                    fontSize: '1.25rem',
                    color: '#67e8f9',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.35s ease',
                    flexShrink: 0,
                  }}
                >
                  ▼
                </span>
              </button>

              <div
                style={{
                  maxHeight: openIndex === index ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease',
                }}
              >
                <div
                  style={{
                    padding: '0 1.5rem 1.75rem',
                    color: '#cbd5e1',
                    fontSize: '0.975rem',
                    lineHeight: '1.8',
                    borderTop: '1px solid rgba(148, 163, 184, 0.2)',
                    paddingTop: '1.25rem',
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button
              onClick={() => setShowAll(true)}
              style={{
                padding: '1rem 2rem',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '2px solid rgba(34, 211, 238, 0.55)',
                borderRadius: '12px',
                color: '#67e8f9',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(34, 211, 238, 0.18)';
                e.currentTarget.style.color = '#e2e8f0';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(15, 23, 42, 0.8)';
                e.currentTarget.style.color = '#67e8f9';
              }}
            >
              <span>Ver mais perguntas</span>
              <span>({additionalFaqs.length})</span>
            </button>
          </div>
        )}

        <div
          style={{
            marginTop: '4rem',
            padding: '3rem 2rem',
            background:
              'linear-gradient(145deg, rgba(15, 23, 42, 0.86) 0%, rgba(30, 41, 59, 0.9) 100%)',
            borderRadius: '16px',
            textAlign: 'center',
            border: '1px solid rgba(34, 211, 238, 0.28)',
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
              fontWeight: '700',
              color: '#e2e8f0',
              marginBottom: '1rem',
            }}
          >
            Ainda tem dúvidas?
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#cbd5e1',
              marginBottom: '2rem',
              maxWidth: '500px',
              margin: '0 auto 2rem',
            }}
          >
            Fale conosco no WhatsApp. Respondemos rapidamente e sem compromisso!
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
              background:
                'linear-gradient(135deg, #06b6d4 0%, #3b82f6 55%, #6366f1 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '12px',
              fontSize: '1.05rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 20px rgba(37, 99, 235, 0.36)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 0 22px rgba(34, 211, 238, 0.35)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.36)';
            }}
          >
            <span>💬</span>
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
