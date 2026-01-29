/**
 * Utilitários para scroll otimizados que evitam reflows forçados
 */

/**
 * Scroll suave para um elemento usando requestAnimationFrame
 * Evita reflows forçados aguardando o próximo frame antes de acessar propriedades geométricas
 */
export const scrollToElement = (elementId, options = {}) => {
  const {
    behavior = 'smooth',
    block = 'start',
    inline = 'nearest',
    offset = 0,
  } = options;

  // Usar requestAnimationFrame para garantir que o DOM está pronto
  // Duplo requestAnimationFrame garante que o layout foi calculado
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const element = document.getElementById(elementId);
      if (element) {
        // Ler propriedades geométricas uma única vez para evitar múltiplos reflows
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        
        const isVisible = rect.top >= 0 && rect.bottom <= windowHeight;

        if (!isVisible || offset !== 0) {
          // Calcular posição com offset usando valores já lidos
          const elementPosition = rect.top + scrollTop;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior,
          });
        } else {
          // Usar scrollIntoView apenas se necessário
          element.scrollIntoView({
            behavior,
            block,
            inline,
          });
        }
      }
    });
  });
};

/**
 * Scroll para o topo da página de forma otimizada
 */
export const scrollToTop = (behavior = 'smooth') => {
  // Usar requestAnimationFrame para evitar reflow forçado
  requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      behavior,
    });
  });
};

/**
 * Scroll para uma posição específica de forma otimizada
 */
export const scrollToPosition = (top, behavior = 'smooth') => {
  requestAnimationFrame(() => {
    window.scrollTo({
      top,
      behavior,
    });
  });
};

/**
 * Aguarda a navegação completar antes de fazer scroll
 * Útil quando há mudança de rota seguida de scroll
 */
export const scrollAfterNavigation = (elementId, delay = 0) => {
  // Aguardar múltiplos frames para garantir que o DOM foi atualizado
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (delay > 0) {
        setTimeout(() => {
          scrollToElement(elementId);
        }, delay);
      } else {
        scrollToElement(elementId);
      }
    });
  });
};
