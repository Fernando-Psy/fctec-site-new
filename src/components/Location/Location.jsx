import { Container } from 'react-bootstrap';

const Location = () => {
  return (
    <section id="location" className="py-5">
      <Container>
        <h2 className="mb-4 fw-bold">Localização</h2>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.123456789!2d-43.4123456!3d-22.754321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9999999999999999%3A0x9999999999999999!2sRua%20Jo%C3%A3o%20Fernandes%20Neto%2C%201166%20-%20Centro%2C%20Belford%20Roxo%20-%20RJ%2C%2026100-000%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1601234567890!5m2!1spt-BR!2sbr"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização FCTEC"
            className="rounded shadow-sm"
          />
        </div>
      </Container>
    </section>
  );
};

export default Location;