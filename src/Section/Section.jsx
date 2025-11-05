 <section style={{
        background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)',
        borderRadius: '16px',
        padding: '3rem',
        marginBottom: '2rem',
        color: 'white'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {[
            { value: '50+', label: 'Projetos Entregues' },
            { value: '98%', label: 'Satisfação dos Clientes' },
            { value: '15+', label: 'Tecnologias Dominadas' },
            { value: '24/7', label: 'Suporte Disponível' }
          ].map((stat, idx) => (
            <div key={idx}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                marginBottom: '0.5rem'
              }}>{stat.value}</div>
              <div style={{
                fontSize: '0.95rem',
                opacity: '0.9',
                fontWeight: '500'
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>