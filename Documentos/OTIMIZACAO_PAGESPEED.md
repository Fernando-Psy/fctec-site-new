# 🚀 Guia de Otimização PageSpeed

Este documento contém dicas e comandos para otimizar ainda mais o site para o Google PageSpeed Insights.

## ✅ Otimizações Já Implementadas

1. **Code Splitting com React.lazy()**

   - Todos os componentes pesados carregam sob demanda
   - Reduz o bundle inicial do JavaScript

2. **Lazy Loading de Imagens**

   - Atributo `loading="lazy"` nas imagens
   - Hero usa `loading="eager"` para carregamento prioritário

3. **DNS Prefetch e Preconnect**

   - Recursos externos carregam mais rápido
   - Fontes e imagens otimizadas

4. **Suspense Boundaries**
   - Loading states suaves
   - Melhor experiência do usuário

---

## 🎯 Próximas Otimizações (Recomendadas)

### 1. Otimizar Imagens Locais

Se você tiver imagens locais na pasta `public/` ou `src/assets/`, otimize-as:

```bash
# Instalar ferramenta de otimização
npm install -D vite-plugin-imagemin

# Ou use ferramentas online:
# - TinyPNG (https://tinypng.com/)
# - Squoosh (https://squoosh.app/)
```

**Adicione ao vite.config.ts:**

```javascript
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
  ],
});
```

### 2. Adicionar Compressão Gzip/Brotli

```bash
# Instalar plugin
npm install -D vite-plugin-compression
```

**Adicione ao vite.config.ts:**

```javascript
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
  ],
});
```

### 3. Otimizar Bootstrap

Importe apenas os componentes que você usa:

**Em vez de:**

```javascript
import "bootstrap/dist/css/bootstrap.min.css";
```

**Use:**

```javascript
// Importe apenas os componentes necessários
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap-utilities.min.css";
```

### 4. Preload de Fontes

**Adicione no index.html:**

```html
<link
  rel="preload"
  as="font"
  href="caminho-da-fonte.woff2"
  type="font/woff2"
  crossorigin="anonymous"
/>
```

### 5. Usar WebP para Imagens

Converta imagens para WebP (formato mais leve):

```bash
# Instalar ferramenta
npm install -g webp-converter

# Converter imagem
cwebp input.jpg -q 80 -o output.webp
```

**Uso no código:**

```jsx
<picture>
  <source srcSet="imagem.webp" type="image/webp" />
  <img src="imagem.jpg" alt="Descrição" loading="lazy" />
</picture>
```

---

## 📊 Comandos de Build Otimizado

### Build de Produção

```bash
npm run build
```

### Análise do Bundle

```bash
# Instalar ferramenta
npm install -D rollup-plugin-visualizer

# Adicionar ao vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
})

# Rodar build para ver análise
npm run build
```

### Preview de Produção

```bash
npm run preview
```

---

## 🧪 Testar Performance

### 1. Google PageSpeed Insights

```
https://pagespeed.web.dev/
```

### 2. Lighthouse (Chrome DevTools)

```
1. Abrir DevTools (F12)
2. Ir em "Lighthouse"
3. Selecionar "Performance"
4. Clicar em "Generate Report"
```

### 3. WebPageTest

```
https://www.webpagetest.org/
```

---

## 🎯 Metas de Performance

### Lighthouse Scores Ideais:

- **Performance**: ≥ 90
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 95
- **SEO**: ≥ 95

### Core Web Vitals:

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## 🔧 Configurações Avançadas do Vite

**vite.config.ts completo otimizado:**

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: "brotliCompress",
    }),
  ],
  build: {
    // Otimizações de build
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          bootstrap: ["react-bootstrap", "bootstrap"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
```

---

## 🌐 Otimizações no Servidor

### Headers de Cache (para produção)

Se estiver usando Nginx:

```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

Se estiver usando Apache (.htaccess):

```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### Habilitar Gzip/Brotli

**Nginx:**

```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
gzip_min_length 1000;
```

**Apache:**

```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript
</IfModule>
```

---

## 📱 Otimização Mobile

### Viewport otimizado (já implementado)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Touch Icons

```html
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

---

## 🔍 Checklist Final de Performance

- [x] Lazy loading implementado
- [x] Code splitting configurado
- [x] DNS prefetch adicionado
- [x] Imagens com loading="lazy"
- [ ] Imagens convertidas para WebP
- [ ] Compressão Gzip/Brotli habilitada
- [ ] Cache headers configurados
- [ ] Fontes preloadadas
- [ ] Console.logs removidos do build
- [ ] Build analisado com visualizer

---

## 📚 Recursos Úteis

- [Web.dev Performance](https://web.dev/performance/)
- [React Performance](https://react.dev/learn/render-and-commit)
- [Vite Optimization](https://vitejs.dev/guide/features.html#build-optimizations)
- [Core Web Vitals](https://web.dev/vitals/)

---

## 🎓 Dicas Extras

1. **Use CDN** para assets estáticos (imagens, fontes)
2. **Minimize CSS** não usado
3. **Remova dependências** não utilizadas
4. **Monitore** o tamanho do bundle regularmente
5. **Teste** em conexões 3G para simular usuários reais

---

**O site já está bem otimizado com as implementações atuais!** 🚀

Para medir os resultados:

```bash
# Build de produção
npm run build

# Servir localmente
npm run preview

# Testar no PageSpeed Insights
# https://pagespeed.web.dev/
```
