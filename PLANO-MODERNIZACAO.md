# Plano de Modernização — Site AllCert (landingpageallcert)

**Data:** 22/09/2026 · **Autor:** Hermes (análise + pesquisa) · **Repo:** `pedroreis01/landingpageallcert`

---

## 1. Diagnóstico do estado atual

### 1.1 Stack atual (o que existe hoje)

Site estático de 5 páginas (`index`, `promocao`, `pessoa-fisica`, `pessoa-juridica`, `oab-crm-crc`) construído sobre o **template gratuito "TemplateMo Mexant"** (template de ~2019) com:

| Camada | Hoje | Peso | Problema |
|---|---|---|---|
| CSS framework | Bootstrap min.css | 164 KB | 90% não usado |
| JS runtime | jQuery (3 arquivos: full + min + slim) | ~600 KB | Desnecessário em 2026 |
| Sliders | Swiper 7 (CDN) + OwlCarousel + flex-slider | ~200 KB | **3 libs de slider para 1 carrossel** |
| Outros JS | isotope.js + isotope.min.js (duplicado), tabs.js, video.js | ~700 KB | tabs.js sozinho = 460 KB; isotope duplicado |
| CSS extra | fontawesome (116 KB) + animate.css (60 KB) + template (40 KB) + FA 4.5 via CDN no footer | ~220 KB | 2 FontAwesome diferentes carregados |
| Fontes | Poppins com **9 pesos** via Google Fonts | — | Só 2–3 pesos são usados |
| Imagens | slide-01 (736 KB), slide-03 (656 KB), logo (124 KB PNG) | ~1,7 MB | Sem WebP/AVIF, sem lazy load, sem dimensões |
| **Total repo** | | **~5,6 MB** | LCP estimado ruim em 3G/4G |

### 1.2 SEO técnico — achados objetivos

- ❌ `meta description` **vazia em todas as páginas**
- ❌ `<title>` **duplicado** ("AllCert - Certificados Digitais") em 4 das 5 páginas
- ❌ Zero Open Graph / Twitter Cards (compartilhar no WhatsApp/LinkedIn sai sem imagem)
- ❌ Zero dados estruturados (JSON-LD): nem `Organization`, nem `LocalBusiness`, nem `FAQPage`
- ❌ Sem `sitemap.xml` e sem `robots.txt`
- ❌ Sem canonical
- ❌ Hero usa `<h2>` (deveria ser `<h1>` único por página); hierarquia h6→h4 nas seções
- ❌ `alt=""` vazio em todas as imagens (inclusive logo e selos ICP-Brasil/ITI)
- ❌ Link de telefone quebrado: `href="tel:+553****7322"`
- ❌ Carrossel de hero (3 slides) — padrão abandonado: o slide 2 e 3 quase nunca são vistos, e o LCP fica refém de imagem de 736 KB
- ⚠️ Iframe do Google Maps sem `loading="lazy"`
- ✅ GTM instalado (`GTM-P4JFXQJT`) — manter
- ✅ `lang="pt-br"` (trocar para `pt-BR`)

### 1.3 UI/UX — por que parece "antigo"

1. **Cara de template genérico**: gradiente + slider + ícones FA é a assinatura visual de milhares de sites 2018–2020. Nada transmite "autoridade de registro ICP-Brasil".
2. **Sem CTA acima da dobra**: os 3 slides têm só texto institucional — nenhum botão "Emitir agora" / "Falar no WhatsApp".
3. **Sem prova de confiança na primeira dobra**: selos ICP-Brasil, ITI e Soluti estão escondidos no rodapé, em logos esmaecidos.
4. **Sem prova social**: zero avaliações, números, depoimentos ou casos.
5. **Sem FAQ** — e certificado digital é um produto com dúvidas recorrentes (validade, A1 vs A3, videoconferência, preço, renovação).
6. **Tipografia e espaçamento** sem sistema: pesos arbitrários, hierarquia fraca.
7. **Acessibilidade**: contraste do texto dourado sobre foto, menu mobile com trigger sem `aria`, foco de teclado invisível.

---

## 2. Decisão de stack (pesquisa 2026)

### Veredito: **Astro 5 + Tailwind CSS v4 + TypeScript**, deploy estático (Cloudflare Pages ou Vercel)

| Critério | Astro 5 ✅ | Next.js 15/16 | React (Vite SPA) |
|---|---|---|---|
| JS enviado numa landing page | **0–9 KB** (ilhas opcionais) | ~70–90 KB (runtime React + router) mesmo em página 100% estática | 150 KB+ e conteúdo depende de JS |
| Lighthouse típico (content site) | 95–100 | 75–90 | ruim sem SSR |
| LCP medido em benchmarks | 0,8–1,2s | 1,4–2,8s | — |
| SEO/GEO (AI crawlers com timeout de 2–4s) | **HTML completo sempre** | RSC ajuda, mas `'use client'` pode esconder conteúdo | ❌ conteúdo invisível para crawler |
| Fit para este projeto (5 páginas + futuro blog/FAQ) | **Perfeito** — content collections, MDX, sitemap, zero app | Overkill — pagar "React tax" sem usar nada de app | Errado para SEO |
| Quando seria a escolha | **agora** | se um dia o site virar app/área logada no mesmo stack | nunca para landing page |

