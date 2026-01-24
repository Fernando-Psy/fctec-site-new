const HeroImproved = () => {
  const stats = [
    { icon: "⚡", value: "10+", label: "Anos de Experiência" },
    { icon: "✓", value: "50+", label: "Projetos Concluídos" },
    { icon: "🏆", value: "98%", label: "Taxa de Sucesso" },
  ];

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Python", icon: "🐍" },
    { name: "Node.js", icon: "🟢" },
    { name: "AWS", icon: "☁️" },
  ];

  return (
    <section
      style={{
        padding: "5rem 2rem 4rem",
        background:
          "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Coluna de Conteúdo */}
          <div>
            {/* Badge Institucional */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(37, 99, 235, 0.1)",
                border: "1px solid rgba(37, 99, 235, 0.2)",
                padding: "0.5rem 1rem",
                borderRadius: "50px",
                marginBottom: "1.5rem",
                fontSize: "0.875rem",
                fontWeight: "600",
                color: "#4e83af",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  background: "#4e83af",
                  borderRadius: "50%",
                }}
              />
              <span>Desenvolvimento Web Profissional</span>
            </div>

            {/* Título Institucional */}
            <h1
              style={{
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                fontWeight: "800",
                lineHeight: "1.1",
                color: "#0f172a",
                marginBottom: "1.5rem",
                letterSpacing: "-0.03em",
              }}
            >
              Soluções Digitais que{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  position: "relative",
                }}
              >
                Impulsionam Negócios
              </span>
            </h1>

            {/* Subtítulo com Proposta de Valor */}
            <p
              style={{
                fontSize: "1.25rem",
                lineHeight: "1.7",
                color: "#475569",
                marginBottom: "2.5rem",
                fontWeight: "400",
              }}
            >
              Desenvolvemos sistemas web, sites institucionais e plataformas
              digitais com tecnologias modernas e foco em qualidade, segurança e
              performance.
            </p>

            {/* Tech Stack */}
            <div
              style={{
                background: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "1.5rem",
                marginBottom: "2.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#64748b",
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Tecnologias que Utilizamos
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "1rem",
                }}
              >
                {techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.75rem",
                      background: "#f8fafc",
                      borderRadius: "8px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "#ecf5fa";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "#f8fafc";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <span style={{ fontSize: "1.75rem" }}>{tech.icon}</span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        color: "#334155",
                      }}
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs Institucionais */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginBottom: "2.5rem",
              }}
            >
              {/* CTA Primário */}
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/5521968810478?text=Olá, gostaria de conversar sobre soluções digitais.",
                    "_blank"
                  )
                }
                style={{
                  background:
                    "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                  border: "none",
                  padding: "1.125rem 2rem",
                  borderRadius: "10px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  boxShadow: "0 8px 20px rgba(37, 99, 235, 0.3)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  color: "white",
                  cursor: "pointer",
                  width: "100%",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 28px rgba(37, 99, 235, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(37, 99, 235, 0.3)";
                }}
              >
                <span>💬</span>
                <span>Falar com Nossa Equipe</span>
              </button>

              {/* CTA Secundário */}
              <button
                onClick={() =>
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  background: "white",
                  border: "2px solid #e2e8f0",
                  color: "#4e83af",
                  padding: "1rem 2rem",
                  borderRadius: "10px",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  boxShadow: "0 2px 8px rgba(15, 23, 42, 0.06)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  cursor: "pointer",
                  width: "100%",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "#4e83af";
                  e.currentTarget.style.background = "#ecf5fa";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "#e2e8f0";
                  e.currentTarget.style.background = "white";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span>Conhecer Nossos Serviços</span>
                <span>↓</span>
              </button>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
                padding: "1.5rem",
                background: "white",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.05)",
              }}
            >
              {stats.map((stat, idx) => (
                <div key={idx} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>
                    {stat.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      color: "#4e83af",
                      lineHeight: "1",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#64748b",
                      fontWeight: "600",
                      lineHeight: "1.3",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna de Imagem */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(15, 23, 42, 0.12)",
                border: "1px solid #e2e8f0",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                alt="Desenvolvimento de software"
                loading="eager"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />

              {/* Overlay de destaque */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "1.5rem",
                  right: "1.5rem",
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                  padding: "1.25rem",
                  borderRadius: "12px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "linear-gradient(135deg, #f97316, #ea580c)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                    }}
                  >
                    🚀
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: "700",
                        color: "#0f172a",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Código Limpo & Escalável
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#64748b",
                        lineHeight: "1.4",
                      }}
                    >
                      Seguimos as melhores práticas da engenharia de software
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImproved;
