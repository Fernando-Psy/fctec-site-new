# 🎨 Paleta de Cores - FCTEC

## Nova Identidade Visual

A paleta de cores foi modernizada para criar uma identidade visual mais atraente e profissional, mantendo o azul `#4e83af` da logo como cor principal.

---

## 🔵 Azul Principal (Primary)

Baseado na cor da logo (#4e83af), é a cor principal da marca.

| Variação        | Hex           | Uso                                               |
| --------------- | ------------- | ------------------------------------------------- |
| primary-950     | `#1a2f42`     | Textos muito escuros, elementos de contraste alto |
| primary-900     | `#2d4a61`     | Textos escuros, títulos secundários               |
| primary-800     | `#3a5f7d`     | Títulos, elementos importantes                    |
| **primary-700** | **`#4e83af`** | **COR DA LOGO - Principal**                       |
| primary-600     | `#6a9dc4`     | Elementos interativos, links                      |
| primary-500     | `#85b5d5`     | Hover states, elementos secundários               |
| primary-400     | `#a3c9e0`     | Backgrounds suaves                                |
| primary-300     | `#c1dceb`     | Backgrounds muito suaves                          |
| primary-200     | `#d9eaf4`     | Backgrounds de destaque                           |
| primary-100     | `#ecf5fa`     | Backgrounds claros                                |
| primary-50      | `#f6fafe`     | Backgrounds muito claros                          |

**Onde usar:**

- Títulos com gradiente
- Botões principais em algumas seções
- Elementos de navegação
- Ícones importantes
- Sublinhados e destaques

---

## 🌊 Turquesa Moderna (Turquoise)

Cor análoga ao azul, traz frescor e modernidade.

| Variação          | Hex           | Uso                          |
| ----------------- | ------------- | ---------------------------- |
| turquoise-700     | `#0891b2`     | Elementos de ênfase          |
| **turquoise-600** | **`#06b6d4`** | **Cor secundária principal** |
| turquoise-500     | `#22d3ee`     | Hover states vibrantes       |
| turquoise-400     | `#67e8f9`     | Elementos decorativos        |
| turquoise-100     | `#cffafe`     | Backgrounds                  |
| turquoise-50      | `#ecfeff`     | Backgrounds suaves           |

**Onde usar:**

- Gradientes em combinação com azul principal
- Ícones de destaque (badges, dots)
- Elementos decorativos
- Backgrounds de seções alternadas

---

## 🔶 Coral Vibrante (Coral)

Cor complementar para CTAs e elementos que precisam chamar atenção.

| Variação      | Hex           | Uso                      |
| ------------- | ------------- | ------------------------ |
| coral-700     | `#ea580c`     | Hover states de botões   |
| **coral-600** | **`#f97316`** | **CTAs principais**      |
| coral-500     | `#fb923c`     | Elementos de destaque    |
| coral-400     | `#fdba74`     | Elementos suaves         |
| coral-100     | `#fed7aa`     | Backgrounds              |
| coral-50      | `#fff7ed`     | Backgrounds muito suaves |

**Onde usar:**

- Botões de Call-to-Action (WhatsApp, Contato, Solicitar Orçamento)
- Badges de destaque
- Elementos que precisam de atenção imediata
- Ícones de ação

---

## 💜 Violeta Elegante (Violet)

Cor secundária para adicionar sofisticação e variedade.

| Variação       | Hex           | Uso                     |
| -------------- | ------------- | ----------------------- |
| violet-700     | `#6d28d9`     | Elementos de ênfase     |
| **violet-600** | **`#7c3aed`** | **Destaques especiais** |
| violet-500     | `#8b5cf6`     | Hover states            |
| violet-400     | `#a78bfa`     | Elementos decorativos   |
| violet-100     | `#ddd6fe`     | Backgrounds             |
| violet-50      | `#f5f3ff`     | Backgrounds suaves      |

**Onde usar:**

- Gradientes em títulos (complementando azul e turquesa)
- Elementos decorativos de background
- Destaques especiais em cards

---

## ⚫ Neutros (Slate)

Mantidos da paleta anterior para textos e backgrounds.

| Variação  | Hex       | Uso                        |
| --------- | --------- | -------------------------- |
| slate-950 | `#020617` | Textos muito escuros       |
| slate-900 | `#0f172a` | Textos principais          |
| slate-800 | `#1e293b` | Textos secundários escuros |
| slate-700 | `#334155` | Textos secundários         |
| slate-600 | `#475569` | Textos normais             |
| slate-500 | `#64748b` | Textos suaves              |
| slate-400 | `#94a3b8` | Textos muito suaves        |
| slate-300 | `#cbd5e1` | Bordas                     |
| slate-200 | `#e2e8f0` | Bordas suaves              |
| slate-100 | `#f1f5f9` | Backgrounds                |
| slate-50  | `#f8fafc` | Backgrounds claros         |

---

## 🎨 Exemplos de Uso

### Gradientes Principais

```css
/* Título Hero */
background: linear-gradient(135deg, #4e83af 0%, #06b6d4 50%, #7c3aed 100%);

/* Botões Primários (Azul) */
background: linear-gradient(135deg, #4e83af 0%, #3a5f7d 100%);

/* Botões CTA (Coral) */
background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);

/* Background de Seção */
background: linear-gradient(135deg, #ffffff 0%, #f6fafe 50%, #ecfeff 100%);

/* Marca/Logo */
background: linear-gradient(135deg, #2d4a61 0%, #4e83af 50%, #06b6d4 100%);
```

### Sombras Coloridas

```css
/* Sombra Azul Principal */
box-shadow: 0 8px 24px rgba(78, 131, 175, 0.3);

/* Sombra Coral (CTAs) */
box-shadow: 0 8px 20px rgba(249, 115, 22, 0.4);

/* Sombra Turquesa */
box-shadow: 0 8px 20px rgba(6, 182, 212, 0.25);

/* Sombra Violeta */
box-shadow: 0 8px 20px rgba(124, 58, 237, 0.25);
```

---

## 📋 Guia de Aplicação

### Hierarquia Visual

1. **CTAs Principais** → Coral (#f97316)
2. **Elementos Principais** → Azul (#4e83af)
3. **Elementos Secundários** → Turquesa (#06b6d4)
4. **Destaques Especiais** → Violeta (#7c3aed)

### Combinações Recomendadas

- **Gradientes de Título**: Azul → Turquesa → Violeta
- **Botões Primários**: Azul → Azul Escuro
- **Botões de Ação**: Coral → Coral Escuro
- **Backgrounds**: Branco → Primary-50 → Turquoise-50
- **Badges/Tags**: Primary-100 com texto Primary-800

---

## ✅ Acessibilidade

Todas as combinações de cores foram pensadas para manter:

- Contraste adequado (WCAG AA mínimo)
- Legibilidade em diferentes dispositivos
- Diferenciação clara entre elementos interativos e estáticos

---

## 🔄 Migração

A migração das cores antigas foi realizada nos seguintes arquivos:

- `src/App.css` - Variáveis CSS principais
- `src/styles/neumorphism.css` - Cores do tema neumórfico
- `tailwind.config.js` - Paleta do Tailwind CSS
- Todos os componentes em `src/components/`

**Cores antigas substituídas:**

- `#2563eb` → `#4e83af` (azul principal)
- `#1d4ed8` → `#3a5f7d` (azul escuro)
- `#3b82f6` → `#6a9dc4` (azul médio)
- `#60a5fa` → `#85b5d5` (azul claro)
- `#eff6ff` → `#ecf5fa` (background azul)
- `#dbeafe` → `#d9eaf4` (background azul claro)

---

**Última atualização:** Janeiro 2026
