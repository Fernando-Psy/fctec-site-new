import { useState, lazy, Suspense } from "react";

const AppointmentForm = lazy(() => import("./AppointmentForm"));

/**
 * Botão flutuante que abre o modal de agendamento.
 * Adicione <AppointmentButton /> no App.jsx ao lado do WhatsAppFloat.
 */
const AppointmentButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Agendar reunião"
        style={{
          position: "fixed",
          bottom: "100px",
          right: "24px",
          zIndex: 1000,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #4e83af 0%, #3a5f7d 100%)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(78, 131, 175, 0.45)",
          transition: "transform 0.2s, box-shadow 0.2s",
          fontSize: "1.5rem",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
          e.currentTarget.style.boxShadow = "0 8px 24px rgba(78, 131, 175, 0.55)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(78, 131, 175, 0.45)";
        }}
      >
        📅
      </button>

      {open && (
        <Suspense fallback={null}>
          <AppointmentForm onClose={() => setOpen(false)} />
        </Suspense>
      )}
    </>
  );
};

export default AppointmentButton;