**Resumo da pesquisa:** consenso dos benchmarks 2025–2026 (Sparkable, SolvSpot, Mintec, dev.to migrations): site de conteúdo/marketing → Astro; app com auth/dinâmica → Next.js. A AllCert é 100% marketing/conteúdo — não há nenhum fluxo de app. Migrações WordPress/Next → Astro reportam −90–96% de JS e Lighthouse 62–78 → 98–100.

**Complementos da stack:**
- **Tailwind CSS v4** (design tokens via `@theme`) — substitui Bootstrap + 5 CSS de template
- **Astro Content Collections + MDX** — blog/cluster SEO futuro com frontmatter validado
- **Ilhas React** (`client:visible`) só onde houver interação real: FAQ (accordion), formulário, comparador de planos
- **`@astrojs/sitemap`**, `astro-robots-txt`, **Schema JSON-LD** por página, **Sharp** para AVIF/WebP responsivo
- **Sem jQuery, sem carrossel** — hero estático único
- Deploy: **Cloudflare Pages** (grátis, edge, ótimo TTFB no Brasil) ou Vercel; preview por PR

---

## 3. Direção de UI/UX — "modernidade + confiança"

**Paleta travada (da logo): roxo `#8040F0`, preto `#1F1F1F` e branco** — extraídas da
`logoAllcert.png` via análise de pixels. Tokens oficiais e componentes estão formalizados
em [`DESIGN.md`](DESIGN.md) (validado com `npx @google/design.md lint`: 0 erros, contraste
WCAG AA aprovado). Referências de estilo do catálogo (skill popular-web-designs): **Coinbase**
(institucional, trust-focused), **Stripe** (premium, clareza), **Wise** (direto, confiança) —
aplicadas com a paleta da marca, nada de dark mode neon.

### Sistema visual (resumo — fonte da verdade: `DESIGN.md`)

- **Tema:** claro, muito espaço em branco; **variante escura (ink) opcional para o hero** com
  texto branco e acento lavanda `#B79CFF` (roxo puro sobre preto falha contraste AA — por isso
  a lavanda existe)
- **Cores:** primary `#8040F0` (CTA/acentos), primary-hover `#6B2FD6`, primary-soft `#F3EBFF`
  (badges/selos), ink `#1F1F1F`, neutral `#F8F8F8`, border `#E8E4F0`
- **Tipografia:** **Poppins** (fonte histórica da marca) reduzida a 3 pesos (400/600/700) —
  hoje o site carrega 9
- **Regra de ouro da marca:** roxo é para ação, preto é para texto, branco é para respiro;
  nunca texto roxo sobre fundo preto (usar lavanda)
- **Componentes-chave:**
  1. **Hero único** (sem slider): H1 com proposta de valor ("Emita seu Certificado Digital por videoconferência, hoje"), subhead, **2 CTAs** (Emitir agora · Falar no WhatsApp), foto/ilustração real otimizada em AVIF com `fetchpriority="high"`
  2. **Barra de confiança logo abaixo do hero:** selos ICP-Brasil, ITI, Soluti, "Autoridade de Registro" — visível sem scroll
  3. **Cards de produto** com preço/validade e CTA próprio
  4. **Prova social:** avaliações Google (reais), números (certificados emitidos, anos de mercado)
  5. **Como funciona em 3 passos** (escolha → videoconferência → receba)
  6. **FAQ com schema** (6–10 perguntas reais)
  7. **Footer institucional:** CNPJ, endereço, política de privacidade/LGPD, canais
- **Acessibilidade:** WCAG AA de contraste validado via `npx @google/design.md lint`, foco visível, `aria` no menu, alt descritivo em tudo
- **WhatsApp float:** manter, mas como componente com `aria-label`, sem estilo inline

---

## 4. Plano de SEO + GEO (Generative Engine Optimization)

### 4.1 SEO técnico (checklist de implementação)

