import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getLandingPage, createLandingLead } from '../../services/api';
import SEO from '../SEO/SEO';
import './DynamicLandingPage.css';

// ── Mini formulário de lead embutido na landing ───────────────────────────────
const LandingLeadForm = ({ slug, whatsapp, primaryColor }) => {
  const [form, setForm] = useState({ nome: '', telefone: '', email: '', servico_interesse: '' });
  const [step, setStep] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStep('loading');
    const result = await createLandingLead(slug, form);
    if (result.success) {
      setStep('success');
    } else {
      // Fallback: abre WhatsApp
      if (whatsapp) {
        const msg =
          `Olá! Vim pelo site e tenho interesse.\n` +
          `Nome: ${form.nome}\n` +
          `Telefone: ${form.telefone}` +
          (form.servico_interesse ? `\nServiço: ${form.servico_interesse}` : '');
        window.open(`https://wa.me/${whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
      }
      setStep('success');
    }
  };

  if (step === 'success') {
    return (
      <div className="dlp-form-success">
        <div className="dlp-form-success-icon">✓</div>
        <h3>Recebemos seu contato!</h3>
        <p>Em breve nossa equipe entrará em contato.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="dlp-form">
      <div className="dlp-form-row">
        <div className="dlp-form-field">
          <label>Nome *</label>
          <input
            type="text"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            placeholder="Seu nome completo"
            required
          />
        </div>
        <div className="dlp-form-field">
          <label>WhatsApp *</label>
          <input
            type="tel"
            value={form.telefone}
            onChange={(e) => setForm({ ...form, telefone: e.target.value })}
            placeholder="(21) 98888-8888"
            required
          />
        </div>
      </div>

      <div className="dlp-form-row">
        <div className="dlp-form-field">
          <label>E-mail</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="seu@email.com"
          />
        </div>
        <div className="dlp-form-field">
          <label>Serviço de Interesse</label>
          <input
            type="text"
            value={form.servico_interesse}
            onChange={(e) => setForm({ ...form, servico_interesse: e.target.value })}
            placeholder="Ex: Site, App, Marketing..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="dlp-form-btn"
        disabled={step === 'loading'}
        style={{ background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}cc 100%)` }}
      >
        {step === 'loading' ? 'Enviando...' : 'Quero ser Contactado'}
      </button>

      <p className="dlp-form-privacy">🔒 Seus dados não são compartilhados com terceiros.</p>
    </form>
  );
};

// ── Card de serviço/oferta ────────────────────────────────────────────────────
const ItemCard = ({ titulo, descricao, badge, imagem_url }) => (
  <div className="dlp-card">
    {imagem_url && <img src={imagem_url} alt={titulo} className="dlp-card-img" loading="lazy" />}
    {badge && <span className="dlp-card-badge">{badge}</span>}
    <h3 className="dlp-card-title">{titulo}</h3>
    {descricao && <p className="dlp-card-desc">{descricao}</p>}
  </div>
);

