/**
 * Utilitário para carregar CSS de forma assíncrona (não bloqueante)
 * Usado para carregar CSS pesado que não é crítico para a renderização inicial
 */

/**
 * Carrega um arquivo CSS de forma assíncrona
 * @param {string} href - URL do arquivo CSS
 * @param {string} id - ID único para o elemento link (evita duplicação)
 * @returns {Promise<void>}
 */
export function loadCSS(href, id = null) {
  return new Promise((resolve, reject) => {
    // Verificar se já foi carregado
    if (id && document.getElementById(id)) {
      resolve();
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    if (id) link.id = id;

    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));

    document.head.appendChild(link);
  });
}

/**
 * Carrega múltiplos arquivos CSS em paralelo
 * @param {Array<{href: string, id?: string}>} cssFiles
 * @returns {Promise<void[]>}
 */
export function loadMultipleCSS(cssFiles) {
  return Promise.all(cssFiles.map(({ href, id }) => loadCSS(href, id)));
}

/**
 * Carrega CSS com preload para melhor performance
 * @param {string} href - URL do arquivo CSS
 * @param {string} id - ID único para o elemento link
 */
export function preloadCSS(href, id = null) {
  // Verificar se já existe
  if (id && document.getElementById(id)) {
    return;
  }

  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "style";
  link.href = href;
  if (id) link.id = `${id}-preload`;

  link.onload = function () {
    this.onload = null;
    this.rel = "stylesheet";
  };

  document.head.appendChild(link);

  // Fallback para navegadores que não suportam preload
  const noscriptLink = document.createElement("noscript");
  const fallbackLink = document.createElement("link");
  fallbackLink.rel = "stylesheet";
  fallbackLink.href = href;
  noscriptLink.appendChild(fallbackLink);
  document.head.appendChild(noscriptLink);
}

/**
 * Carrega CSS de forma idle (quando o navegador está ocioso)
 * Ideal para CSS não crítico
 * @param {string} href - URL do arquivo CSS
 * @param {string} id - ID único
 */
export function loadCSSIdle(href, id = null) {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(
      () => {
        loadCSS(href, id);
      },
      { timeout: 2000 },
    );
  } else {
    // Fallback: usar setTimeout
    setTimeout(() => {
      loadCSS(href, id);
    }, 1000);
  }
}

export default {
  loadCSS,
  loadMultipleCSS,
  preloadCSS,
  loadCSSIdle,
};
