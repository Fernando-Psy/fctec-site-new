import { useState } from "react";
import ContactModal from "../Services/ContactModal";
import { saasData } from "./saasData";

const SaasPlatforms = () => {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (platform) => {
    setSelected(platform);
    setShowModal(true);
  };

  return (
    <section
      id="plataformas-saas"
      style={{
        padding: "6rem 2rem",
        background: "linear-gradient(145deg, #050c1a 0%, #0a1830 100%)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.5rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(34, 211, 238, 0.12)",
              border: "1px solid rgba(34, 211, 238, 0.3)",
              padding: "0.5rem 1.25rem",
              borderRadius: "50px",
              marginBottom: "1.5rem",
              fontSize: "0.875rem",
              fontWeight: "600",
              color: "#67e8f9",
            }}
          >
            <span>🧩</span>
            <span>Plataformas Próprias da FCBJ</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: "800",
              color: "#e2e8f0",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Assine uma das Nossas{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22d3ee 0%, #6366f1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Plataformas SaaS
            </span>
          </h2>

          <p style={{ fontSize: "1.05rem", color: "#94a3b8", lineHeight: "1.7" }}>
            Além do desenvolvimento sob medida, a FCBJ Desenvolvimento também é
            dona e mantém plataformas prontas para uso imediato, por
            assinatura mensal — sem contratar um projeto do zero.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "1.75rem",
          }}
        >
          {saasData.map((platform) => (
            <div
              key={platform.id}
              style={{
                background: "rgba(15, 23, 42, 0.84)",
                border: "1px solid rgba(148, 163, 184, 0.2)",
                borderRadius: "18px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  background: "rgba(34, 211, 238, 0.15)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.75rem",
                  marginBottom: "1.25rem",
                }}
              >
                {platform.icon}
              </div>

              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  color: "#e2e8f0",
                  marginBottom: "0.35rem",
                }}
              >
                {platform.title}
              </h3>

              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#38bdf8",
                  fontWeight: "600",
                  marginBottom: "1rem",
                }}
              >
                {platform.tagline}
              </p>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#94a3b8",
                  lineHeight: "1.6",
                  marginBottom: "1.25rem",
                  flexGrow: 1,
                }}
              >
                {platform.description}
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem 0" }}>
                {platform.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      marginBottom: "0.5rem",
                      fontSize: "0.85rem",
                      color: "#cbd5e1",
                    }}
                  >
                    <span style={{ color: "#10b981", flexShrink: 0 }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#e2e8f0",
                  fontWeight: "600",
                  marginBottom: "1rem",
                }}
              >
                {platform.pricingNote}
              </p>

              <button
                onClick={() => openModal(platform)}
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
                  color: "white",
                  border: "none",
                  padding: "0.9rem",
                  borderRadius: "10px",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(37, 99, 235, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Quero Assinar
              </button>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <ContactModal
          show={showModal}
          onHide={() => setShowModal(false)}
          serviceName={selected.title}
          serviceId={selected.id}
          options={saasData.map((p) => ({ id: p.id, title: p.title }))}
          interestLabel="Plataforma de Interesse"
          selectedLabel="Plataforma Selecionada"
          leadOrigem="site-assinatura-saas"
        />
      )}
    </section>
  );
};

export default SaasPlatforms;
