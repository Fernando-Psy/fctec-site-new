import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: "" });

    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Por favor, preencha todos os campos obrigatórios.",
      });
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Por favor, insira um email válido.",
      });
      return;
    }

    try {
      // Montar mensagem para WhatsApp
      const whatsappMessage =
        `📨 *Nova Mensagem de Contato*\n\n` +
        `👤 *Nome:* ${formData.name}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `📱 *Telefone:* ${formData.phone || "Não informado"}\n` +
        `🏢 *Empresa:* ${formData.company || "Não informada"}\n\n` +
        `💬 *Mensagem:*\n${formData.message}`;

      const whatsappURL = `https://wa.me/5521968810478?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      // Abrir WhatsApp
      window.open(whatsappURL, "_blank", "noopener,noreferrer");

      setStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Redirecionando para o WhatsApp! Complete o envio por lá.",
      });

      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });

      // Limpar mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false, message: "" }));
      }, 5000);
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Não foi possível abrir o WhatsApp. Tente novamente.",
      });
    }
  };

  return (
    <section id="contato" className="contact-form-section">
      <div className="contact-container">
        <div className="contact-grid">
          {/* Info Column */}
          <div className="contact-info">
            <div className="info-header">
              <div className="section-badge">
                <span className="badge-dot"></span>
                <span className="badge-text">Entre em Contato</span>
              </div>
              <h2 className="contact-title">
                Vamos Conversar Sobre Seu{" "}
                <span className="title-highlight">Projeto</span>
              </h2>
              <p className="contact-description">
                Preencha o formulário ao lado ou entre em contato diretamente
                pelos nossos canais. Estamos prontos para entender suas
                necessidades e apresentar as melhores soluções.
              </p>
            </div>

            <div className="contact-methods">
              <a
                href="https://wa.me/5521968810478?text=Olá, gostaria de conversar sobre soluções digitais."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method"
              >
                <div className="method-icon whatsapp">💬</div>
                <div className="method-content">
                  <h3 className="method-title">WhatsApp</h3>
                  <p className="method-text">(21) 96881-0478</p>
                </div>
              </a>

              <div className="contact-method">
                <div className="method-icon email">✉️</div>
                <div className="method-content">
                  <h3 className="method-title">Email</h3>
                  <p className="method-text">fcbj.dev@gmail.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon location">📍</div>
                <div className="method-content">
                  <h3 className="method-title">Localização</h3>
                  <p className="method-text">Belford Roxo, RJ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Nome Completo <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company" className="form-label">
                  Empresa / Negócio
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Mensagem <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Conte-nos sobre seu projeto ou dúvida..."
                  rows="5"
                  required
                />
              </div>

              {/* Status Messages */}
              {status.success && (
                <div className="alert alert-success">
                  <span className="alert-icon">✓</span>
                  {status.message}
                </div>
              )}

              {status.error && (
                <div className="alert alert-error">
                  <span className="alert-icon">✕</span>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="submit-button"
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <>
                    <span className="spinner"></span>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <span className="button-arrow">→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="contact-bg-element contact-bg-1"></div>
      <div className="contact-bg-element contact-bg-2"></div>
    </section>
  );
};

export default ContactForm;
