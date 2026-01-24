import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./ContactModal.css";

const ContactModal = ({ show, onHide, serviceName, serviceId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceId: serviceId || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  // Atualizar serviceId quando serviceId prop mudar
  useEffect(() => {
    if (serviceId) {
      setFormData((prev) => ({ ...prev, serviceId }));
    }
  }, [serviceId]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório";
    } else if (
      !/^\(?[1-9]{2}\)?\s?9?\d{4}-?\d{4}$/.test(
        formData.phone.replace(/\s/g, "")
      )
    ) {
      newErrors.phone = "Telefone inválido";
    }

    if (!formData.serviceId) {
      newErrors.serviceId = "Selecione um serviço";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setShowError(false);

    try {
      // Montar mensagem para WhatsApp
      const message =
        `🎯 *Nova Solicitação de Contato*\n\n` +
        `📋 *Serviço:* ${serviceName}\n` +
        `👤 *Nome:* ${formData.name}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `📱 *Telefone:* ${formData.phone}`;

      const whatsappURL = `https://wa.me/5521968810478?text=${encodeURIComponent(
        message
      )}`;

      setIsSubmitting(false);
      setShowSuccess(true);

      // Abrir WhatsApp
      setTimeout(() => {
        window.open(whatsappURL, "_blank", "noopener,noreferrer");
      }, 500);

      // Resetar formulário e fechar modal após 3 segundos
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceId: serviceId || "",
        });
        onHide();
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      setShowError(true);
      setErrorMessage("Erro ao abrir WhatsApp. Tente novamente.");

      // Esconder erro após 5 segundos
      setTimeout(() => setShowError(false), 5000);
    }
  };

  const handleClose = () => {
    setFormData({ name: "", email: "", phone: "", serviceId: serviceId || "" });
    setErrors({});
    setShowSuccess(false);
    setShowError(false);
    onHide();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      className="contact-modal"
    >
      <Modal.Body style={{ padding: 0 }}>
        {!showSuccess ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "40% 60%",
              minHeight: "500px",
            }}
          >
            {/* Coluna Esquerda - Informações */}
            <div
              style={{
                background: "linear-gradient(135deg, #4e83af 0%, #3a5f7d 100%)",
                padding: "3rem 2rem",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "1rem",
                }}
              >
                💼
              </div>
              <h3
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  color: "white",
                }}
              >
                Vamos Conversar!
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  opacity: 0.9,
                  lineHeight: "1.6",
                  marginBottom: "2rem",
                  color: "white",
                }}
              >
                Preencha o formulário e entraremos em contato em até 2 horas
                para discutir seu projeto.
              </p>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "12px",
                  padding: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    marginBottom: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Serviço Selecionado
                </div>
                <div
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: "600",
                  }}
                >
                  {serviceName}
                </div>
              </div>

              <div
                style={{
                  marginTop: "2rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    fontSize: "0.85rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span>✓</span>
                    <span>Resposta rápida garantida</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span>✓</span>
                    <span>Consulta sem compromisso</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span>✓</span>
                    <span>Proposta personalizada</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita - Formulário */}
            <div
              style={{
                padding: "3rem 2.5rem",
                background: "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "2rem",
                }}
              >
                <h4
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "#0f172a",
                    margin: 0,
                  }}
                >
                  Seus Dados
                </h4>
                <button
                  onClick={handleClose}
                  style={{
                    background: "transparent",
                    border: "none",
                    fontSize: "1.5rem",
                    color: "#94a3b8",
                    cursor: "pointer",
                    padding: "0.5rem",
                    lineHeight: "1",
                    transition: "color 0.2s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#0f172a")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#94a3b8")}
                >
                  ×
                </button>
              </div>

              {/* Mensagem de Erro */}
              {showError && (
                <div
                  style={{
                    background: "#fee2e2",
                    border: "1px solid #ef4444",
                    borderRadius: "8px",
                    padding: "0.875rem",
                    marginBottom: "1.5rem",
                    color: "#991b1b",
                    fontSize: "0.875rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span>⚠️</span>
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Nome */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: "#475569",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Nome Completo *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="João Silva"
                    style={{
                      width: "100%",
                      padding: "0.875rem 1rem",
                      border: errors.name
                        ? "2px solid #ef4444"
                        : "2px solid #e2e8f0",
                      borderRadius: "10px",
                      fontSize: "0.95rem",
                      color: "#0f172a",
                      transition: "all 0.2s ease",
                      outline: "none",
                    }}
                    onFocus={(e) => {
                      if (!errors.name) {
                        e.target.style.borderColor = "#4e83af";
                        e.target.style.boxShadow =
                          "0 0 0 4px rgba(37, 99, 235, 0.1)";
                      }
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.name
                        ? "#ef4444"
                        : "#e2e8f0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  {errors.name && (
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#ef4444",
                        marginTop: "0.25rem",
                      }}
                    >
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: "#475569",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="joao@email.com"
                    style={{
                      width: "100%",
                      padding: "0.875rem 1rem",
                      border: errors.email
                        ? "2px solid #ef4444"
                        : "2px solid #e2e8f0",
                      borderRadius: "10px",
                      fontSize: "0.95rem",
                      color: "#0f172a",
                      transition: "all 0.2s ease",
                      outline: "none",
                    }}
                    onFocus={(e) => {
                      if (!errors.email) {
                        e.target.style.borderColor = "#4e83af";
                        e.target.style.boxShadow =
                          "0 0 0 4px rgba(37, 99, 235, 0.1)";
                      }
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.email
                        ? "#ef4444"
                        : "#e2e8f0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  {errors.email && (
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#ef4444",
                        marginTop: "0.25rem",
                      }}
                    >
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Telefone */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label
                    htmlFor="contact-phone"
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "600",
                      color: "#475569",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Telefone/WhatsApp *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(21) 98888-8888"
                    style={{
                      width: "100%",
                      padding: "0.875rem 1rem",
                      border: errors.phone
                        ? "2px solid #ef4444"
                        : "2px solid #e2e8f0",
                      borderRadius: "10px",
                      fontSize: "0.95rem",
                      color: "#0f172a",
                      transition: "all 0.2s ease",
                      outline: "none",
                    }}
                    onFocus={(e) => {
                      if (!errors.phone) {
                        e.target.style.borderColor = "#4e83af";
                        e.target.style.boxShadow =
                          "0 0 0 4px rgba(37, 99, 235, 0.1)";
                      }
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.phone
                        ? "#ef4444"
                        : "#e2e8f0";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  {errors.phone && (
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#ef4444",
                        marginTop: "0.25rem",
                      }}
                    >
                      {errors.phone}
                    </div>
                  )}
                </div>

                {/* Serviço (hidden se já definido) */}
                {!serviceId && services.length > 0 && (
                  <div style={{ marginBottom: "2rem" }}>
                    <label
                      htmlFor="contact-service"
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: "#475569",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Serviço de Interesse *
                    </label>
                    <select
                      id="contact-service"
                      name="serviceId"
                      value={formData.serviceId}
                      onChange={handleChange}
                      style={{
                        width: "100%",
                        padding: "0.875rem 1rem",
                        border: errors.serviceId
                          ? "2px solid #ef4444"
                          : "2px solid #e2e8f0",
                        borderRadius: "10px",
                        fontSize: "0.95rem",
                        color: "#0f172a",
                        transition: "all 0.2s ease",
                        outline: "none",
                        cursor: "pointer",
                        backgroundColor: "white",
                      }}
                      onFocus={(e) => {
                        if (!errors.serviceId) {
                          e.target.style.borderColor = "#4e83af";
                          e.target.style.boxShadow =
                            "0 0 0 4px rgba(37, 99, 235, 0.1)";
                        }
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.serviceId
                          ? "#ef4444"
                          : "#e2e8f0";
                        e.target.style.boxShadow = "none";
                      }}
                    >
                      <option value="">Selecione um serviço...</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.nome}
                        </option>
                      ))}
                    </select>
                    {errors.serviceId && (
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "#ef4444",
                          marginTop: "0.25rem",
                        }}
                      >
                        {errors.serviceId}
                      </div>
                    )}
                  </div>
                )}

                {/* Botão Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "1rem",
                    background: isSubmitting
                      ? "#cbd5e1"
                      : "linear-gradient(135deg, #4e83af 0%, #3a5f7d 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: isSubmitting
                      ? "none"
                      : "0 4px 12px rgba(37, 99, 235, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                  }}
                  onMouseOver={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(37, 99, 235, 0.4)";
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = isSubmitting
                      ? "none"
                      : "0 4px 12px rgba(37, 99, 235, 0.3)";
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span
                        style={{
                          display: "inline-block",
                          width: "20px",
                          height: "20px",
                          border: "3px solid rgba(255, 255, 255, 0.3)",
                          borderTop: "3px solid white",
                          borderRadius: "50%",
                          animation: "spin 1s linear infinite",
                        }}
                      />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>📲</span>
                      <span>Enviar Solicitação</span>
                    </>
                  )}
                </button>

                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#94a3b8",
                    textAlign: "center",
                    marginTop: "1rem",
                  }}
                >
                  🔒 Seus dados estão seguros e não serão compartilhados
                </p>
              </form>
            </div>
          </div>
        ) : (
          <div
            style={{
              padding: "4rem 2rem",
              textAlign: "center",
              minHeight: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
                fontSize: "3rem",
                color: "white",
              }}
            >
              ✓
            </div>
            <h3
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#0f172a",
                marginBottom: "0.75rem",
              }}
            >
              Solicitação Enviada!
            </h3>
            <p
              style={{
                fontSize: "1.05rem",
                color: "#64748b",
                lineHeight: "1.6",
                maxWidth: "400px",
              }}
            >
              Seu lead foi registrado com sucesso! Redirecionando para o
              WhatsApp...
            </p>
          </div>
        )}
      </Modal.Body>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 991px) {
          .contact-modal .modal-body > div:first-child {
            grid-template-columns: 1fr !important;
          }

          .contact-modal .modal-body > div:first-child > div:first-child {
            display: none !important;
          }
        }
      `}</style>
    </Modal>
  );
};

export default ContactModal;
