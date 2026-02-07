import "./TermsOfService.css";

const TermsOfService = () => {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <div className="terms-header">
          <h1 className="terms-title">Termos de Uso</h1>
          <p className="terms-updated">
            Última atualização: 24 de janeiro de 2026
          </p>
        </div>

        <div className="terms-content">
          <section className="terms-section">
            <h2 className="section-title">1. Aceitação dos Termos</h2>
            <p>
              Bem-vindo ao site da <strong>FCBJ Desenvolvimento</strong> (CNPJ:
              56.323.525/0001-12). Ao acessar e utilizar este site e nossos
              serviços, você concorda em cumprir e estar vinculado aos seguintes
              Termos de Uso, em conformidade com a legislação brasileira,
              incluindo o Marco Civil da Internet (Lei nº 12.965/2014), o Código
              de Defesa do Consumidor (Lei nº 8.078/1990) e a Lei Geral de
              Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
            <p>
              Se você não concordar com qualquer parte destes termos, não deverá
              utilizar nosso site ou serviços.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">2. Definições</h2>
            <p>Para os fins destes Termos de Uso, consideram-se:</p>
            <ul>
              <li>
                <strong>"Empresa"</strong>: FCBJ Desenvolvimento, prestadora dos
                serviços
              </li>
              <li>
                <strong>"Usuário"</strong>: Qualquer pessoa que acesse ou
                utilize o site
              </li>
              <li>
                <strong>"Cliente"</strong>: Pessoa física ou jurídica que
                contrata nossos serviços
              </li>
              <li>
                <strong>"Site"</strong>: Plataforma online acessível através do
                domínio da FCBJ Desenvolvimento
              </li>
              <li>
                <strong>"Serviços"</strong>: Desenvolvimento web, aplicações,
                consultoria e demais soluções oferecidas
              </li>
              <li>
                <strong>"Conteúdo"</strong>: Textos, imagens, códigos, designs e
                demais materiais do site
              </li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="section-title">3. Descrição dos Serviços</h2>
            <p>
              A FCBJ Desenvolvimento oferece serviços de tecnologia, incluindo
              mas não limitado a:
            </p>

            <div className="services-grid">
              <div className="service-item">
                <div className="service-icon">💻</div>
                <h4>Desenvolvimento Web</h4>
                <p>
                  Sites institucionais, landing pages, portais e sistemas web
                  personalizados
                </p>
              </div>

              <div className="service-item">
                <div className="service-icon">📱</div>
                <h4>Aplicações</h4>
                <p>
                  Desenvolvimento de aplicações web responsivas e progressivas
                  (PWA)
                </p>
              </div>

              <div className="service-item">
                <div className="service-icon">🛒</div>
                <h4>E-commerce</h4>
                <p>
                  Lojas virtuais completas com integração de pagamentos e gestão
                </p>
              </div>

              <div className="service-item">
                <div className="service-icon">🎨</div>
                <h4>Design</h4>
                <p>UI/UX Design, identidade visual e design de interfaces</p>
              </div>

              <div className="service-item">
                <div className="service-icon">🔧</div>
                <h4>Manutenção</h4>
                <p>Suporte técnico, atualizações e manutenção de sistemas</p>
              </div>

              <div className="service-item">
                <div className="service-icon">📊</div>
                <h4>Consultoria</h4>
                <p>
                  Consultoria em tecnologia, arquitetura de sistemas e
                  estratégia digital
                </p>
              </div>
            </div>
          </section>

          <section className="terms-section">
            <h2 className="section-title">4. Uso do Site</h2>

            <h3 className="subsection-title">4.1. Condições de Uso</h3>
            <p>Ao utilizar nosso site, você concorda em:</p>
            <ul>
              <li>
                Fornecer informações verdadeiras, precisas, atuais e completas
              </li>
              <li>
                Manter a confidencialidade de suas credenciais de acesso (quando
                aplicável)
              </li>
              <li>Não utilizar o site para fins ilegais ou não autorizados</li>
              <li>
                Não tentar obter acesso não autorizado a sistemas ou redes
              </li>
              <li>Não transmitir vírus, malware ou códigos maliciosos</li>
              <li>Respeitar os direitos de propriedade intelectual</li>
            </ul>

            <h3 className="subsection-title">4.2. Uso Proibido</h3>
            <p>É expressamente proibido:</p>
            <ul>
              <li>
                Copiar, modificar ou distribuir conteúdo do site sem autorização
              </li>
              <li>
                Realizar engenharia reversa ou descompilar qualquer parte do
                site
              </li>
              <li>
                Usar web scrapers, bots ou sistemas automatizados sem permissão
              </li>
              <li>Interferir no funcionamento adequado do site</li>
              <li>Publicar conteúdo ofensivo, difamatório ou ilegal</li>
              <li>
                Utilizar o site para spam, phishing ou outras práticas
                fraudulentas
              </li>
              <li>
                Violar direitos de terceiros, incluindo privacidade e
                propriedade intelectual
              </li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="section-title">5. Contratação de Serviços</h2>

            <h3 className="subsection-title">5.1. Processo de Contratação</h3>
            <p>A contratação de nossos serviços segue as seguintes etapas:</p>
            <ol className="numbered-list">
              <li>
                <strong>Solicitação:</strong> Cliente entra em contato através
                do site ou canais disponíveis
              </li>
              <li>
                <strong>Análise:</strong> Avaliamos os requisitos e escopo do
                projeto
              </li>
              <li>
                <strong>Proposta:</strong> Enviamos proposta comercial detalhada
                com prazos e valores
              </li>
              <li>
                <strong>Negociação:</strong> Discutimos ajustes necessários na
                proposta
              </li>
              <li>
                <strong>Contrato:</strong> Formalizamos através de contrato
                específico para o projeto
              </li>
              <li>
                <strong>Execução:</strong> Iniciamos o desenvolvimento conforme
                cronograma acordado
              </li>
            </ol>

            <h3 className="subsection-title">5.2. Proposta Comercial</h3>
            <p>Toda proposta comercial inclui:</p>
            <ul>
              <li>Escopo detalhado do projeto</li>
              <li>Cronograma de entregas e marcos</li>
              <li>Valores de investimento e formas de pagamento</li>
              <li>Responsabilidades de ambas as partes</li>
              <li>Prazo de validade da proposta (geralmente 30 dias)</li>
            </ul>

            <h3 className="subsection-title">
              5.3. Contrato de Prestação de Serviços
            </h3>
            <p>
              Os serviços são regidos por contrato específico que estabelece:
            </p>
            <ul>
              <li>Objeto do contrato e especificações técnicas</li>
              <li>Obrigações das partes</li>
              <li>Prazos de execução e entrega</li>
              <li>Valores, formas e condições de pagamento</li>
              <li>Direitos autorais e propriedade intelectual</li>
              <li>Garantias e suporte pós-entrega</li>
              <li>Condições de rescisão</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="section-title">6. Preços e Pagamentos</h2>

            <h3 className="subsection-title">6.1. Valores</h3>
            <p>
              Os valores dos serviços são estabelecidos em cada proposta
              comercial e podem variar conforme:
            </p>
            <ul>
              <li>Complexidade e escopo do projeto</li>
              <li>Prazo de entrega requerido</li>
              <li>Tecnologias e recursos necessários</li>
              <li>Serviços adicionais solicitados</li>
            </ul>

            <h3 className="subsection-title">6.2. Formas de Pagamento</h3>
            <p>Aceitamos as seguintes formas de pagamento:</p>
            <ul>
              <li>Transferência bancária (PIX, TED, DOC)</li>
              <li>Boleto bancário</li>
              <li>Cartão de crédito (mediante aprovação)</li>
            </ul>

            <h3 className="subsection-title">6.3. Condições de Pagamento</h3>
            <p>
              As condições de pagamento são estabelecidas no contrato e podem
              incluir:
            </p>
            <ul>
              <li>
                <strong>Entrada:</strong> Pagamento inicial para início do
                projeto (geralmente 30-50%)
              </li>
              <li>
                <strong>Parcelas:</strong> Pagamentos conforme marcos de entrega
                definidos
              </li>
              <li>
                <strong>Final:</strong> Saldo remanescente na entrega final do
                projeto
              </li>
            </ul>
            <p className="payment-note">
              <strong>Importante:</strong> A execução do projeto está
              condicionada ao recebimento dos pagamentos conforme cronograma
              acordado. Atrasos podem resultar em suspensão temporária dos
              trabalhos.
            </p>

            <h3 className="subsection-title">6.4. Atrasos e Inadimplência</h3>
            <p>Em caso de atraso de pagamento:</p>
            <ul>
              <li>
                Serão aplicados juros de 1% ao mês e multa de 2% sobre o valor
                devido
              </li>
              <li>Os trabalhos poderão ser suspensos após 7 dias de atraso</li>
              <li>
                O acesso a sistemas/hospedagem pode ser bloqueado após 15 dias
              </li>
              <li>
                Débitos acima de 30 dias podem ser encaminhados para cobrança
                judicial
              </li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="section-title">7. Prazos e Entregas</h2>

            <h3 className="subsection-title">7.1. Cumprimento de Prazos</h3>
            <p>
              Nos comprometemos a cumprir os prazos estabelecidos no contrato,
              desde que:
            </p>
            <ul>
              <li>Os pagamentos sejam realizados conforme cronograma</li>
              <li>
                O cliente forneça informações e materiais necessários em tempo
                hábil
              </li>
              <li>
                Não ocorram alterações significativas no escopo do projeto
              </li>
              <li>Não haja circunstâncias de força maior ou caso fortuito</li>
            </ul>

            <h3 className="subsection-title">7.2. Alterações de Escopo</h3>
            <p>Solicitações de alteração no escopo do projeto:</p>
            <ul>
              <li>Devem ser formalizadas por escrito</li>
              <li>Serão avaliadas quanto a impacto em prazo e custo</li>
              <li>Podem resultar em aditivo contratual</li>
              <li>Só serão implementadas após aprovação mútua</li>
            </ul>

            <h3 className="subsection-title">7.3. Homologação e Aprovação</h3>
            <p>
              O cliente tem prazo de até 7 dias corridos após cada entrega para:
            </p>
            <ul>
              <li>Testar funcionalidades implementadas</li>
              <li>Validar requisitos atendidos</li>
              <li>Solicitar ajustes dentro do escopo contratado</li>
              <li>Aprovar formalmente a entrega</li>
            </ul>
            <p>
              Decorrido o prazo sem manifestação, a entrega será considerada
              aprovada tacitamente.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">8. Propriedade Intelectual</h2>

            <h3 className="subsection-title">8.1. Direitos Autorais do Site</h3>
            <p>
              Todo o conteúdo deste site, incluindo mas não limitado a textos,
              gráficos, logos, ícones, imagens, código-fonte e software, é
              propriedade da FCBJ Desenvolvimento ou de seus licenciadores e
              está protegido pelas leis brasileiras e internacionais de direitos
              autorais.
            </p>

            <h3 className="subsection-title">
              8.2. Direitos sobre Projetos Desenvolvidos
            </h3>
            <p>
              Os direitos de propriedade intelectual sobre projetos
              desenvolvidos são regulados por contrato específico e geralmente
              seguem as seguintes diretrizes:
            </p>
            <ul>
              <li>
                <strong>Código Personalizado:</strong> Após quitação integral,
                os direitos patrimoniais são transferidos ao cliente
              </li>
              <li>
                <strong>Frameworks e Bibliotecas:</strong> Mantêm suas
                respectivas licenças originais
              </li>
              <li>
                <strong>Componentes Reutilizáveis:</strong> Componentes
                genéricos desenvolvidos podem ser reutilizados pela empresa em
                outros projetos
              </li>
              <li>
                <strong>Direitos Morais:</strong> A empresa mantém direitos
                morais de autoria conforme Lei de Direitos Autorais (Lei nº
                9.610/1998)
              </li>
            </ul>

            <h3 className="subsection-title">
              8.3. Código-fonte e Documentação
            </h3>
            <p>
              O código-fonte e documentação técnica são entregues ao cliente
              mediante:
            </p>
            <ul>
              <li>Quitação integral do projeto</li>
              <li>
                Assinatura de termo de confidencialidade, quando aplicável
              </li>
              <li>Sem ônus adicional, salvo acordado diferentemente</li>
            </ul>

            <h3 className="subsection-title">8.4. Portfolio e Divulgação</h3>
            <p>
              A FCBJ Desenvolvimento reserva-se o direito de incluir projetos
              desenvolvidos em seu portfolio e materiais de divulgação, salvo
              acordo de confidencialidade em contrário.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">9. Garantias e Responsabilidades</h2>

            <h3 className="subsection-title">9.1. Garantia de Serviços</h3>
            <p>Garantimos que os serviços prestados:</p>
            <ul>
              <li>
                Serão executados com qualidade profissional e boas práticas do
                mercado
              </li>
              <li>Atenderão aos requisitos especificados no contrato</li>
              <li>
                Estarão livres de defeitos de programação significativos na
                entrega
              </li>
            </ul>

            <h3 className="subsection-title">9.2. Período de Garantia</h3>
            <p>Oferecemos garantia de 90 dias após a entrega final para:</p>
            <ul>
              <li>Correção de bugs e erros de funcionamento</li>
              <li>Ajustes para atender especificações contratadas</li>
              <li>Problemas de compatibilidade descritos no escopo</li>
            </ul>
            <p className="warranty-note">
              <strong>Importante:</strong> A garantia não cobre alterações de
              escopo, novas funcionalidades, problemas causados por modificações
              feitas por terceiros ou falhas de infraestrutura externa.
            </p>

            <h3 className="subsection-title">
              9.3. Limitações de Responsabilidade
            </h3>
            <p>A FCBJ Desenvolvimento não se responsabiliza por:</p>
            <ul>
              <li>Danos indiretos, incidentais ou consequenciais</li>
              <li>Perda de lucros, dados ou oportunidades de negócio</li>
              <li>
                Problemas causados por infraestrutura de terceiros (hospedagem,
                domínios, APIs)
              </li>
              <li>
                Uso inadequado ou modificações não autorizadas nos sistemas
              </li>
              <li>
                Conteúdo fornecido pelo cliente que viole direitos de terceiros
              </li>
              <li>Indisponibilidade de serviços externos integrados</li>
            </ul>

            <h3 className="subsection-title">
              9.4. Responsabilidades do Cliente
            </h3>
            <p>O cliente é responsável por:</p>
            <ul>
              <li>Fornecer conteúdo e materiais necessários</li>
              <li>Garantir que possui direitos sobre materiais fornecidos</li>
              <li>Manter backups dos dados</li>
              <li>
                Contratar e manter infraestrutura adequada (hospedagem, domínio)
              </li>
              <li>Realizar atualizações e manutenções recomendadas</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="section-title">10. Confidencialidade</h2>
            <p>
              Comprometemo-nos a manter sigilo sobre informações confidenciais
              do cliente, incluindo:
            </p>
            <ul>
              <li>Estratégias de negócio e planos comerciais</li>
              <li>Dados técnicos e especificações proprietárias</li>
              <li>Informações financeiras</li>
              <li>Dados pessoais de clientes e usuários</li>
            </ul>
            <p>
              Para projetos sensíveis, pode ser firmado Acordo de
              Confidencialidade (NDA) específico.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">11. Rescisão e Cancelamento</h2>

            <h3 className="subsection-title">11.1. Rescisão pelo Cliente</h3>
            <p>O cliente pode rescindir o contrato mediante:</p>
            <ul>
              <li>Notificação por escrito com 15 dias de antecedência</li>
              <li>Pagamento de todo trabalho realizado até a data</li>
              <li>
                Pagamento de multa conforme especificado no contrato (geralmente
                20% do saldo)
              </li>
            </ul>

            <h3 className="subsection-title">11.2. Rescisão pela Empresa</h3>
            <p>Podemos rescindir o contrato em caso de:</p>
            <ul>
              <li>Inadimplência superior a 30 dias</li>
              <li>Violação grave dos termos contratuais</li>
              <li>
                Impossibilidade de continuidade dos trabalhos por culpa do
                cliente
              </li>
              <li>Comportamento abusivo ou desrespeitoso com a equipe</li>
            </ul>

            <h3 className="subsection-title">
              11.3. Direito de Arrependimento (CDC)
            </h3>
            <p>
              Conforme Código de Defesa do Consumidor, contratos firmados fora
              do estabelecimento comercial têm direito de arrependimento em até
              7 dias, desde que:
            </p>
            <ul>
              <li>
                O serviço não tenha sido iniciado por solicitação expressa do
                consumidor
              </li>
              <li>
                Havendo início, será cobrado apenas o proporcional ao executado
              </li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="section-title">
              12. Privacidade e Proteção de Dados
            </h2>
            <p>
              O tratamento de dados pessoais segue nossa
              <a href="/politica-privacidade" className="inline-link">
                {" "}
                Política de Privacidade
              </a>
              , em conformidade com a LGPD (Lei nº 13.709/2018).
            </p>
            <p>Principais pontos:</p>
            <ul>
              <li>
                Coletamos apenas dados necessários para prestação dos serviços
              </li>
              <li>
                Implementamos medidas de segurança técnicas e organizacionais
              </li>
              <li>Respeitamos todos os direitos dos titulares de dados</li>
              <li>
                Não compartilhamos dados sem consentimento, exceto obrigação
                legal
              </li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="section-title">13. Isenções e Limitações</h2>

            <h3 className="subsection-title">13.1. Disponibilidade do Site</h3>
            <p>
              Embora nos esforcemos para manter o site disponível, não
              garantimos que:
            </p>
            <ul>
              <li>O site estará livre de erros ou interrupções</li>
              <li>Defeitos serão corrigidos imediatamente</li>
              <li>O site estará disponível 24/7 sem manutenções</li>
            </ul>

            <h3 className="subsection-title">13.2. Links Externos</h3>
            <p>
              Nosso site pode conter links para sites de terceiros. Não somos
              responsáveis por:
            </p>
            <ul>
              <li>Conteúdo de sites externos</li>
              <li>Práticas de privacidade de terceiros</li>
              <li>Danos causados por sites vinculados</li>
            </ul>

            <h3 className="subsection-title">13.3. Força Maior</h3>
            <p>
              Não seremos responsáveis por inadimplemento devido a
              circunstâncias fora de nosso controle razoável, incluindo:
            </p>
            <ul>
              <li>Desastres naturais</li>
              <li>Falhas de infraestrutura de internet</li>
              <li>Atos governamentais ou mudanças regulatórias</li>
              <li>Pandemias ou emergências de saúde pública</li>
              <li>Greves ou conflitos trabalhistas</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2 className="section-title">14. Modificações dos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Uso a
              qualquer momento. As alterações entrarão em vigor imediatamente
              após a publicação no site.
            </p>
            <p>Alterações significativas serão comunicadas através de:</p>
            <ul>
              <li>Aviso destacado no site</li>
              <li>E-mail para clientes cadastrados</li>
              <li>Notificação em projetos em andamento</li>
            </ul>
            <p>
              O uso continuado dos serviços após modificações constitui
              aceitação dos novos termos.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">15. Disposições Gerais</h2>

            <h3 className="subsection-title">15.1. Lei Aplicável</h3>
            <p>
              Estes termos são regidos pelas leis da República Federativa do
              Brasil, incluindo:
            </p>
            <ul>
              <li>Código Civil Brasileiro (Lei nº 10.406/2002)</li>
              <li>Código de Defesa do Consumidor (Lei nº 8.078/1990)</li>
              <li>Marco Civil da Internet (Lei nº 12.965/2014)</li>
              <li>LGPD (Lei nº 13.709/2018)</li>
              <li>Lei de Direitos Autorais (Lei nº 9.610/1998)</li>
            </ul>

            <h3 className="subsection-title">15.2. Foro</h3>
            <p>
              Fica eleito o foro da comarca de Belford Roxo, Estado do Rio de
              Janeiro, para dirimir quaisquer controvérsias decorrentes destes
              Termos de Uso, renunciando as partes a qualquer outro, por mais
              privilegiado que seja.
            </p>
            <p className="consumer-note">
              <strong>Importante:</strong> Para relações de consumo, prevalece o
              foro do domicílio do consumidor conforme Código de Defesa do
              Consumidor.
            </p>

            <h3 className="subsection-title">
              15.3. Independência das Cláusulas
            </h3>
            <p>
              Se qualquer disposição destes termos for considerada inválida ou
              inexequível, as demais disposições permanecerão em pleno vigor e
              efeito.
            </p>

            <h3 className="subsection-title">15.4. Cessão</h3>
            <p>
              Estes termos não podem ser cedidos ou transferidos pelo usuário
              sem nosso consentimento prévio por escrito. Podemos ceder nossos
              direitos e obrigações a qualquer tempo.
            </p>

            <h3 className="subsection-title">15.5. Acordo Integral</h3>
            <p>
              Estes Termos de Uso, juntamente com a Política de Privacidade e
              contratos específicos, constituem o acordo integral entre as
              partes.
            </p>
          </section>

          <section className="terms-section">
            <h2 className="section-title">16. Resolução de Conflitos</h2>

            <h3 className="subsection-title">16.1. Negociação Direta</h3>
            <p>
              Em caso de conflitos ou divergências, as partes se comprometem a
              buscar primeiramente uma solução amigável através de negociação
              direta.
            </p>

            <h3 className="subsection-title">16.2. Mediação</h3>
            <p>
              Não sendo possível acordo direto, as partes podem optar por
              mediação antes de recorrer ao judiciário.
            </p>

            <h3 className="subsection-title">16.3. Canais de Atendimento</h3>
            <p>Para questões contratuais e reclamações:</p>
            <ul>
              <li>
                <strong>E-mail:</strong> fcbj.dev@gmail.com
              </li>
              <li>
                <strong>Telefone/WhatsApp:</strong> (21) 96881-0478
              </li>
              <li>
                <strong>Prazo de resposta:</strong> Até 5 dias úteis
              </li>
            </ul>
          </section>

          <section className="terms-section contact-section">
            <h2 className="section-title">17. Contato</h2>
            <p>
              Para dúvidas, esclarecimentos ou solicitações relacionadas a estes
              Termos de Uso:
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <h4>E-mail</h4>
                <a href="mailto:fcbj.dev@gmail.com">fcbj.dev@gmail.com</a>
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

              <div className="contact-card">
                <div className="contact-icon">🏢</div>
                <h4>CNPJ</h4>
                <p>56.323.525/0001-12</p>
              </div>
            </div>
          </section>

          <section className="terms-section final-note">
            <p className="disclaimer">
              <strong>Declaração Final:</strong> Estes Termos de Uso foram
              elaborados em conformidade com a legislação brasileira vigente. Ao
              utilizar nosso site e serviços, você declara ter lido,
              compreendido e concordado integralmente com todos os termos e
              condições aqui estabelecidos. Recomendamos que você salve ou
              imprima uma cópia destes termos para sua referência.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
