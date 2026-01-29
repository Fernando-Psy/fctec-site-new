import { useState, useEffect } from 'react';

/**
 * Hook customizado para obter o tamanho da janela
 * Evita reflows forçados usando ResizeObserver e requestAnimationFrame
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Função para atualizar o tamanho de forma otimizada
    // Usar requestAnimationFrame para evitar reflows forçados
    // e agrupar múltiplas atualizações em um único frame
    let rafId = null;
    
    const handleResize = () => {
      // Cancelar frame anterior se ainda não foi executado
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      
      // Agendar atualização para o próximo frame
      rafId = requestAnimationFrame(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
        rafId = null;
      });
    };

    // Usar evento resize com passive: true para melhor performance
    // O navegador pode otimizar melhor eventos passivos
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      // Cancelar qualquer frame pendente
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return windowSize;
};

/**
 * Hook simplificado para verificar se é desktop (maior que 991px)
 */
export const useIsDesktop = () => {
  const { width } = useWindowSize();
  return width > 991;
};

/**
 * Hook simplificado para verificar se é tablet/mobile (menor que 768px)
 */
export const useIsMobile = () => {
  const { width } = useWindowSize();
  return width <= 768;
};
