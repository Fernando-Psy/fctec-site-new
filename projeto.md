# FCTEC Website - React + Vite

Este projeto é uma versão modernizada do site da FCTEC, desenvolvida com React, Vite e Bootstrap, seguindo as melhores práticas de desenvolvimento front-end.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para construção de interfaces
- **Vite** - Build tool rápida e moderna
- **Bootstrap 5** - Framework CSS responsivo
- **React Bootstrap** - Componentes React para Bootstrap

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header/
│   │   └── Header.jsx
│   ├── Hero/
│   │   └── Hero.jsx
│   ├── Services/
│   │   ├── Services.jsx
│   │   └── ServiceCard.jsx
│   ├── SocialMedia/
│   │   └── SocialMedia.jsx
│   ├── Location/
│   │   └── Location.jsx
│   └── Footer/
│       └── Footer.jsx
├── assets/
│   └── images/
├── App.jsx
├── App.css
└── main.jsx
```

## 🛠️ Instalação e Configuração

1. **Clone o repositório:**
```bash
git clone [seu-repositorio]
cd fctec-site
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as imagens:**
   - Copie todas as imagens da pasta `source/` original para `src/assets/images/`
   - Estrutura esperada:
     ```
     src/assets/images/
     ├── FCTEC1.png
     ├── fctecsemfundo.png
     ├── site.jpg
     ├── googlemybus.png
     ├── redessociais.jpg
     ├── play5.webp
     ├── ciencia-da-neurologia.png
     ├── instagram (1).png
     ├── facebook (1).png
     └── whatsapp (1).png
     ```

4. **Execute o projeto:**
```bash
npm run dev
```

5. **Build para produção:**
```bash
npm run build
```

## ✨ Funcionalidades Implementadas

### 🎯 Componentes Principais
- **Header**: Navegação responsiva com scroll suave
- **Hero**: Seção sobre a empresa com layout responsivo
- **Services**: Cards de serviços organizados e reutilizáveis
- **SocialMedia**: Links para redes sociais com hover effects
- **Location**: Mapa integrado do Google Maps
- **Footer**: Rodapé com informações de copyright

### 📱 Responsividade
- Design mobile-first
- Breakpoints otimizados para todos os tamanhos de tela
- Imagens responsivas com lazy loading
- Navigation collapse em dispositivos móveis

### 🎨 Melhorias de UX/UI
- Animações suaves nos cards e botões
- Hover effects interativos
- Smooth scroll na navegação
- Loading states para imagens
- Transições CSS otimizadas

### ⚡ Performance
- Componentes otimizados
- Lazy loading de imagens
- Build otimizado com Vite
- CSS minificado em produção

## 🔧 Customização

### Cores e Estilos
Todas as cores e estilos customizados estão no arquivo `App.css`:
- Cor principal: `#ffdd57` (amarelo)
- Cor secundária: `#1cb66c` (verde)
- Fonte: Comic Neue

### Adicionando Novos Serviços
1. Edite o array `mainServices` ou `thirdPartyServices` em `Services.jsx`
2. Adicione as imagens correspondentes em `src/assets/images/`

### Modificando Links Sociais
Edite o array `socialLinks` em `SocialMedia.jsx`

## 🌐 SEO e Metadados

O projeto inclui:
- Meta tags otimizadas
- Open Graph para redes sociais
- Structured data
- Sitemap ready

## 📋 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter

## 🚀 Deploy

Para deploy em produção, após executar `npm run build`, os arquivos estarão na pasta `dist/` prontos para serem servidos por qualquer servidor web.

### Plataformas Recomendadas:
- Vercel
- Netlify
- GitHub Pages

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

FCTEC - [WhatsApp](https://wa.me/5521968810478)

Site: [https://fctec.com.br](https://fctec.com.br)