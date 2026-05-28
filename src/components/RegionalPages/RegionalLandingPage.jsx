import { Link, Navigate, useLocation } from 'react-router-dom';
import { regionalPagesBySlug } from './regionalPages';
import './RegionalLandingPage.css';

const serviceHighlights = [
  'Criação de sites institucionais com foco em conversão',
  'Sistemas web sob medida para organizar processos',
  'Google Meu Negócio e estrutura de presença local',
  'Manutenção, evolução e suporte técnico continuado',
];

const RegionalLandingPage = () => {
  const location = useLocation();
  const citySlug = location.pathname.replace(/^\/+/, '');
  const page = regionalPagesBySlug[citySlug];

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="regional-page-shell">
      <section className="regional-hero">
        <div className="regional-container">
          <div className="regional-eyebrow">
            <span className="regional-eyebrow-dot"></span>
            <span>Base em Belford Roxo, atendimento em {page.regionLabel}</span>
          </div>

          <h1 className="regional-title">
            Desenvolvimento Web em <span>{page.city}</span>
          </h1>

          <p className="regional-description">{page.intro}</p>

          <div className="regional-cta-row">
            <a
              className="regional-primary-cta"
              href="https://wa.me/5521968810478?text=Ola%2C%20quero%20entender%20um%20projeto%20de%20desenvolvimento%20web."
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar sobre um projeto
            </a>
            <Link className="regional-secondary-cta" to="/#products">
              Ver serviços
            </Link>
          </div>
        </div>
      </section>

      <section className="regional-section">
        <div className="regional-container regional-grid">
          <article className="regional-card">
            <h2>Onde costumamos gerar mais valor em {page.city}</h2>
            <ul className="regional-list">
              {page.opportunities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="regional-card">
            <h2>Dores comuns que resolvemos</h2>
            <ul className="regional-list">
              {page.painPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="regional-section regional-section-alt">
        <div className="regional-container">
          <div className="regional-copy-block">
            <h2>Serviços para empresas de {page.city}</h2>
            <p>
              A FCBJ desenvolve projetos para empresas que precisam melhorar a
              presença digital, organizar a operação e criar uma base técnica
              capaz de sustentar crescimento. Nossa sede fica em Belford Roxo,
              com atendimento remoto e estrutura para atuar em cidades do Rio de
              Janeiro e em todo o Brasil.
            </p>
          </div>

          <div className="regional-service-grid">
            {serviceHighlights.map((item) => (
              <div key={item} className="regional-service-card">
                <span className="regional-service-icon">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="regional-section">
        <div className="regional-container regional-bottom-card">
          <h2>Atendimento em {page.city} com base local em Belford Roxo</h2>
          <p>
            Isso nos permite combinar conhecimento de mercado no Rio de Janeiro
            com execução estruturada para projetos regionais e nacionais. Se a
            sua empresa precisa de um site novo, uma reestruturação digital ou
            um sistema web sob medida, podemos desenhar a solução com foco em
            resultado e evolução contínua.
          </p>

          <div className="regional-link-row">
            <Link to="/" className="regional-inline-link">
              Voltar para a página inicial
            </Link>
            <Link to="/blog" className="regional-inline-link">
              Ler conteúdos do blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegionalLandingPage;
