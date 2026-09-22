# Especificação de Design: Modernização das Páginas de Produtos, Mídia Interativa e Animações - Allcert Certificados Digitais

**Data:** 2026-09-22  
**Status:** Proposto / Em Aprovação  
**Branch Alvo:** `feat/astro-modernizacao`

---

## 1. Visão Geral e Objetivos

O objetivo deste projeto é modernizar o site da AllCert (Astro 5 + Tailwind CSS v4), trazendo paridade completa de dados com a branch original `main` (todos os produtos de Pessoa Física, Pessoa Jurídica, OAB/CRM/CRC e Promoção) e elevando a experiência visual (UX/UI) com padrões de alta conversão B2B de 2026.

### Principais Entregáveis:
1. **Catálogo de Produtos Inteligente (Cards com Seletor Inline de Validade):**
   - Agrupamento dos produtos repetidos em cards únicos com seletores rápidos de tempo de validade (1, 2 ou 3 Anos).
   - Atualização dinâmica de preço e link de checkout do Gestão Plus via TypeScript/CSS ultraleve.
   - Filtros de categoria por mídia (A1 Digital, Nuvem Bird ID, Token USB, Cartão + Leitora).
   - Tabela comparativa expandível para decisões B2B.

2. **Mídia Interativa no Hero (Notebook + Assinatura Corporativa):**
   - Animação gráfica/GIF de alta qualidade mostrando um notebook executando a assinatura digital de contratos e documentos corporativos com chancela ICP-Brasil/Allcert.
   - Integração com elemento visual de validação em nuvem (smartphone Bird ID) ou Token USB.

3. **Animações Modernas e Microinterações:**
   - Microinterações de hover nos cards, botões e elementos de navegação (glow effect, elevação, transição suave).
   - Entradas de seção via `IntersectionObserver` ultraleve mantendo o carregamento rápido (Lighthouse 95+).

4. **Fidelidade de Dados com a `main`:**
   - Mapeamento total dos links de checkout e preços de:
     - `pessoa-fisica.html` (e-CPF A1, A3 Soluto/Certificado, A3 Token, A3 Cartão, A3 Leitora, Bird ID).
     - `pessoa-juridica.html` (e-CNPJ A1, A3 Token, A3 Cartão, A3 Leitora, Bird ID).
     - `oab-crm-crc.html` (Certificados de Classe Profissional).
     - `promocao.html` (Campanhas de preços especiais).

---

## 2. Arquitetura de Dados (`src/data/products.ts`)

Os produtos serão estruturados com variações para evitar poluição visual de cards idênticos:

```typescript
export interface ProductVariant {
  years?: number;
  transactions?: number;
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
```

---

## 3. Design dos Componentes

### 3.1. Hero Interativo (`src/components/Hero.astro`)
- **Visual:** Lado esquerdo com copy forte focado em assinatura corporativa com validade jurídica; Lado direito com mockup de Notebook interativo mostrando contrato corporativo assinado digitalmente + animação de validação ICP-Brasil.
- **Mídia:** Imagem/GIF gerado via Antigravity CLI com acabamento fotorrealista e paleta oficial (Roxo AllCert, Grafite e Branco).

### 3.2. Grid de Produtos Inteligente (`src/components/ProductCard.astro`)
- **Card UI:**
  - Imagem do produto em alta definição.
  - Título (ex.: `e-CPF A3 COM TOKEN USB`).
  - Pills de seleção de Validade (1 Ano | 2 Anos | 3 Anos) com alteração instantânea do valor e botão "Comprar".
  - Garantia de suporte e videoconferência inclusos.
  - Efeito hover: elevação 3D suave com iluminação de borda (border-glow) roxa.

### 3.3. Animações e Performance
- CSS Native transitions com utilitários Tailwind v4.
- Script inline minificado (0 dependências pesadas de frameworks client-side) para alternar preços e links no card.

---

## 4. Estrutura de Páginas Atualizada

- `/` -> Landing page com Hero interativo, destaques e fluxo de 3 passos.
- `/certificado-digital-pessoa-fisica` -> Catálogo completo e-CPF (A1, A3, Bird ID, Mídias).
- `/certificado-digital-pessoa-juridica` -> Catálogo completo e-CNPJ (A1, A3, Mídias).
- `/certificado-digital-oab` -> Catálogo dedicado OAB/CRM/CRC.
- `/promocao` -> Oferta especial ativas com contador/destaque.

---

## 5. Matriz de Teste e Validação

- [ ] Verificar se 100% dos links de checkout da `main` estão mapeados corretamente em `products.ts`.
- [ ] Testar a troca de variância (1/2/3 anos) nos cards de produto no desktop e mobile.
- [ ] Validar a taxa de desempenho no Google PageSpeed/Lighthouse (target: >90 performance).
- [ ] Testar a responsividade e animações em telas pequenas (mobile).
