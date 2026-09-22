---
version: alpha
name: AllCert
description: Confiança digital institucional — roxo da marca sobre base clara, com variante escura premium para hero.
colors:
  primary: "#8040F0"
  primary-hover: "#6B2FD6"
  primary-soft: "#F3EBFF"
  lavender: "#B79CFF"
  ink: "#1F1F1F"
  ink-soft: "#4A4A4A"
  neutral: "#F8F8F8"
  white: "#FFFFFF"
  border: "#E8E4F0"
typography:
  h1:
    fontFamily: Poppins
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  h2:
    fontFamily: Poppins
    fontSize: 2rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body-md:
    fontFamily: Poppins
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: Poppins
    fontSize: 0.8125rem
    fontWeight: 600
    letterSpacing: "0.04em"
rounded:
  sm: 8px
  md: 12px
  lg: 20px
  full: 999px
spacing:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: 14px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.white}"
    rounded: "{rounded.md}"
    padding: 14px
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 14px
  nav-link:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: 8px
  hero-dark-title:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: h1
    rounded: "{rounded.sm}"
    padding: 0px
  hero-dark-accent:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.lavender}"
    typography: h1
    rounded: "{rounded.sm}"
    padding: 0px
  card-product:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 24px
  badge-seal:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary}"
    typography: label
    rounded: "{rounded.full}"
    padding: 8px
  section-alt:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: 48px
---

## Overview

A AllCert vende **confiança** — é uma Autoridade de Registro ICP-Brasil. A identidade
parte da logo existente: **roxo `#8040F0`, preto `#1F1F1F` e branco**. A base do site é
clara (branco/off-white) para leitura e credibilidade institucional; o roxo é reservado
para ações e acentos; uma **variante escura (ink)** pode ser usada no hero para um ar
premium/moderno, sempre com texto branco e acentos em lavanda `#B79CFF` (o roxo puro
sobre preto não atinge contraste AA — por isso a lavanda existe).

## Colors

- **Primary (#8040F0):** extraída da logo. Uso exclusivo em CTA primário, links de
  destaque, ícones e selos. Nunca como fundo de blocos grandes de texto.
- **Primary-hover (#6B2FD6):** estado hover/ativo do CTA.
- **Primary-soft (#F3EBFF):** fundo de badges, selos e highlights leves.
- **Lavender (#B79CFF):** acento de texto sobre fundos escuros (contraste AA).
- **Ink (#1F1F1F):** texto principal e variante escura de hero/footer.
- **Neutral (#F8F8F8):** fundo de seções alternadas.
- **Border (#E8E4F0):** divisórias com leve viés roxo.

## Typography

**Poppins** (já é a fonte histórica da marca) reduzida a 3 pesos (400/600/700) —
hoje o site carrega 9. H1 com tracking negativo, corpo 1rem/1.6, labels em caixa alta
com tracking largo para selos e eyebrows.

## Layout

Container máx. 1200px, grid de 12 colunas, seções com respiro `xl` (48px+). Hero de
viewport parcial (~85vh) com imagem AVIF otimizada — **sem carrossel**.

## Elevation & Depth

Sombras suaves e roxas-tingidas apenas em cards interativos (`0 8px 30px rgba(128,64,240,.08)`).
Sem bordas duras pretas; usar `border`.

## Shapes

Raios médios (8–20px) — moderno sem ser "bubbly". Pills (`full`) só para badges/selos.

## Components

- `button-primary` é a única ação de alta ênfase por dobra (roxo, texto branco, AA 5,3:1).
- `badge-seal` carrega os selos de confiança (ICP-Brasil, ITI, Soluti).
- `card-product` branco com hover elevado; nunca fundo roxo cheio.

## Do's and Don'ts

- ✅ Roxo para ação; preto para texto; branco para respiro.
- ✅ Hero escuro opcional com acento lavanda.
- ❌ Nunca texto roxo `#8040F0` sobre fundo preto (contraste insuficiente — usar lavanda).
- ❌ Nunca mais de um CTA primário por dobra.
- ❌ Nunca gradientes arco-íris ou dourado sobre foto (dívida do template antigo).
