import { useState, useEffect } from 'react';

/**
 * Componente de imagem otimizado com suporte a WebP, lazy loading e responsive
 * Reduz tamanho de bytes e melhora LCP/CLS
 */
const OptimizedImage = ({
  src,
  webpSrc,
  alt,
  width,
  height,
  loading = 'lazy',
  fetchPriority = 'auto',
  className = '',
  style = {},
  sizes,
  srcSet,
  ...props
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(loading === 'eager');

  // Intersection Observer para lazy loading mais eficiente
  useEffect(() => {
    if (loading === 'eager' || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Começar a carregar 50px antes da imagem entrar na viewport
      }
    );

    const imgElement = document.getElementById(`img-${src}`);
    if (imgElement) {
      observer.observe(imgElement);
    }

    return () => observer.disconnect();
  }, [src, loading]);

  // Se não houver webpSrc, usar src normal
  const hasWebP = webpSrc && !imageError;

  // Placeholder enquanto a imagem não carrega
  const placeholderStyle = {
    background: 'linear-gradient(135deg, #f0f2f5 0%, #e2e8f0 100%)',
    minHeight: height ? `${height}px` : '200px',
    display: isLoaded ? 'none' : 'block',
  };

  return (
    <div
      id={`img-${src}`}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
      className={className}
    >
      {/* Placeholder */}
      {!isLoaded && <div style={placeholderStyle} />}

      {/* Imagem */}
      {isInView && (
        <picture>
          {/* WebP source para navegadores que suportam */}
          {hasWebP && (
            <source
              srcSet={webpSrc}
              type="image/webp"
              sizes={sizes}
              onError={() => setImageError(true)}
            />
          )}
          {/* Fallback para formatos tradicionais */}
          <img
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            decoding="async"
            fetchpriority={fetchPriority}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
            }}
            onLoad={() => setIsLoaded(true)}
            onError={() => setImageError(true)}
            {...props}
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;
