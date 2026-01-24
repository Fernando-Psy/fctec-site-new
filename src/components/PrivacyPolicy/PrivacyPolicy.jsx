import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <div className="privacy-container">
        <div className="privacy-header">
          <h1 className="privacy-title">Política de Privacidade</h1>
          <p className="privacy-updated">
            Última atualização: 24 de janeiro de 2026
          </p>
        </div>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2 className="section-title">1. Introdução</h2>
            <p>
              A <strong>FCBJ Desenvolvimento</strong> respeita a privacidade dos visitantes e clientes de
              nosso site. Esta Política de Privacidade descreve como coletamos,
              usamos, armazenamos e protegemos suas informações pessoais em
              conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº
              13.709/2018) e demais legislações aplicáveis.
            </p>
            <p>
              Ao utilizar nosso site e serviços, você concorda com a coleta e
              uso de informações de acordo com esta política.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">2. Informações que Coletamos</h2>

            <h3 className="subsection-title">
              2.1. Informações Fornecidas por Você
            </h3>
            <p>
              Coletamos informações que você nos fornece diretamente, incluindo:
            </p>
            <ul>
              <li>
                <strong>Dados de Identificação:</strong> Nome completo, e-mail,
                telefone
              </li>
              <li>
                <strong>Dados Empresariais:</strong> Nome da empresa, CNPJ
                (quando aplicável), cargo
              </li>
              <li>
                <strong>Dados de Comunicação:</strong> Mensagens enviadas
                através de formulários de contato
              </li>
              <li>
                <strong>Dados do Projeto:</strong> Informações sobre o serviço
                solicitado, orçamento, requisitos técnicos
              </li>
            </ul>

            <h3 className="subsection-title">
              2.2. Informações Coletadas Automaticamente
            </h3>
            <p>
              Quando você acessa nosso site, podemos coletar automaticamente:
            </p>
            <ul>
              <li>
                <strong>Dados de Navegação:</strong> Endereço IP, tipo de
                navegador, páginas visitadas, tempo de permanência
              </li>
              <li>
                <strong>Dados de Dispositivo:</strong> Tipo de dispositivo,
                sistema operacional, resolução de tela
              </li>
              <li>
                <strong>Cookies e Tecnologias Similares:</strong> Informações
                armazenadas através de cookies (veja seção específica)
              </li>
              <li>
                <strong>Dados de Localização:</strong> Localização geográfica
                aproximada baseada no endereço IP
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">3. Como Usamos suas Informações</h2>
            <p>
              Utilizamos as informações coletadas para as seguintes finalidades:
            </p>

            <div className="purpose-grid">
              <div className="purpose-card">
                <div className="purpose-icon">📋</div>
                <h4>Prestação de Serviços</h4>
                <p>
                  Executar contratos, desenvolver projetos e fornecer suporte
                  técnico
                </p>
              </div>

              <div className="purpose-card">
                <div className="purpose-icon">💬</div>
                <h4>Comunicação</h4>
                <p>
                  Responder a solicitações, enviar orçamentos e manter contato
                  sobre projetos
                </p>
              </div>

              <div className="purpose-card">
                <div className="purpose-icon">📊</div>
                <h4>Melhoria de Serviços</h4>
                <p>
                  Analisar o uso do site e melhorar nossos serviços e
                  experiência do usuário
                </p>
              </div>

              <div className="purpose-card">
                <div className="purpose-icon">🔒</div>
                <h4>Segurança</h4>
                <p>
                  Proteger contra fraudes, abusos e atividades não autorizadas
                </p>
              </div>

              <div className="purpose-card">
                <div className="purpose-icon">⚖️</div>
                <h4>Conformidade Legal</h4>
                <p>Cumprir obrigações legais, regulatórias e contratuais</p>
              </div>

              <div className="purpose-card">
                <div className="purpose-icon">📢</div>
                <h4>Marketing</h4>
                <p>
                  Enviar informações sobre novos serviços (com seu consentimento
                  prévio)
                </p>
              </div>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">
              4. Base Legal para Tratamento de Dados
            </h2>
            <p>
              Tratamos seus dados pessoais com base nas seguintes hipóteses
              legais da LGPD:
            </p>
            <ul>
              <li>
                <strong>Consentimento:</strong> Quando você autoriza
                expressamente o tratamento dos seus dados
              </li>
              <li>
                <strong>Execução de Contrato:</strong> Para cumprir obrigações
                contratuais ou preparar contratos
              </li>
              <li>
                <strong>Legítimo Interesse:</strong> Para melhorar nossos
                serviços e garantir segurança
              </li>
              <li>
                <strong>Cumprimento de Obrigação Legal:</strong> Quando exigido
                por lei ou regulamentação
              </li>
              <li>
                <strong>Exercício Regular de Direitos:</strong> Para proteger
                direitos em processos judiciais
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">
              5. Compartilhamento de Informações
            </h2>
            <p>
              Podemos compartilhar suas informações nas seguintes situações:
            </p>

            <h3 className="subsection-title">5.1. Prestadores de Serviços</h3>
            <p>
              Compartilhamos dados com empresas que nos auxiliam na prestação de
              serviços, como:
            </p>
            <ul>
              <li>Provedores de hospedagem e infraestrutura</li>
              <li>Serviços de e-mail e comunicação</li>
              <li>Ferramentas de análise de dados e métricas</li>
              <li>Processadores de pagamento</li>
              <li>Serviços de suporte e helpdesk</li>
            </ul>
            <p className="note">
              <strong>Importante:</strong> Todos os prestadores de serviços são
              cuidadosamente selecionados e comprometidos com a proteção de
              dados através de acordos contratuais.
            </p>

            <h3 className="subsection-title">5.2. Exigências Legais</h3>
            <p>
              Podemos divulgar informações quando exigido por lei, ordem
              judicial ou autoridade competente.
            </p>

            <h3 className="subsection-title">5.3. Proteção de Direitos</h3>
            <p>
              Compartilhamos dados quando necessário para proteger nossos
              direitos, propriedade ou segurança, bem como de nossos clientes e
              terceiros.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">
              6. Cookies e Tecnologias Similares
            </h2>
            <p>
              Utilizamos cookies e tecnologias similares para melhorar sua
              experiência em nosso site. Cookies são pequenos arquivos de texto
              armazenados em seu dispositivo.
            </p>

            <h3 className="subsection-title">
              Tipos de Cookies que Utilizamos:
            </h3>
            <ul>
              <li>
                <strong>Cookies Essenciais:</strong> Necessários para o
                funcionamento básico do site (segurança, navegação, formulários)
              </li>
              <li>
                <strong>Cookies de Desempenho:</strong> Coletam informações
                sobre como você usa o site para melhorar o desempenho
              </li>
              <li>
                <strong>Cookies Funcionais:</strong> Lembram suas preferências e
                escolhas (idioma, região, configurações)
              </li>
              <li>
                <strong>Cookies de Marketing:</strong> Rastreiam sua atividade
                para fornecer conteúdo relevante (apenas com consentimento)
              </li>
            </ul>

            <p>
              Você pode gerenciar ou desabilitar cookies através das
              configurações do seu navegador. Note que isso pode afetar a
              funcionalidade do site.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">7. Segurança dos Dados</h2>
            <p>
              Implementamos medidas técnicas e organizacionais apropriadas para
              proteger suas informações pessoais, incluindo:
            </p>
            <ul>
              <li>
                <strong>Criptografia:</strong> Uso de SSL/TLS para transmissão
                segura de dados
              </li>
              <li>
                <strong>Controle de Acesso:</strong> Acesso restrito aos dados
                apenas para funcionários autorizados
              </li>
              <li>
                <strong>Monitoramento:</strong> Monitoramento contínuo de
                sistemas para detectar vulnerabilidades
              </li>
              <li>
                <strong>Backup:</strong> Cópias de segurança regulares dos dados
              </li>
              <li>
                <strong>Atualizações:</strong> Manutenção e atualização
                constante de sistemas de segurança
              </li>
              <li>
                <strong>Treinamento:</strong> Capacitação regular da equipe
                sobre proteção de dados
              </li>
            </ul>
            <p className="note">
              <strong>Importante:</strong> Apesar de todos os esforços, nenhum
              método de transmissão ou armazenamento eletrônico é 100% seguro.
              Não podemos garantir segurança absoluta.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">8. Retenção de Dados</h2>
            <p>
              Mantemos seus dados pessoais apenas pelo tempo necessário para
              cumprir as finalidades descritas nesta política, salvo se um
              período maior for exigido ou permitido por lei.
            </p>

            <h3 className="subsection-title">Períodos de Retenção:</h3>
            <ul>
              <li>
                <strong>Dados de Contato:</strong> Até que você solicite a
                exclusão ou 5 anos de inatividade
              </li>
              <li>
                <strong>Dados Contratuais:</strong> Pelo prazo do contrato + 5
                anos (obrigações legais)
              </li>
              <li>
                <strong>Dados Fiscais:</strong> 5 anos (conforme legislação
                tributária)
              </li>
              <li>
                <strong>Dados de Marketing:</strong> Até que você revogue o
                consentimento
              </li>
              <li>
                <strong>Logs de Acesso:</strong> 6 meses (conforme Marco Civil
                da Internet)
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">9. Seus Direitos (LGPD)</h2>
            <p>
              De acordo com a LGPD, você possui os seguintes direitos em relação
              aos seus dados pessoais:
            </p>

            <div className="rights-grid">
              <div className="right-item">
                <span className="right-icon">✓</span>
                <div>
                  <strong>Confirmação e Acesso:</strong> Saber se tratamos seus
                  dados e acessá-los
                </div>
              </div>

              <div className="right-item">
                <span className="right-icon">✓</span>
                <div>
                  <strong>Correção:</strong> Solicitar a correção de dados
                  incompletos, inexatos ou desatualizados
                </div>
              </div>

              <div className="right-item">
                <span className="right-icon">✓</span>
                <div>
                  <strong>Anonimização, Bloqueio ou Eliminação:</strong> De
                  dados desnecessários, excessivos ou tratados em
                  desconformidade
                </div>
              </div>

              <div className="right-item">
                <span className="right-icon">✓</span>
                <div>
                  <strong>Portabilidade:</strong> Receber seus dados em formato
                  estruturado e interoperável
                </div>
              </div>

              <div className="right-item">
                <span className="right-icon">✓</span>
                <div>
                  <strong>Eliminação:</strong> Solicitar a exclusão de dados
                  tratados com seu consentimento
                </div>
              </div>

              <div className="right-item">
                <span className="right-icon">✓</span>
                <div>
                  <strong>Informação:</strong> Sobre entidades com as quais
                  compartilhamos seus dados
                </div>
              </div>

              <div className="right-item">
                <span className="right-icon">✓</span>
                <div>
                  <strong>Revogação do Consentimento:</strong> Retirar
                  consentimento a qualquer momento
                </div>
              </div>

              <div className="right-item">
                <span className="right-icon">✓</span>
                <div>
                  <strong>Oposição:</strong> Se opor ao tratamento realizado sem
                  seu consentimento
                </div>
              </div>
            </div>

            <p className="exercise-rights">
              Para exercer seus direitos, entre em contato através do e-mail:
              <a href="mailto:fcbj.dev@gmail.com" className="contact-link">
                {" "}
                fcbj.dev@gmail.com
              </a>
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">10. Menores de Idade</h2>
            <p>
              Nossos serviços não são direcionados a menores de 18 anos. Não
              coletamos intencionalmente informações pessoais de menores sem o
              consentimento dos pais ou responsáveis legais.
            </p>
            <p>
              Se tomarmos conhecimento de que coletamos dados de um menor sem
              autorização apropriada, tomaremos medidas para excluir essas
              informações o mais rápido possível.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">
              11. Transferência Internacional de Dados
            </h2>
            <p>
              Seus dados são armazenados e processados principalmente no Brasil.
              Em alguns casos, podemos transferir dados para outros países, como
              quando utilizamos serviços de provedores internacionais (ex:
              hospedagem em nuvem).
            </p>
            <p>
              Garantimos que tais transferências são realizadas em conformidade
              com a LGPD e com medidas de segurança adequadas, como:
            </p>
            <ul>
              <li>Cláusulas contratuais padrão aprovadas pela ANPD</li>
              <li>Certificações de privacidade reconhecidas</li>
              <li>Garantias específicas sobre proteção de dados</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">12. Alterações nesta Política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade periodicamente para
              refletir mudanças em nossas práticas, serviços ou requisitos
              legais. Recomendamos que você revise esta página regularmente para
              se manter informado.
            </p>
            <p>Alterações significativas serão comunicadas através de:</p>
            <ul>
              <li>Aviso destacado em nosso site</li>
              <li>E-mail para usuários cadastrados</li>
              <li>
                Atualização da data "Última atualização" no topo desta página
              </li>
            </ul>
            <p>
              O uso continuado de nossos serviços após as alterações constitui
              aceitação da política revisada.
            </p>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">
              13. Encarregado de Proteção de Dados (DPO)
            </h2>
            <p>
              Nomeamos um Encarregado de Proteção de Dados (Data Protection
              Officer - DPO) para atuar como canal de comunicação entre você, a
              empresa e a Autoridade Nacional de Proteção de Dados (ANPD).
            </p>
            <div className="dpo-info">
              <p>
                <strong>Contato do Encarregado:</strong>
              </p>
              <ul className="contact-list">
                <li>
                  <strong>E-mail:</strong>{" "}
                  <a href="mailto:fcbj.dev@gmail.com">fcbj.dev@gmail.com</a>
                </li>
                <li>
                  <strong>Telefone:</strong> (21) 96881-0478
                </li>
                <li>
                  <strong>Endereço:</strong> Belford Roxo, Rio de Janeiro - RJ
                </li>
              </ul>
            </div>
          </section>

          <section className="privacy-section">
            <h2 className="section-title">14. Reclamações e Recursos</h2>
            <p>
              Se você não estiver satisfeito com a forma como tratamos seus
              dados pessoais, você pode apresentar uma reclamação à:
            </p>
            <div className="anpd-info">
              <h4>Autoridade Nacional de Proteção de Dados (ANPD)</h4>
              <ul>
                <li>
                  <strong>Site:</strong>{" "}
                  <a
                    href="https://www.gov.br/anpd/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.gov.br/anpd
                  </a>
                </li>
                <li>
                  <strong>Canal de Atendimento:</strong> Através do site oficial
                  da ANPD
                </li>
              </ul>
            </div>
          </section>

          <section className="privacy-section contact-section">
            <h2 className="section-title">15. Contato</h2>
            <p>
              Para dúvidas, solicitações ou preocupações sobre esta Política de
              Privacidade ou nossas práticas de dados, entre em contato:
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <h4>E-mail</h4>
                <a href="mailto:fcbj.dev@gmail.com">fcbj.dev@gmail.com</a>
                <a href="mailto:fcbj.dev@gmail.com">
                  fcbj.dev@gmail.com
                </a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">📱</div>
                <h4>WhatsApp</h4>
                <a href="https://wa.me/5521968810478">(21) 96881-0478</a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h4>Endereço</h4>
                <p>
                  Belford Roxo
                  <br />
                  Rio de Janeiro - RJ
                  <br />
                  Brasil
                </p>
              </div>
            </div>
          </section>

          <section className="privacy-section final-note">
            <p className="disclaimer">
              <strong>Nota Final:</strong> Esta Política de Privacidade foi
              elaborada em conformidade com a Lei Geral de Proteção de Dados
              (LGPD - Lei nº 13.709/2018), o Marco Civil da Internet (Lei nº
              12.965/2014) e demais legislações aplicáveis. Ao utilizar nossos
              serviços, você reconhece ter lido, compreendido e concordado com
              os termos desta política.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
