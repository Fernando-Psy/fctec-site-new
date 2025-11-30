import { useState } from 'react';
import './Testimonial.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Carlos Mendes",
      role: "Diretor da Clínica Saúde Plus",
      image: "https://ui-avatars.com/api/?name=Carlos+Mendes&background=2563eb&color=fff&size=100",
      rating: 5,
      text: "O sistema de agendamento desenvolvido pela FCBJ transformou nossa clínica. Reduzimos 60% das faltas e aumentamos em 40% nossa capacidade de atendimento.",
      results: ["60% menos faltas", "40% mais atendimentos", "ROI em 3 meses"],
      service: "Sistema Web Personalizado"
    },
    {
      id: 2,
      name: "Marina Silva",
      role: "Proprietária - Estética Bella Vita",
      image: "https://ui-avatars.com/api/?name=Marina+Silva&background=10b981&color=fff&size=100",
      rating: 5,
      text: "Depois do Google Meu Negócio configurado pela FCBJ, meu telefone não para de tocar. Aumentei 250% nas consultas vindas do Google em apenas 2 meses!",
      results: ["250% mais consultas", "Top 3 no Google", "5 estrelas"],
      service: "Google Meu Negócio"
    },
    {
      id: 3,
      name: "Roberto Oliveira",
      role: "CEO - Construtora Horizonte",
      image: "https://ui-avatars.com/api/?name=Roberto+Oliveira&background=f59e0b&color=fff&size=100",
      rating: 5,
      text: "Site institucional impecável com painel de administração super fácil. Agora eu mesmo atualizo os projetos sem depender de ninguém. Excelente investimento!",
      results: ["Site responsivo", "Autonomia total", "Design moderno"],
      service: "Site Institucional"
    },
    {
      id: 4,
      name: "Ana Paula Costa",
      role: "Diretora - Escola Criativa",
      image: "https://ui-avatars.com/api/?name=Ana+Costa&background=8b5cf6&color=fff&size=100",
      rating: 5,
      text: "A manutenção mensal salvou nosso sistema várias vezes. Sempre atualizados e seguros. Vale cada centavo!",
      results: ["100% uptime", "Zero problemas", "Suporte rápido"],
      service: "Manutenção"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <div className="testimonials-badge">
            <span className="badge-icon" aria-hidden>⭐</span>
            <span className="badge-text">Depoimentos</span>
          </div>

          <h2 className="testimonials-title">
            O Que Nossos <span className="title-highlight">Clientes Dizem</span>
          </h2>

          <p className="testimonials-description">
            Resultados reais de quem confiou no nosso trabalho
          </p>
        </div>

        <div className="testimonial-main-card">
          <div className="testimonial-grid">
            <div className="client-info">
              <div className="client-image-wrapper">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="client-image"
                />
                <div className="verified-badge" aria-hidden>
                  <i className="bi bi-patch-check-fill"></i>
                </div>
              </div>

              <h4 className="client-name">{currentTestimonial.name}</h4>
              <p className="client-role">{currentTestimonial.role}</p>

              <div className="rating" aria-hidden>
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <i key={i} className="bi bi-star-fill"></i>
                ))}
              </div>

              <div className="service-tag">
                {currentTestimonial.service}
              </div>
            </div>

            <div
              className="testimonial-content"
              role="region"
              aria-live="polite"
              aria-label={`Depoimento de ${currentTestimonial.name}`}
            >
              <i className="bi bi-quote quote-icon" aria-hidden></i>

              <p className="testimonial-text">
                {currentTestimonial.text}
              </p>

              <div className="results-grid">
                {currentTestimonial.results.map((result, index) => (
                  <div key={index} className="result-item">
                    <i className="bi bi-check-circle-fill" aria-hidden></i>
                    <span>{result}</span>
                  </div>
                ))}
              </div>

              <div className="testimonial-nav">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  className="nav-button"
                  aria-label="Anterior"
                >
                  <i className="bi bi-arrow-left" aria-hidden></i>
                </button>

                <div className="nav-dots" role="tablist" aria-label="Navegação de depoimentos">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
                      aria-label={`Ir para depoimento ${index + 1}`}
                      aria-pressed={index === activeIndex}
                      role="tab"
                    >
                      <span className="visually-hidden">Depoimento {index + 1}</span>
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={nextTestimonial}
                  className="nav-button"
                  aria-label="Próximo"
                >
                  <i className="bi bi-arrow-right" aria-hidden></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="trust-indicators">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon" aria-hidden>
                <i className="bi bi-trophy-fill"></i>
              </div>
              <div className="trust-number">50+</div>
              <div className="trust-label">Projetos Entregues</div>
            </div>

            <div className="trust-item">
              <div className="trust-icon" aria-hidden>
                <i className="bi bi-star-fill"></i>
              </div>
              <div className="trust-number">4.9/5</div>
              <div className="trust-label">Avaliação Média</div>
            </div>

            <div className="trust-item">
              <div className="trust-icon" aria-hidden>
                <i className="bi bi-people-fill"></i>
              </div>
              <div className="trust-number">98%</div>
              <div className="trust-label">Clientes Satisfeitos</div>
            </div>

            <div className="trust-item">
              <div className="trust-icon" aria-hidden>
                <i className="bi bi-clock-history"></i>
              </div>
              <div className="trust-number">3 anos</div>
              <div className="trust-label">No Mercado</div>
            </div>
          </div>
        </div>

        <div className="google-reviews-cta">
          <div className="google-card">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google logo"
              className="google-logo"
            />
            <div className="google-content">
              <h4>Veja mais avaliações no Google</h4>
              <div className="google-rating">
                <div className="stars" aria-hidden>
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <span className="rating-text">5.0 estrelas (24 avaliações)</span>
              </div>
            </div>
            <a
              href="https://g.page/r/SEU_LINK_GOOGLE_REVIEWS"
              target="_blank"
              rel="noopener noreferrer"
              className="google-button"
            >
              Ver Avaliações
              <i className="bi bi-arrow-right" aria-hidden></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;