/**
 * Carrega CSS não crítico de forma assíncrona após renderização inicial
 * Melhora FCP e LCP ao não bloquear renderização inicial
 */

export const loadNonCriticalCSS = () => {
  // Verificar se já foi carregado
  if (document.querySelector('link[href*="bootstrap.min.css"]')) {
    return;
  }

  // Carregar Bootstrap CSS de forma assíncrona
  // Usar CDN para melhor cache e performance
  const bootstrapLink = document.createElement('link');
  bootstrapLink.rel = 'stylesheet';
  bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
  bootstrapLink.integrity = 'sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN';
  bootstrapLink.crossOrigin = 'anonymous';
  bootstrapLink.media = 'print';
  bootstrapLink.onload = function() {
    this.media = 'all';
  };
  bootstrapLink.onerror = function() {
    // Fallback: carregar localmente se CDN falhar
    const fallbackLink = document.createElement('link');
    fallbackLink.rel = 'stylesheet';
    fallbackLink.href = '/node_modules/bootstrap/dist/css/bootstrap.min.css';
    fallbackLink.media = 'all';
    document.head.appendChild(fallbackLink);
  };
  document.head.appendChild(bootstrapLink);
};

// Auto-carregar após o load do documento (opcional)
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      // Aguardar renderização inicial
      requestAnimationFrame(() => {
        requestAnimationFrame(loadNonCriticalCSS);
      });
    });
  } else {
    // DOM já carregado, usar requestIdleCallback ou setTimeout
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadNonCriticalCSS, { timeout: 2000 });
    } else {
      setTimeout(loadNonCriticalCSS, 100);
    }
  }
}
