export const regionalPages = [
  {
    slug: 'desenvolvimento-web-em-belford-roxo-rj',
    city: 'Belford Roxo',
    regionLabel: 'Baixada Fluminense',
    title: 'Desenvolvimento Web em Belford Roxo RJ | FCBJ',
    description:
      'Criação de sites, sistemas web e estrutura digital em Belford Roxo RJ. Atendemos empresas locais e projetos nacionais com base técnica, SEO e foco em crescimento.',
    keywords:
      'desenvolvimento web belford roxo, criação de sites belford roxo, sistema web belford roxo, desenvolvedor web belford roxo rj',
    intro:
      'Atuamos a partir de Belford Roxo para desenvolver sites institucionais, sistemas sob medida e estruturas digitais para empresas que querem organizar a operação e crescer com mais consistência.',
    painPoints: [
      'Empresas com presença digital fraca ou desatualizada',
      'Negócios que dependem demais de atendimento manual no WhatsApp',
      'Rotinas internas sem sistema para organizar processos, clientes e pedidos',
    ],
    opportunities: [
      'Estruturar presença local com SEO e Google',
      'Criar site profissional com foco em conversão',
      'Digitalizar operações com sistema web sob medida',
    ],
  },
  {
    slug: 'desenvolvimento-web-em-nova-iguacu-rj',
    city: 'Nova Iguaçu',
    regionLabel: 'Baixada Fluminense',
    title: 'Desenvolvimento Web em Nova Iguaçu RJ | FCBJ',
    description:
      'Desenvolvimento web em Nova Iguaçu RJ para empresas que precisam de sites profissionais, sistemas web e estrutura digital com base em performance, SEO e crescimento comercial.',
    keywords:
      'desenvolvimento web nova iguaçu, criação de sites nova iguaçu, sistema web nova iguaçu, desenvolvedor web nova iguaçu rj',
    intro:
      'Apoiamos empresas de Nova Iguaçu com projetos digitais pensados para fortalecer posicionamento, captar mais contatos e reduzir gargalos operacionais com tecnologia.',
    painPoints: [
      'Sites que não transmitem confiança nem geram contato',
      'Processos comerciais e internos descentralizados',
      'Dependência de ferramentas improvisadas para organizar atendimento e operação',
    ],
    opportunities: [
      'Melhorar autoridade digital e presença no Google',
      'Transformar serviços em páginas com foco em busca e conversão',
      'Criar sistemas para agenda, gestão, cadastro e acompanhamento',
    ],
  },
  {
    slug: 'desenvolvimento-web-em-duque-de-caxias-rj',
    city: 'Duque de Caxias',
    regionLabel: 'Baixada Fluminense',
    title: 'Desenvolvimento Web em Duque de Caxias RJ | FCBJ',
    description:
      'Criação de sites e sistemas web em Duque de Caxias RJ para empresas que buscam performance, estrutura digital e melhor posicionamento no Google.',
    keywords:
      'desenvolvimento web duque de caxias, criação de sites duque de caxias, sistema web duque de caxias, desenvolvedor web duque de caxias rj',
    intro:
      'Desenvolvemos estruturas digitais para empresas de Duque de Caxias que precisam vender melhor, organizar processos e consolidar presença online com mais autoridade.',
    painPoints: [
      'Operações crescendo sem base digital adequada',
      'Falta de integração entre atendimento, site e rotinas internas',
      'Pouca visibilidade orgânica para serviços e segmentos competitivos',
    ],
    opportunities: [
      'Criar funis de contato mais eficientes',
      'Integrar site, formulários, WhatsApp e processos internos',
      'Ganhar relevância local e regional nas buscas',
    ],
  },
  {
    slug: 'desenvolvimento-web-no-rio-de-janeiro-rj',
    city: 'Rio de Janeiro',
    regionLabel: 'Capital e Grande Rio',
    title: 'Desenvolvimento Web no Rio de Janeiro RJ | FCBJ',
    description:
      'Desenvolvimento web no Rio de Janeiro RJ para empresas que precisam de sites institucionais, sistemas web sob medida e estrutura digital com foco em SEO e conversão.',
    keywords:
      'desenvolvimento web rio de janeiro, criação de sites rio de janeiro, sistema web rio de janeiro, desenvolvedor web rio de janeiro rj',
    intro:
      'Atendemos empresas do Rio de Janeiro com desenvolvimento de sites, sistemas e projetos digitais voltados para performance, estrutura comercial e crescimento sustentável.',
    painPoints: [
      'Mercado competitivo exigindo presença digital mais forte',
      'Sites sem estratégia de busca e sem proposta clara',
      'Necessidade de diferenciar a empresa com tecnologia e organização',
    ],
    opportunities: [
      'Posicionar serviços com conteúdo orientado a SEO',
      'Criar páginas e sistemas pensados para escala',
      'Transformar operação digital em vantagem competitiva',
    ],
  },
];

export const regionalPagesBySlug = Object.fromEntries(
  regionalPages.map((page) => [page.slug, page])
);
