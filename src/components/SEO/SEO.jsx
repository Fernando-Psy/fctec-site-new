import { useEffect } from 'react';

const SEO = ({
  title = "FCBJ Desenvolvimento - Soluções Web em Belford Roxo RJ",
  description = "Desenvolvimento web profissional em Belford Roxo RJ: sites institucionais, sistemas personalizados, Google Meu Negócio e manutenção. Transforme sua presença digital.",
  keywords = "desenvolvimento web belford roxo, criação de sites rj, sistema web para clínicas, site com cms, google meu negócio, manutenção de sites, desenvolvedor web rio de janeiro",
  author = "FCBJ Desenvolvimento",
  url = window.location.href,
  image = "/logo.png", // Coloque uma imagem 1200x630px em public/
  type = "website"
}) => {
  useEffect(() => {
    // ===== TÍTULO =====
    document.title = title;

    // ===== META TAGS BÁSICAS =====
    const metaTags = {
      // SEO Básico
      description: description,
      keywords: keywords,
      author: author,
      robots: 'index, follow',
      language: 'pt-BR',
      'revisit-after': '7 days',

      // Geo Tags (Belford Roxo)
      'geo.region': 'BR-RJ',
      'geo.placename': 'Belford Roxo',
      'geo.position': '-22.754321;-43.4123456',
      'ICBM': '-22.754321, -43.4123456',

      // Open Graph (Facebook/LinkedIn)
      'og:type': type,
      'og:title': title,
      'og:description': description,
      'og:url': url,
      'og:image': image,
      'og:site_name': 'FCBJ Desenvolvimento',
      'og:locale': 'pt_BR',

      // Twitter Card
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,

      // Mobile
      'viewport': 'width=device-width, initial-scale=1.0',
      'format-detection': 'telephone=yes',

      // Theme Color
      'theme-color': '#4e83af'
    };

    // Criar/Atualizar Meta Tags
    Object.entries(metaTags).forEach(([name, content]) => {
      const isProperty = name.startsWith('og:') || name.startsWith('twitter:');
      const attribute = isProperty ? 'property' : 'name';

      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });

    // ===== CANONICAL URL =====
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // ===== SCHEMA.ORG (JSON-LD) =====
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "FCBJ Desenvolvimento",
      "image": image,
      "description": description,
      "url": "https://fctec.dev.br",
      "telephone": "+5521968810478",
      "email": "fernando.cbj.tec@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua João Fernandes Neto, 1166",
        "addressLocality": "Belford Roxo",
        "addressRegion": "RJ",
        "postalCode": "26100-000",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-22.754321",
        "longitude": "-43.4123456"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "13:00"
        }
      ],
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "24"
      },
      "sameAs": [
        "https://www.instagram.com/fcbj.dev",
        "https://www.facebook.com/share/1CC9521Qrs/"
      ]
    };

    let schemaScript = document.getElementById('schema-org-local-business');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'schema-org-local-business';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schemaData);

  }, [title, description, keywords, author, url, image, type]);

  return null; // Componente não renderiza nada visível
};

export default SEO;