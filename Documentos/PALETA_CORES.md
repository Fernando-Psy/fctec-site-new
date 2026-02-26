# 🎨 Paleta de Cores - FCTEC Corporate

## Identidade Visual Corporativa

A paleta de cores foi atualizada para uma estética mais profissional e corporativa, utilizando tons neutros e sóbrios que transmitem confiança e seriedade.

---

## 🔷 Cinza/Slate (Principal)

Escala de cinzas profissionais - base da identidade visual corporativa.

| Variação      | Hex           | Uso                                   |
| ------------- | ------------- | ------------------------------------- |
| slate-950     | `#020617`     | Textos em negrito, elementos críticos |
| slate-900     | `#0f172a`     | Textos principais, títulos            |
| slate-800     | `#1e293b`     | Subtítulos, elementos importantes     |
| **slate-700** | **`#334155`** | **Botões e elementos de ação**        |
| slate-600     | `#475569`     | Textos secundários, ícones            |
| slate-500     | `#64748b`     | Textos terciários, placeholders       |
| slate-400     | `#94a3b8`     | Bordas, divisórias                    |
| slate-300     | `#cbd5e1`     | Bordas suaves                         |
| slate-200     | `#e2e8f0`     | Backgrounds de elementos              |
| slate-100     | `#f1f5f9`     | Backgrounds claros                    |
| slate-50      | `#f8fafc`     | Backgrounds de página                 |

**Onde usar:**

- Textos em todas as variações
- Backgrounds e surfaces
- Bordas e divisórias
- Botões principais
- Footer

---

## 🔵 Azul Corporativo (Accent)

Azul profissional e sóbrio - usado com parcimônia para acentos.

| Variação       | Hex           | Uso                                |
| -------------- | ------------- | ---------------------------------- |
| accent-900     | `#0c4a6e`     | Elementos de contraste máximo      |
| accent-800     | `#075985`     | Elementos de ênfase                |
| **accent-700** | **`#0369a1`** | **Principal - Links e acentos**    |
| accent-600     | `#0284c7`     | Hover states                       |
| accent-500     | `#0ea5e9`     | Elementos interativos              |
| accent-400     | `#38bdf8`     | Elementos decorativos (uso mínimo) |
| accent-300     | `#7dd3fc`     | Backgrounds muito suaves           |
| accent-200     | `#bae6fd`     | Backgrounds de destaque            |
| accent-100     | `#e0f2fe`     | Backgrounds sutis                  |
| accent-50      | `#f0f9ff`     | Backgrounds muito claros           |

**Onde usar:**

- Links e elementos clicáveis
- Indicadores de status ativo
- Acentos mínimos em títulos (::after)
- Hover states de botões secundários
- Elementos de navegação (usado com parcimônia)

---

## 🟢 Cores de Status (Muted)

Cores profissionais para indicar status e estados.

| Cor     | Hex       | Uso                      |
| ------- | --------- | ------------------------ |
| Success | `#059669` | Sucesso, confirmações    |
| Warning | `#d97706` | Avisos, atenção          |
| Danger  | `#dc2626` | Erros, ações destrutivas |

---

## 🎨 Exemplos de Uso Corporativo

### Backgrounds

```css
/* Background principal da página */
background: linear-gradient(to bottom, #ffffff 0%, #f8fafc 100%);

/* Background de cards */
background: #ffffff;
border: 1px solid #e2e8f0;

/* Background de seção alternada */
background: #f8fafc;
```

### Botões

```css
/* Botão primário */
background: #334155;
color: white;

/* Botão primário hover */
background: #1e293b;

/* Botão secundário */
background: white;
border: 2px solid #cbd5e1;
color: #334155;
```

### Textos

```css
/* Título principal */
color: #0f172a;

/* Texto corpo */
color: #475569;

/* Texto secundário */
color: #64748b;
```

### Acentos

```css
/* Link */
color: #0369a1;

/* Link hover */
color: #0284c7;

/* Linha de acento */
background: #0369a1;
```

---

## 📋 Guia de Aplicação Corporativa

### Hierarquia Visual

1. **Botões principais e CTAs** → Slate-700 (#334155)
2. **Links e elementos interativos** → Accent-700 (#0369a1)
3. **Textos principais** → Slate-900 (#0f172a)
4. **Textos secundários** → Slate-600 (#475569)

### Princípios de Design

- **Minimalismo**: Usar branco e cinzas como cores primárias
- **Contraste sutil**: Evitar contrastes muito fortes
- **Acentos estratégicos**: Azul corporativo usado com parcimônia
- **Profissionalismo**: Transmitir seriedade e confiança

---

## ✅ Acessibilidade

Todas as combinações de cores mantêm:

- Contraste WCAG AA (mínimo 4.5:1 para texto normal)
- Contraste WCAG AAA quando possível (7:1)
- Legibilidade em diferentes dispositivos
- Diferenciação clara entre elementos

---

## 🔄 Migração para Paleta Corporativa

**Mudanças principais:**

- Removidas cores vibrantes (turquesa, coral, violeta)
- Gradientes coloridos substituídos por tons neutros
- Foco em cinzas e azul corporativo sóbrio
- Background neutro (branco para cinza claro)

**Arquivos atualizados:**

- `src/App.css` - Variáveis CSS principais
- `src/styles/neumorphism.css` - Cores do tema
- `src/styles/critical.css` - CSS crítico
- `tailwind.config.js` - Paleta do Tailwind CSS
- `src/Section/Section.jsx` - Cores inline

---

**Última atualização:** Fevereiro 2026
**Estilo:** Corporativo e Profissional
