import { useState, useEffect } from "react";
import { getServices, createAppointment } from "../../services/api";
import "./AppointmentForm.css";

const FALLBACK_SERVICES = [
  "Site Institucional",
  "E-commerce",
  "Landing Page",
  "Sistema Web",
  "Aplicativo Mobile",
  "Design Gráfico",
  "Marketing Digital",
  "Consultoria",
  "Outro",
];

const AppointmentForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    servico_interesse: "",
    data_preferida: "",
    horario_preferido: "",
    observacoes: "",
  });
  const [services, setServices] = useState(FALLBACK_SERVICES);
  const [step, setStep] = useState("form"); // form | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    getServices().then((result) => {
      if (result.success && Array.isArray(result.data) && result.data.length > 0) {
        setServices(result.data.map((s) => s.nome));
      }
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStep("loading");

    const dataHora = `${formData.data_preferida}T${formData.horario_preferido || "09:00"}:00`;

    const result = await createAppointment({
      nome: formData.nome,
      telefone: formData.telefone,
      servico_interesse: formData.servico_interesse || undefined,
      data_preferida: dataHora,
      observacoes: formData.observacoes || undefined,
    });

    if (result.success) {
      setStep("success");
    } else {
      // Fallback: abre WhatsApp com os dados do agendamento
      const msg =
        `📅 *Solicitação de Agendamento*\n\n` +
        `👤 *Nome:* ${formData.nome}\n` +
        `📱 *Telefone:* ${formData.telefone}\n` +
        `💼 *Serviço:* ${formData.servico_interesse || "Não informado"}\n` +
        `📅 *Data:* ${formData.data_preferida}\n` +
        `⏰ *Horário:* ${formData.horario_preferido || "A combinar"}\n` +
        (formData.observacoes ? `\n💬 *Obs:* ${formData.observacoes}` : "");

      window.open(
        `https://wa.me/5521968810478?text=${encodeURIComponent(msg)}`,
        "_blank",
        "noopener,noreferrer"
      );
      setStep("success");
    }
  };

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <div className="appt-overlay" onClick={(e) => e.target === e.currentTarget && onClose?.()}>
      <div className="appt-modal">
        {/* Header */}
        <div className="appt-header">
          <div>
            <h2 className="appt-title">📅 Agendar Reunião</h2>
            <p className="appt-subtitle">Escolha a data e horario de preferência</p>
          </div>
          {onClose && (
            <button className="appt-close" onClick={onClose} aria-label="Fechar">
              ×
            </button>
          )}
        </div>

        {/* Form */}
        {step === "form" && (
          <form onSubmit={handleSubmit} className="appt-form">
            <div className="appt-grid">
              <div className="appt-field">
                <label>Seu Nome *</label>
                <input
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="João Silva"
                  required
                />
              </div>

              <div className="appt-field">
                <label>WhatsApp *</label>
                <input
                  name="telefone"
                  type="tel"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(21) 98888-8888"
                  required
                />
              </div>

              <div className="appt-field appt-full">
                <label>Serviço de Interesse</label>
                <select
                  name="servico_interesse"
                  value={formData.servico_interesse}
                  onChange={handleChange}
                >
                  <option value="">Selecione (opcional)...</option>
                  {services.map((s, i) => (
                    <option key={i} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="appt-field">
                <label>Data Preferida *</label>
                <input
                  name="data_preferida"
                  type="date"
                  min={todayStr}
                  value={formData.data_preferida}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="appt-field">
                <label>Horário Preferido</label>
                <input
                  name="horario_preferido"
                  type="time"
                  value={formData.horario_preferido}
                  onChange={handleChange}
                />
              </div>

              <div className="appt-field appt-full">
                <label>Observações</label>
                <textarea
                  name="observacoes"
                  value={formData.observacoes}
                  onChange={handleChange}
                  placeholder="Conte um pouco sobre seu projeto..."
                  rows="3"
                />
              </div>
            </div>

            <button type="submit" className="appt-submit">
              Solicitar Agendamento
            </button>

            <p className="appt-privacy">
              🔒 Seus dados estão seguros. Confirmaremos por WhatsApp.
            </p>
          </form>
        )}

        {/* Loading */}
        {step === "loading" && (
          <div className="appt-state">
            <div className="appt-spinner" />
            <p>Enviando solicitação...</p>
          </div>
        )}

        {/* Success */}
        {step === "success" && (
          <div className="appt-state">
            <div className="appt-success-icon">✓</div>
            <h3>Agendamento Solicitado!</h3>
            <p>
              Recebemos sua solicitação. Nossa equipe entrará em contato pelo WhatsApp para confirmar a data e horário.
            </p>
            <button className="appt-submit" onClick={onClose} style={{ marginTop: "1.5rem" }}>
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentForm;
