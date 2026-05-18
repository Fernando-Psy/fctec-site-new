import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import { servicesData } from './servicesData';
import { hasFirebaseConfig } from '../../lib/firebase';
import {
  fetchActiveCategories,
  fetchActiveServices,
} from '../../services/firebaseServices';
import './Services.css';

const Services = () => {
  const [categories, setCategories] = useState([]);
  const [firestoreServices, setFirestoreServices] = useState([]);
  const [useFirestore, setUseFirestore] = useState(false);

  useEffect(() => {
    if (!hasFirebaseConfig) return;

    Promise.all([fetchActiveCategories(), fetchActiveServices()])
      .then(([cats, svcs]) => {
        if (svcs.length > 0) {
          setCategories(cats);
          setFirestoreServices(svcs);
          setUseFirestore(true);
        }
      })
      .catch((err) => {
        console.warn('[Services] Firestore indisponível, usando dados estáticos.', err);
      });
  }, []);

  const header = (
    <div className="services-header">
      <div className="services-badge">
        <span className="badge-dot"></span>
        <span className="badge-text">Atuacao Tecnologica</span>
      </div>
      <h2 className="services-title">
        Solucoes Digitais Para Estruturar Sua{' '}
        <span className="title-highlight">Operacao</span>
      </h2>
      <p className="services-description">
        Conheca como atuamos em desenvolvimento, integracoes e suporte.
        Mantemos canais diretos para tirar duvidas e iniciar conversas.
      </p>
    </div>
  );

  return (
    <section id="products" className="services-section">
      <Container>
        {header}

        {useFirestore ? (
          /* ── Exibição agrupada por categoria (Firestore) ── */
          categories.length > 0 ? (
            categories.map((cat) => {
              const catServices = firestoreServices.filter(
                (s) => s.categoryId === cat.id
              );
              if (catServices.length === 0) return null;
              return (
                <div key={cat.id} className="services-category-group">
                  <h3 className="services-category-title">{cat.name}</h3>
                  {cat.description && (
                    <p className="services-category-desc">{cat.description}</p>
                  )}
                  <Row className="g-4 services-grid">
                    {catServices.map((service, index) => (
                      <Col
                        key={service.id}
                        lg={6}
                        md={6}
                        className="service-col"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <ServiceCard service={service} />
                      </Col>
                    ))}
                  </Row>
                </div>
              );
            })
          ) : (
            /* Sem categorias, lista plana */
            <Row className="g-4 services-grid">
              {firestoreServices.map((service, index) => (
                <Col
                  key={service.id}
                  lg={6}
                  md={6}
                  className="service-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ServiceCard service={service} />
                </Col>
              ))}
            </Row>
          )
        ) : (
          /* ── Fallback: dados estáticos ── */
          <Row className="g-4 services-grid">
            {servicesData.map((service, index) => (
              <Col
                key={service.id}
                lg={6}
                md={6}
                className="service-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard service={service} />
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {/* Background Decorations */}
      <div className="services-bg-element services-bg-1"></div>
      <div className="services-bg-element services-bg-2"></div>
    </section>
  );
};

export default Services;