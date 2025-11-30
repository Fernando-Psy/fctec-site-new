import { useState, useEffect } from 'react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Mostrar após 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Mostrar tooltip após mais 1 segundo
      setTimeout(() => setShowTooltip(true), 1000);
      // Esconder tooltip após 5 segundos
      setTimeout(() => setShowTooltip(false), 6000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/5521968810478?text=Oi! Vim pelo site e gostaria de mais informações', '_blank');
  };

  return (
    <>
      {/* Botão Principal */}
      <div
        onClick={handleClick}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 9999,
          cursor: 'pointer',
          transform: isVisible ? 'scale(1)' : 'scale(0)',
          transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
          animation: isVisible ? 'pulse 2s infinite' : 'none'
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Círculo de Fundo com Pulso */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70px',
          height: '70px',
          background: 'rgba(37, 211, 102, 0.2)',
          borderRadius: '50%',
          animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
        }} />

        {/* Botão */}
        <div style={{
          position: 'relative',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(37, 211, 102, 0.5)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.4)';
        }}>
          {/* Ícone WhatsApp */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>

          {/* Badge de Notificação */}
          <div style={{
            position: 'absolute',
            top: '-2px',
            right: '-2px',
            width: '20px',
            height: '20px',
            background: '#ff4444',
            borderRadius: '50%',
            border: '2px solid white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontWeight: '700',
            color: 'white',
            animation: 'bounce 1s infinite'
          }}>
            1
          </div>
        </div>
      </div>

      {/* Tooltip */}
      <div style={{
        position: 'fixed',
        bottom: '35px',
        right: '110px',
        zIndex: 9998,
        background: 'white',
        padding: '1rem 1.25rem',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        maxWidth: '280px',
        transform: showTooltip ? 'translateX(0) scale(1)' : 'translateX(20px) scale(0.8)',
        opacity: showTooltip ? 1 : 0,
        pointerEvents: showTooltip ? 'auto' : 'none',
        transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        border: '1px solid #e2e8f0'
      }}>
        {/* Seta */}
        <div style={{
          position: 'absolute',
          right: '-8px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 0,
          height: 0,
          borderTop: '8px solid transparent',
          borderBottom: '8px solid transparent',
          borderLeft: '8px solid white'
        }} />

        {/* Conteúdo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
            flexShrink: 0
          }}>
            👋
          </div>
          <div>
            <div style={{
              fontSize: '0.875rem',
              fontWeight: '700',
              color: '#0f172a',
              marginBottom: '0.25rem'
            }}>
              Olá! Posso ajudar?
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: '#64748b',
              lineHeight: '1.4'
            }}>
              Respondo em poucos minutos!
            </div>
          </div>
        </div>

        {/* Botão Fechar */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowTooltip(false);
          }}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            width: '20px',
            height: '20px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: '#94a3b8',
            fontSize: '16px',
            lineHeight: '1',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#f1f5f9';
            e.currentTarget.style.color = '#0f172a';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#94a3b8';
          }}
        >
          ×
        </button>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @media (max-width: 768px) {
          /* Ajustar posição em mobile */
        }
      `}</style>
    </>
  );
};

export default WhatsAppFloat;