// ── Componente Principal ──────────────────────────────────────────────────────
const DynamicLandingPage = () => {
  const { slug } = useParams();
  const [landing, setLanding] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ready | notfound | error

  useEffect(() => {
    getLandingPage(slug).then((result) => {
      if (result.success) {
        setLanding(result.data);
        setStatus('ready');
      } else if (result.status === 404) {
        setStatus('notfound');
      } else {
        setStatus('error');
      }
    });
  }, [slug]);

  if (status === 'loading') {
    return (
      <div className="dlp-loading">
        <div className="dlp-spinner" />
        <p>Carregando...</p>
      </div>
    );
  }

  if (status === 'notfound') {
    return (
      <div className="dlp-error-page">
        <h1>404</h1>
        <p>Esta página não foi encontrada.</p>
        <a href="/">Voltar ao início</a>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="dlp-error-page">
        <h1>Ops!</h1>
        <p>Não foi possível carregar esta página. Tente novamente.</p>
        <a href="/">Voltar ao início</a>
      </div>
    );
  }

  const primary = landing.primary_color || '#1e40af';
  const secondary = landing.secondary_color || '#93c5fd';
  const whatsappNumber = (landing.whatsapp || '').replace(/\D/g, '');

  return (
    <>
      <SEO
        title={landing.seo_title || landing.company_name}
        description={landing.seo_description || ''}
      />

      <div className="dlp-root" style={{ '--dlp-primary': primary, '--dlp-secondary': secondary }}>

        {/* ── HERO ── */}
        <section className="dlp-hero" style={{ background: `linear-gradient(135deg, ${primary} 0%, ${primary}99 100%)` }}>
          <div className="dlp-container">
            {landing.logo_url && (
              <img src={landing.logo_url} alt={landing.company_name} className="dlp-logo" />
            )}
            <h1 className="dlp-hero-title">{landing.hero_title || landing.company_name}</h1>
            {landing.hero_subtitle && (
              <p className="dlp-hero-subtitle">{landing.hero_subtitle}</p>
            )}
            <div className="dlp-hero-ctas">
              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dlp-btn dlp-btn-outline"
                >
                  💬 Falar pelo WhatsApp
                </a>
              )}
              <a href="#contato" className="dlp-btn dlp-btn-white">
                {landing.cta_text || 'Quero uma Proposta'}
              </a>
            </div>
          </div>
          {landing.hero_image_url && (
            <img src={landing.hero_image_url} alt="hero" className="dlp-hero-img" />
          )}
        </section>

        {/* ── SOBRE ── */}
        {(landing.about_text || landing.about_title) && (
          <section className="dlp-about">
            <div className="dlp-container dlp-about-grid">
              <div>
                <h2 className="dlp-section-title" style={{ color: primary }}>
                  {landing.about_title || 'Sobre nós'}
                </h2>
                <p className="dlp-about-text">{landing.about_text}</p>
              </div>
              {landing.about_image_url && (
                <img src={landing.about_image_url} alt="sobre" className="dlp-about-img" />
              )}
            </div>
          </section>
        )}

        {/* ── SERVIÇOS ── */}
        {landing.services?.length > 0 && (
          <section className="dlp-section" style={{ background: '#f8fafc' }}>
            <div className="dlp-container">
              <h2 className="dlp-section-title" style={{ color: primary }}>Serviços</h2>
              <div className="dlp-cards-grid">
                {landing.services.map((s, i) => (
                  <ItemCard key={i} {...s} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── OFERTAS ── */}
        {landing.offers?.length > 0 && (
          <section className="dlp-section">
            <div className="dlp-container">
              <h2 className="dlp-section-title" style={{ color: primary }}>Ofertas Especiais</h2>
              <div className="dlp-cards-grid">
                {landing.offers.map((o, i) => (
                  <ItemCard key={i} {...o} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── FORMULÁRIO DE CONTATO ── */}
        <section id="contato" className="dlp-contact" style={{ background: `linear-gradient(135deg, ${primary}11 0%, ${secondary}22 100%)` }}>
          <div className="dlp-container dlp-contact-inner">
            <div className="dlp-contact-text">
              <h2 className="dlp-section-title" style={{ color: primary }}>Entre em Contato</h2>
              <p>Preencha o formulário e entraremos em contato em breve com uma proposta personalizada.</p>
              {landing.email && <p>📧 {landing.email}</p>}
              {landing.phone && <p>📞 {landing.phone}</p>}
              {landing.address && <p>📍 {landing.address}</p>}
            </div>
            <LandingLeadForm slug={slug} whatsapp={landing.whatsapp} primaryColor={primary} />
          </div>
        </section>

        {/* ── FOOTER SIMPLES ── */}
        <footer className="dlp-footer" style={{ background: primary }}>
          <p>© {new Date().getFullYear()} {landing.company_name}. Todos os direitos reservados.</p>
        </footer>

        {/* ── WHATSAPP FIXO ── */}
        {whatsappNumber && (
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="dlp-whatsapp-float"
            style={{ background: '#25d366' }}
            aria-label="WhatsApp"
          >
            💬
          </a>
        )}
      </div>
    </>
  );
};

export default DynamicLandingPage;
