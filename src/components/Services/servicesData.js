import googleMapsImage from "../../assets/images/google_maps.jpeg";
import site1Image from "../../assets/images/site1.jpeg";
import siteManutencao from "../../assets/images/manutencao.jpg";
import siteImage from "../../assets/images/site.jpg";

export const servicesData = [
  {
    id: "google-meu-negocio",
    image: googleMapsImage,
    title: "Google Meu Negócio",
    description: "Configuração estratégica completa do Google Meu Negócio para maximizar sua visibilidade local e atrair clientes qualificados da sua região.",
    detailedDescription: "Otimize sua presença no Google e apareça quando seus clientes estão procurando pelos seus serviços. Configuração profissional que aumenta sua visibilidade local e atrai mais clientes qualificados para seu negócio.",
    price: "A partir de R$ 600",
    features: [
      "Otimização completa do perfil no Google",
      "Landing Page profissional integrada",
      "Configuração de categorias e palavras-chave",
      "Upload de fotos otimizadas",
      "Deploy e hospedagem gratuitos",
      "Integração com WhatsApp Business",
      "Suporte pós-lançamento (30 dias)",
      "Tutorial de gerenciamento"
    ],
    whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre Google Meu Negócio.",
    badge: "Mais Popular",
    icon: "🎯"
  },
  {
    id: "sistema-web-personalizado",
    image: site1Image,
    title: "Sistema Web Personalizado",
    description: "Sistema sob medida com backend robusto e frontend moderno. Ideal para clínicas, consultórios, escolas ou negócios que precisam automatizar processos.",
    detailedDescription: "Solução completa desenvolvida especialmente para as necessidades do seu negócio. Sistema profissional com tecnologia de ponta, seguro, escalável e fácil de usar. Perfeito para automatizar agendamentos, cadastros, gestão e relatórios.",
    price: "A partir de R$ 6.500",
    features: [
      "Backend robusto com Python + Django",
      "Frontend moderno e responsivo com React",
      "Banco de dados PostgreSQL otimizado",
      "Sistema de autenticação e permissões",
      "Painel administrativo completo",
      "API RESTful para integrações",
      "Deploy profissional com Docker",
      "Hospedagem em AWS ou Heroku",
      "Backup automático diário",
      "Documentação técnica completa",
      "Treinamento da equipe",
      "3 meses de suporte técnico"
    ],
    whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre Sistema Web Personalizado.",
    badge: "Premium",
    icon: "⚙️"
  },
  {
    id: "site-institucional",
    image: siteImage,
    title: "Site Institucional com CMS",
    description: "Site profissional com painel de administração. Você mesmo atualiza textos, imagens e conteúdos sem precisar programar.",
    detailedDescription: "Seu negócio merece um site profissional que transmita credibilidade. Site completo com sistema de gerenciamento de conteúdo intuitivo, permitindo que você faça atualizações sem depender de programadores. Design moderno, responsivo e otimizado para conversão.",
    price: "A partir de R$ 2.000",
    features: [
      "Design moderno e responsivo",
      "Painel de administração intuitivo (CMS)",
      "Atualização de conteúdo sem programador",
      "Otimização para buscadores (SEO)",
      "Integração com redes sociais",
      "Formulário de contato",
      "Botão flutuante de WhatsApp",
      "Google Maps integrado",
      "SSL/HTTPS (segurança)",
      "Hospedagem por 1 ano incluída",
      "Domínio .com.br por 1 ano",
      "Emails profissionais (3 contas)",
      "Treinamento para uso do CMS",
      "Suporte técnico (30 dias)"
    ],
    whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre Site Institucional.",
    badge: "Melhor Custo-Benefício",
    icon: "🌐"
  },
  {
    id: "manutencao-sistemas",
    image: siteManutencao,
    title: "Manutenção de Sites e Sistemas",
    description: "Mantenha seu site sempre atualizado, seguro e funcionando perfeitamente. 90% dos problemas acontecem por falta de manutenção.",
    detailedDescription: "Proteja seu investimento com manutenção profissional regular. Mantemos seu site ou sistema sempre atualizado, seguro e com máxima performance. Evite problemas, perda de dados e quedas que podem custar clientes e vendas.",
    price: "A partir de R$ 350/mês",
    features: [
      "Atualizações de segurança",
      "Correção de bugs e erros",
      "Ajustes de layout e design",
      "Troca de imagens e textos",
      "Otimização de performance",
      "Backup semanal automatizado",
      "Monitoramento de uptime 24/7",
      "Atualizações de plugins/bibliotecas",
      "Suporte técnico prioritário",
      "Relatório mensal de atividades",
      "Até 4 horas de desenvolvimento/mês",
      "Resposta em até 24 horas"
    ],
    whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre Manutenção de Sistemas.",
    badge: null,
    icon: "🔧"
  },
  {
    id: "e-commerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    title: "Loja Virtual (E-commerce)",
    description: "Venda online 24/7 com loja virtual completa. Sistema de pagamento integrado, gestão de estoque e painel administrativo.",
    detailedDescription: "Expanda suas vendas com uma loja virtual profissional. Sistema completo para vender online com integração de pagamentos, gestão de produtos, controle de estoque, envio automático e muito mais. Comece a vender online hoje mesmo!",
    price: "A partir de R$ 4.000",
    features: [
      "Catálogo ilimitado de produtos",
      "Carrinho de compras inteligente",
      "Integração com Mercado Pago/PagSeguro",
      "Cálculo automático de frete (Correios/Transportadoras)",
      "Sistema de cupons e promoções",
      "Gestão completa de estoque",
      "Painel administrativo completo",
      "Notificações automáticas por email",
      "Relatórios de vendas",
      "Responsivo (mobile-first)",
      "SEO otimizado",
      "Certificado SSL incluído",
      "Hospedagem por 1 ano",
      "Treinamento completo"
    ],
    whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre E-commerce.",
    badge: "Venda Mais",
    icon: "🛒"
  },
  {
    id: "landing-page",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    title: "Landing Page de Conversão",
    description: "Página focada em conversão para captar leads e vender seus serviços. Design persuasivo e otimizado para resultados.",
    detailedDescription: "Transforme visitantes em clientes com uma landing page profissional focada em conversão. Design estratégico, copywriting persuasivo e otimizações para maximizar seus resultados. Ideal para campanhas, lançamentos e captação de leads.",
    price: "A partir de R$ 1.200",
    features: [
      "Design focado em conversão",
      "Copywriting estratégico",
      "Formulário de captura otimizado",
      "Integração com ferramentas de email",
      "Botões de ação estratégicos (CTAs)",
      "Depoimentos e provas sociais",
      "Contador regressivo (se necessário)",
      "Chat ou WhatsApp integrado",
      "Responsivo e ultra-rápido",
      "SEO básico",
      "Google Analytics configurado",
      "Hospedagem por 1 ano",
      "Deploy em até 5 dias",
      "2 rodadas de revisão"
    ],
    whatsappLink: "https://wa.me/5521968810478?text=Oi, gostaria de informações sobre Landing Page.",
    badge: "Entrega Rápida",
    icon: "🎯"
  }
];