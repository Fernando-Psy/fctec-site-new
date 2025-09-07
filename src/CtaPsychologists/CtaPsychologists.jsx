import { Container, Button } from 'react-bootstrap';

function CtaPsychologists() {
  return (
    <section id="cta" className="py-5">
      <Container>
        <div className="service-card p-5 text-center">
          <h3 className="fw-bold">Você é psicólogo e quer otimizar sua clínica?</h3>
          <p className="text-muted mb-4">
            Teste grátis nossa plataforma e ganhe tempo real para focar no que importa: seus pacientes.
          </p>
          <Button className="botao-produto" href="https://forms.gle/psi-tech">
            Quero testar grátis
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default CtaPsychologists;