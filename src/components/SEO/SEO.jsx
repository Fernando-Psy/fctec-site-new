import { useEffect } from 'react';

const SEO = ({
  title = "Criação de Sites e Sistemas Web em Belford Roxo RJ | FCTEC Desenvolvimento",
  description = "Desenvolvimento web profissional para empresas em Belford Roxo, Nova Iguaçu, Duque de Caxias e Rio de Janeiro. Sites institucionais, sistemas sob medida e Google Meu Negócio. Orçamento gratuito!",
  keywords = "criação de sites belford roxo, desenvolvimento web rio de janeiro, sistema web sob medida rj, site institucional rj, google meu negócio belford roxo, agência web baixada fluminense",
  author = "FCTEC Desenvolvimento",
  url = typeof window !== 'undefined' ? window.location.href : 'https://fctec.dev.br',
  image = "https://fctec.dev.br/og-image.jpg",
  type = "website"
}) => {
  useEffect(() => {
    document.title = title;

    const metaTags = {
      description: description,
      keywords: keywords,
      author: author,
      robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      language: 'pt-BR',
      'revisit-after': '7 days',
      'geo.region': 'BR-RJ',
      'geo.placename': 'Belford Roxo',
      'geo.position': '-22.754321;-43.4123456',
      'ICBM': '-22.754321, -43.4123456',
      'og:type': type,
      'og:title': title,
      'og:description': description,
      'og:url': url,
      'og:image': image,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:site_name': 'FCTEC Desenvolvimento',
      'og:locale': 'pt_BR',
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image,
      'viewport': 'width=device-width, initial-scale=1.0',
      'format-detection': 'telephone=yes',
      'theme-color': '#040b1a',
    };

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

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    const areaServed = [
      { "@type": "Country", "name": "Brasil" },
      { "@type": "City", "name": "Belford Roxo" },
      { "@type": "City", "name": "Nova Iguacu" },
      { "@type": "City", "name": "Duque de Caxias" },
      { "@type": "City", "name": "Sao Joao de Meriti" },
      { "@type": "City", "name": "Nilopolis" },
      { "@type": "City", "name": "Rio de Janeiro" },
      { "@type": "AdministrativeArea", "name": "Rio de Janeiro" },
    ];

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["LocalBusiness", "ProfessionalService"],
          "@id": "https://fctec.dev.br/#local-business",
          "name": "FCTEC Desenvolvimento Web",
          "alternateName": "FCBJ Desenvolvimento",
          "image": image,
          "logo": "https://fctec.dev.br/logo.png",
          "description": "Agência de desenvolvimento web especializada em criação de sites institucionais, sistemas web personalizados e otimização para Google. Atendemos empresas em Belford Roxo, Nova Iguaçu, Duque de Caxias e todo o Rio de Janeiro.",
          "url": "https://fctec.dev.br",
          "telephone": "+5521968810478",
          "email": "fernando.cbj.tec@gmail.com",
          "priceRange": "$$",
          "currenciesAccepted": "BRL",
          "paymentAccepted": "PIX, Cartão de Crédito, Transferência Bancária",
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
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços de Desenvolvimento Web",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Site Institucional com CMS",
                  "description": "Criação de site profissional com painel administrativo para você gerenciar o conteúdo sem precisar de programador."
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "1800",
                  "priceCurrency": "BRL",
                  "minPrice": "1800"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Sistema Web Personalizado",
                  "description": "Desenvolvimento de sistemas web sob medida para clínicas e empresas com agendamento, relatórios e gestão."
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "8000",
                  "priceCurrency": "BRL",
                  "minPrice": "8000"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Otimização Google Meu Negócio",
                  "description": "Configuração estratégica do Google Meu Negócio para aumentar visibilidade local no Google Maps."
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "900",
                  "priceCurrency": "BRL",
                  "minPrice": "900"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Manutenção e Suporte Técnico",
                  "description": "Plano mensal de manutenção com atualizações de segurança, backups e suporte prioritário."
                },
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "price": "350",
                  "priceCurrency": "BRL",
                  "minPrice": "350",
                  "unitCode": "MON"
                }
              }
            ]
          },
          "founder": {
            "@type": "Person",
            "name": "Fernando",
            "jobTitle": "Desenvolvedor Web Full Stack",
            "knowsAbout": ["React", "Python", "Django", "Node.js", "SEO", "Desenvolvimento Web"]
          },
          "serviceType": [
            "Criação de sites institucionais",
            "Desenvolvimento de sistemas web",
            "Google Meu Negócio",
            "Manutenção de sites e sistemas",
            "E-commerce",
            "Landing Page"
          ],
          "knowsAbout": [
            "SEO local",
            "Desenvolvimento web",
            "Sistemas sob medida",
            "React",
            "Python",
            "Django",
            "Google Meu Negócio",
            "E-commerce"
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
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "12",
            "bestRating": "5",
            "worstRating": "1"
          },
          "sameAs": [
            "https://www.instagram.com/fcbj.dev",
            "https://www.facebook.com/share/1CC9521Qrs/"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://fctec.dev.br/#website",
          "url": "https://fctec.dev.br",
          "name": "FCTEC Desenvolvimento Web",
          "description": "Desenvolvimento web profissional para empresas no Rio de Janeiro",
          "inLanguage": "pt-BR",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://fctec.dev.br/blog?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@id": "https://fctec.dev.br/#local-business"
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

  return null;
};

export default SEO;
