import { useEffect, useRef, useState } from 'react';
import './SoroBlog.css';

const SORO_SCRIPT_SRC =
  'https://app.trysoro.com/api/embed/c3d7b215-0541-483d-822d-6e4914f17a0f';
const SORO_CONTAINER_ID = 'soro-blog';
const SORO_SCRIPT_SELECTOR = 'script[data-soro-embed="fctec-blog"]';

const SoroBlog = () => {
  const sectionRef = useRef(null);
  const [shouldLoadEmbed, setShouldLoadEmbed] = useState(false);

  useEffect(() => {
    if (shouldLoadEmbed) {
      return undefined;
    }

    const section = sectionRef.current;
    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShouldLoadEmbed(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '300px 0px',
        threshold: 0,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [shouldLoadEmbed]);

  useEffect(() => {
    if (!shouldLoadEmbed) {
      return undefined;
    }

    const container = document.getElementById(SORO_CONTAINER_ID);
    if (!container) {
      return undefined;
    }

    // Em navegação SPA, o script pode já existir e não reinicializar no novo mount.
    // Remove instâncias antigas para forçar bootstrap limpo do embed.
    document.querySelectorAll(SORO_SCRIPT_SELECTOR).forEach((scriptNode) => {
      scriptNode.remove();
    });

    container.innerHTML = '';

    const script = document.createElement('script');
    script.src = SORO_SCRIPT_SRC;
    script.defer = true;
    script.async = true;
    script.setAttribute('data-soro-embed', 'fctec-blog');
    document.body.appendChild(script);

    return () => {
      script.remove();
      container.innerHTML = '';
    };
  }, [shouldLoadEmbed]);

  return (
    <section id="blog" className="soro-blog-section" ref={sectionRef}>
      <div className="soro-blog-container">
        <header className="fctec-blog-page-header">
          <p className="fctec-blog-page-eyebrow">Conteudo pratico para negocios locais</p>
          <h1 className="fctec-blog-page-title">Blog da FCBJ</h1>
          <p className="fctec-blog-page-subtitle">
            Guias diretos sobre site, Google, CRM e captacao para ajudar voce a
            crescer com mais previsibilidade.
          </p>
        </header>

        <div className="soro-blog-shell">
          {shouldLoadEmbed ? (
            <div id={SORO_CONTAINER_ID} className="soro-blog-content" />
          ) : (
            <div className="soro-blog-placeholder">
              O blog sera carregado automaticamente quando esta secao entrar na
              tela.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SoroBlog;
