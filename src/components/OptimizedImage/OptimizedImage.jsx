import { useState } from 'react';

/**
 * Componente de imagem otimizado com suporte a WebP e lazy loading
 * Reduz tamanho de bytes e melhora LCP
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
  ...props
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Se não houver webpSrc, usar src normal
  const hasWebP = webpSrc && !imageError;

  return (
    <picture>
      {/* WebP source para navegadores que suportam */}
      {hasWebP && (
        <source
          srcSet={webpSrc}
          type="image/webp"
          onError={() => setImageError(true)}
        />
      )}
      {/* Fallback para formatos tradicionais */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
        style={{
          ...style,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setImageError(true)}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