- [ ] Titles/descriptions únicos por página (fórmula: `Produto + benefício + cidade | AllCert`)
- [ ] Canonical, OG (`og:title/description/image` 1200×630), Twitter Cards
- [ ] `sitemap.xml` + `robots.txt` (liberar GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
- [ ] `/llms.txt` (mapa markdown das páginas citáveis — padrão 2026 para agentes/LLMs)
- [ ] Redirects 301 de qualquer URL antiga que mudar; manter `promocao.html` ou redirecionar
- [ ] Corrigir `tel:` quebrado → `tel:+5531971517322`
- [ ] Imagens: AVIF/WebP + `srcset`, dimensões declaradas (zero CLS), lazy em tudo exceto hero
- [ ] Fontes: 1 família, 2–3 pesos, `font-display: swap`, preload do subset
- [ ] Budget de performance: **LCP < 2,0s · INP < 200ms · CLS < 0,05 · JS total < 50 KB** — Lighthouse CI no PR
- [ ] `lang="pt-BR"`, `loading="lazy"` no iframe do Maps (ou imagem estática com link)

### 4.2 Dados estruturados (JSON-LD por página)

| Página | Schemas |
|---|---|
| Todas | `Organization` (CNPJ, logo, sameAs → redes/Google Business/Wikidata), `WebSite` |
| Home | `LocalBusiness` (endereço BH, geo, horário, telefone), `FAQPage` |
| PF / PJ / OAB | `Service` + `Offer` (preço, moeda, validade) + `BreadcrumbList` + `FAQPage` específico |
| Promoção | `Offer` com `priceValidUntil` + `Service` |
| Blog (futuro) | `Article` com autor e data |

### 4.3 GEO — ser citado por ChatGPT/Perplexity/Gemini/AI Overviews

1. **Quick-answer block** no topo de cada página de produto: 2–3 frases que respondem diretamente "o que é / quanto custa / como emite" — texto que uma LLM pode citar literalmente
2. **FAQ real com `FAQPage` schema** (A1 vs A3, validade, videoconferência, renovação, aceitação em cartório/receita)
3. **Definições com `DefinedTerm`** num mini-glossário (certificado digital, ICP-Brasil, AR, AC)
4. **E-E-A-T explícito:** página "Sobre" com CNPJ, endereço, vínculo com Soluti (com link), função de Autoridade de Registro, política de privacidade
5. **Cluster de conteúdo** (Fase 4, MDX): guias por intenção — "certificado digital pessoa física preço", "como emitir certificado digital por videoconferência", "certificado digital OAB", "validade certificado A1"
6. **Recência:** datas de atualização visíveis; conteúdo legislativo revisado (ICP-Brasil/MP 2.200-2)
7. Medição: acompanhar citações via buscas periódicas + Search Console

---

## 5. Arquitetura de páginas (fase de build)

```
/                    → Home (hero + confiança + produtos + como funciona + prova + FAQ + contato)
/certificado-digital-pessoa-fisica/
/certificado-digital-pessoa-juridica/
/certificado-digital-oab/          (engloba CRM/CRC ou /certificado-digital-oab-crm-crc)
/promocao/                         (301 de promocao.html — preservar tráfego de anúncio)
/sobre/
/contato/
/privacidade/
/obrigado/                         (thank-you de formulário — conversão)
/blog/ + /blog/[slug]              (Fase 4)
llms.txt · sitemap.xml · robots.txt
```

**Redirects 301 obrigatórios:** `index.html→/`, `pessoa-fisica.html→/certificado-digital-pessoa-fisica/`, `pessoa-juridica.html→…`, `oab-crm-crc.html→…`, `promocao.html→/promocao/` (a campanha de Meta Ads aponta para ela — **não quebrar**).

---

## 6. Fases de execução

| Fase | Escopo | Critério de saída |
|---|---|---|
| **0 — Fundação** (2–3 dias) | Decisões (domínio, URLs, redirects), repo novo ou branch `astro`, Astro+Tailwind+TS, `DESIGN.md` com tokens (lint WCAG ok), deploy preview | Preview no ar com tokens aplicados |
| **1 — Componentes + Home** (3–4 dias) | Hero, barra de selos, cards produto, passos, FAQ, footer, WhatsApp; home completa com conteúdo real | Lighthouse ≥ 95 mobile na home |
| **2 — Páginas de produto** (3–4 dias) | PF, PJ, OAB, Promoção (com preço R$ 144,90 vigente), Sobre, Contato, Privacidade, Obrigado; schema por página | Todas as páginas com meta/OG/JSON-LD válidos (validator.schema.org) |
| **3 — SEO/GEO técnico** (1–2 dias) | sitemap, robots, llms.txt, redirects 301, correção tel:, Search Console + Bing, IndexNow | Crawl sem erros; redirects testados |
| **4 — Conteúdo/cluster** (contínuo) | 4–6 guias MDX por intenção + glossário DefinedTerm | 1º cluster publicado |
| **5 — Lançamento** | DNS, QA final (Lighthouse CI, broken links, formulário, GTM), monitoramento de CWV | Go-live sem regressão de tráfego |

**Esforço estimado:** 2–3 semanas (site de 5–8 páginas; migrações similares reportam 2–4 semanas para ~20 páginas).

## 7. KPIs e riscos

- **KPIs:** Lighthouse ≥ 95 · LCP < 2s · 0 erros Search Console · CTR orgânico · conversão WhatsApp/form · citações em AI engines (checagem mensal)
- **Risco #1:** quebrar a URL `/promocao.html` usada em anúncio → mitigar com 301 e teste antes do DNS
- **Risco #2:** perder o GTM/eventos → manter `GTM-P4JFXQJT` e testar no preview
- **Risco #3:** conteúdo com claim jurídico errado (ICP-Brasil/validade) → revisão de compliance antes do ar
