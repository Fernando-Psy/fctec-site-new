import { useEffect } from 'react';

const SEO = ({
  title = "Desenvolvimento Web no Brasil com Base em Belford Roxo RJ | FCBJ",
  description = "Criação de sites, sistemas web e estrutura digital para empresas de todo o Brasil, com base em Belford Roxo RJ e foco em cidades do Rio de Janeiro.",
  keywords = "desenvolvimento web belford roxo, criação de sites rio de janeiro, sistema web sob medida brasil, google meu negócio rj, desenvolvedor web rio de janeiro",
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
    const areaServed = [
      { "@type": "Country", name: "Brasil" },
      { "@type": "City", name: "Belford Roxo" },
      { "@type": "City", name: "Nova Iguacu" },
      { "@type": "City", name: "Duque de Caxias" },
      { "@type": "City", name: "Sao Joao de Meriti" },
      { "@type": "City", name: "Nilopolis" },
      { "@type": "City", name: "Rio de Janeiro" },
      { "@type": "AdministrativeArea", name: "Rio de Janeiro" },
    ];

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          "@id": "https://fctec.dev.br/#professional-service",
          "name": "FCBJ Desenvolvimento",
          "image": image,
          "description": description,
          "url": "https://fctec.dev.br",
          "telephone": "+5521968810478",
          "email": "fernando.cbj.tec@gmail.com",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Joao Fernandes Neto, 1166",
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
          "areaServed": areaServed,
          "serviceType": [
            "Criação de sites institucionais",
            "Desenvolvimento de sistemas web",
            "Google Meu Negócio",
            "Manutenção de sites e sistemas"
          ],
          "knowsAbout": [
            "SEO local",
            "Desenvolvimento web",
            "Sistemas sob medida",
            "React",
            "Python",
            "Django"
          ],
          "availableLanguage": ["pt-BR"],
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
          "sameAs": [
            "https://www.instagram.com/fcbj.dev",
            "https://www.facebook.com/share/1CC9521Qrs/"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://fctec.dev.br/#website",
          "url": "https://fctec.dev.br",
          "name": "FCBJ Desenvolvimento",
          "inLanguage": "pt-BR",
          "publisher": {
            "@id": "https://fctec.dev.br/#professional-service"
          }
        }
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
