# Plano de Implementação: Mapeamento Completo de Produtos, Hero Interativo e Animações

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar o catálogo completo de produtos (fidelidade total com a branch `main`), incluir mídia interativa no Hero (Notebook + Assinatura Corporativa) e adicionar animações modernas na landing page Astro 5.

**Architecture:** Mapeamento TypeScript estruturado em `src/data/products.ts`, componente de Card Inteligente com seletores dinâmicos de validade/mídia em vanilla JS ultraleve, animações Tailwind CSS v4 / CSS nativo, e renderização de mídia interativa no Hero.

**Tech Stack:** Astro 5, Tailwind CSS v4, TypeScript, Antigravity CLI (`agy`), Vanilla JS.

**Spec:** `docs/superpowers/specs/2026-09-22-produtos-midia-animacoes-design.md`

## Global Constraints

- Manter compatibilidade com Astro 5 estático (`output: 'static'`).
- Mapear 100% dos links de checkout do Gestão Plus presentes nos arquivos da `main` (`pessoa-fisica.html`, `pessoa-juridica.html`, `oab-crm-crc.html`, `promocao.html`).
- Zero bibliotecas JS pesadas no client (manter pontuação Lighthouse 95+).

## Review Focus

- **Preços e links de checkout desatualizados:** Garantir que cada variante de produto (1, 2, 3 anos) aponte para o token de checkout Gestão Plus exato da `main`.
- **Acessibilidade dos seletores inline:** Teclas de navegação (tab/space/enter) nos seletores de validade do card.
- **Responsividade do Notebook Hero em telas mobile:** O mockup deve se ajustar perfeitamente sem quebrar a tela.

---

### Task 1: Arquitetura de Dados dos Produtos Completa (`products.ts`)

**Files:**
- Create: `astro-site/src/data/products.ts`
- Modify: `astro-site/src/data/site.ts`

**Interfaces:**
- Consumes: Mapeamento de links da `main` (`pessoa-fisica.html`, `pessoa-juridica.html`, `oab-crm-crc.html`, `promocao.html`).
- Produces: `productsList`, `getProductByCategory(cat)` exportados para as páginas `.astro`.

- [ ] **Step 1: Criar o arquivo `products.ts` com todas as variantes de PF, PJ, OAB e Promoção**

```typescript
export interface ProductVariant {
  years?: number;
  transactions?: number;
  label: string;
  price: string;
  checkoutUrl: string;
}

export interface Product {
  id: string;
  category: 'pf' | 'pj' | 'oab' | 'promocao';
  title: string;
  subtitle: string;
  badge?: string;
  mediaType: 'a1' | 'birdid' | 'token' | 'cartao' | 'leitora';
  image: string;
  description: string;
  variants: ProductVariant[];
  featured?: boolean;
}

export const productsList: Product[] = [
  // Mapeamento extraído da main
];
```

- [ ] **Step 2: Verificar integridade dos dados executando build do Astro**

Run: `cd astro-site && npm run build`  
Expected: Build estático executado com sucesso (0 erros de tipo TypeScript).

- [ ] **Step 3: Commit**

```bash
git add astro-site/src/data/products.ts astro-site/src/data/site.ts
git commit -m "feat: adicionar arquitetura de dados completa de produtos em products.ts"
```

---

### Task 2: Componente Card de Produto Inteligente com Seletor Inline

**Files:**
- Create: `astro-site/src/components/ProductCard.astro`
- Modify: `astro-site/src/pages/certificado-digital-pessoa-fisica.astro`
- Modify: `astro-site/src/pages/certificado-digital-pessoa-juridica.astro`
- Modify: `astro-site/src/pages/certificado-digital-oab.astro`
- Modify: `astro-site/src/pages/promocao.astro`

**Interfaces:**
- Consumes: `Product` de `src/data/products.ts`
- Produces: Card interativo com botões de alternância de anos (1, 2, 3 anos) que atualiza preço e link instantaneamente sem reload.

- [ ] **Step 1: Criar o componente `ProductCard.astro`**

Componente com pills de validade (1, 2, 3 anos) e evento JS leve `onclick` trocando `dataset.price` e `dataset.checkout`.

- [ ] **Step 2: Atualizar páginas de categoria para usar o `ProductCard.astro`**

Substituir o grid simples pelo novo `ProductCard` inteligente nas páginas PF, PJ, OAB e Promoção.

- [ ] **Step 3: Testar build e renderização**

Run: `cd astro-site && npm run build`  
Expected: Build com sucesso gerando todas as páginas estáticas com o catálogo de produtos.

- [ ] **Step 4: Commit**

```bash
git add astro-site/src/components/ProductCard.astro astro-site/src/pages/*.astro
git commit -m "feat: componente ProductCard inteligente com seletores dinâmicos de validade"
```

---

### Task 3: Gerar e Integrar Mídia Interativa do Hero (Notebook + Assinatura Corporativa)

**Files:**
- Create/Generate: `astro-site/public/images/hero-notebook-signature.png` ou `.gif`
- Modify: `astro-site/src/components/Hero.astro`

**Interfaces:**
- Consumes: Antigravity CLI (`agy`) para renderizar mockup realista de Notebook + Assinatura Digital de Contrato B2B + Smartphone Bird ID.
- Produces: Hero visualmente atraente e moderno em `src/components/Hero.astro`.

- [ ] **Step 1: Gerar imagem/mídia via Antigravity CLI (`agy`)**

Run: `agy --dangerously-skip-permissions --print="A ultra-modern sleek dark-mode laptop screen showing a B2B corporate contract being digitally signed with a glowing green and purple ICP-Brasil digital certificate badge, high-tech security authentication UI, 8k resolution, minimalist desk background"`

- [ ] **Step 2: Atualizar `Hero.astro` com o novo mockup e efeitos de iluminação CSS**

Integrar a imagem gerada no `Hero.astro` com badge flutuante de "Assinatura Digital Com Validade Jurídica".

- [ ] **Step 3: Testar build**

Run: `cd astro-site && npm run build`  
Expected: Build finalizado com sucesso.

- [ ] **Step 4: Commit**

```bash
git add astro-site/public/images/ astro-site/src/components/Hero.astro
git commit -m "feat: Hero com mídia interativa de notebook e assinatura corporativa"
```

---

### Task 4: Animações Modernas e Microinterações de Tela

**Files:**
- Modify: `astro-site/src/layouts/Base.astro`
- Modify: `astro-site/src/components/ProductCard.astro`
- Modify: `astro-site/src/components/Steps.astro`

**Interfaces:**
- Consumes: Tailwind v4 utilities e JS nativo `IntersectionObserver`.
- Produces: Animações suaves de entrada `fade-in-up`, hover-effects 3D nos cards, e iluminação de bordas.

- [ ] **Step 1: Adicionar estilos de animação CSS no `Base.astro`**

CSS nativo para `.fade-in-on-scroll` e transições de hover nos botões e cards.

- [ ] **Step 2: Testar no navegador local e verificar build**

Run: `cd astro-site && npm run build`  
Expected: Build completo sem advertências ou erros.

- [ ] **Step 3: Commit**

```bash
git add astro-site/src/layouts/Base.astro astro-site/src/components/
git commit -m "feat: adicionar animações de scroll e microinterações modernas de UI"
```
