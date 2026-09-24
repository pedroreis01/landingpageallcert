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
  // --- PESSOA FÍSICA (e-CPF) ---
  {
    id: 'ecpf-a1',
    category: 'pf',
    title: 'e-CPF A1',
    subtitle: 'Arquivo Digital (Instalado no computador)',
    badge: '🔥 MAIS VENDIDO',
    mediaType: 'a1',
    image: '/images/produtos/computador.png',
    description: 'Validade de 1 ano. Praticidade e segurança instaladas direto na sua máquina para assinar documentos e acessar sistemas.',
    featured: true,
    variants: [
      {
        years: 1,
        label: '1 Ano',
        price: 'R$ 120,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6Mjh9'
      }
    ]
  },
  {
    id: 'ecpf-a3-nuvem',
    category: 'pf',
    title: 'Bird ID (Nuvem)',
    subtitle: 'Certificado em Nuvem (Smartphone / App)',
    badge: 'Inovador',
    mediaType: 'birdid',
    image: '/images/produtos/bird.png',
    description: 'Acesse seu certificado pelo celular em qualquer lugar sem precisar de mídias físicas ou leitores.',
    featured: true,
    variants: [
      {
        transactions: 5,
        label: '5 Transações',
        price: 'R$ 50,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6NDB9'
      },
      {
        transactions: 50,
        label: '50 Transações',
        price: 'R$ 100,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6Mzh9'
      },
      {
        transactions: 5000,
        label: '5000 Transações',
        price: 'R$ 150,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6Mzl9'
      }
    ]
  },
  {
    id: 'ecpf-a3-somente',
    category: 'pf',
    title: 'e-CPF A3 (Somente Certificado)',
    subtitle: 'Para quem já possui Cartão ou Token compatível',
    mediaType: 'token',
    image: '/images/produtos/computador.png',
    description: 'Renove seu certificado gravando na sua mídia física existente.',
    variants: [
      {
        years: 1,
        label: '1 Ano',
        price: 'R$ 150,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6NDl9'
      },
      {
        years: 2,
        label: '2 Anos',
        price: 'R$ 160,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6MjJ9'
      },
      {
        years: 3,
        label: '3 Anos',
        price: 'R$ 180,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6MjV9'
      }
    ]
  },
  {
    id: 'ecpf-a3-token',
    category: 'pf',
    title: 'e-CPF A3 com Token USB',
    subtitle: 'Certificado + Dispositivo Token USB 3.0',
    badge: 'Alta Durabilidade',
    mediaType: 'token',
    image: '/images/produtos/pendrive.png',
    description: 'Certificado A3 gravado em Token USB portátil. Leve sua assinatura com segurança para qualquer computador.',
    featured: true,
    variants: [
      {
        years: 1,
        label: '1 Ano',
        price: 'R$ 240,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6NTB9'
      },
      {
        years: 2,
        label: '2 Anos',
        price: 'R$ 280,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6MTl9'
      },
      {
        years: 3,
        label: '3 Anos',
        price: 'R$ 310,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6MjF9'
      }
    ]
  },
  {
    id: 'ecpf-a3-cartao',
    category: 'pf',
    title: 'e-CPF A3 com Cartão Smartcard',
    subtitle: 'Certificado + Cartão com Chip ICP-Brasil',
    mediaType: 'cartao',
    image: '/images/produtos/cartao.png',
    description: 'Certificado gravado em cartão rígido com criptografia avançada.',
    variants: [
      {
        years: 1,
        label: '1 Ano',
        price: 'R$ 180,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6NTF9'
      },
      {
        years: 2,
        label: '2 Anos',
        price: 'R$ 200,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6NDF9'
      },
      {
        years: 3,
        label: '3 Anos',
        price: 'R$ 210,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6MjR9'
      }
    ]
  },
  {
    id: 'ecpf-a3-leitora',
    category: 'pf',
    title: 'e-CPF A3 com Cartão e Leitora',
    subtitle: 'Kit Completo: Cartão Smartcard + Leitora USB',
    mediaType: 'leitora',
    image: '/images/produtos/cartao-pendrive.png',
    description: 'Solução completa com cartão e a leitora USB pronta para uso imediato no seu computador.',
    variants: [
      {
        years: 1,
        label: '1 Ano',
        price: 'R$ 250,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6MTMn0='
      },
      {
        years: 2,
        label: '2 Anos',
        price: 'R$ 290,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6MjB9'
      },
      {
        years: 3,
        label: '3 Anos',
        price: 'R$ 310,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6IzfQ=='
      }
    ]
  },

  // --- PESSOA JURÍDICA (e-CNPJ) ---
  {
    id: 'ecnpj-a1',
    category: 'pj',
    title: 'e-CNPJ A1',
    subtitle: 'Arquivo Digital (Instalado no computador)',
    badge: '🔥 MAIS VENDIDO',
    mediaType: 'a1',
    image: '/images/produtos/computador.png',
    description: 'Indispensável para emissão de Notas Fiscais (NF-e, NFS-e) e acesso aos portais e-CAC e Conectividade Social.',
    featured: true,
    variants: [
      {
        years: 1,
        label: '1 Ano',
        price: 'R$ 200,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6N30='
      }
    ]
  },
  {
    id: 'ecnpj-a3-somente',
    category: 'pj',
    title: 'e-CNPJ A3 (Somente Certificado)',
    subtitle: 'Para quem já possui Cartão ou Token da Empresa',
    mediaType: 'token',
    image: '/images/produtos/computador.png',
    description: 'Renovação rápida gravando diretamente no Token ou Cartão já existente da sua empresa.',
    variants: [
      {
        years: 1,
        label: '1 Ano',
        price: 'R$ 210,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6NDV9'
      },
      {
        years: 2,
        label: '2 Anos',
        price: 'R$ 230,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6MTN9'
      },
      {
        years: 3,
        label: '3 Anos',
        price: 'R$ 260,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6MTR9'
      }
    ]
  },
  {
    id: 'ecnpj-a3-token',
    category: 'pj',
    title: 'e-CNPJ A3 com Token USB',
    subtitle: 'Certificado Empresarial + Token USB',
    badge: 'Corporativo',
    mediaType: 'token',
    image: '/images/produtos/pendrive.png',
    description: 'Máxima segurança para o sócio ou representante legal assinar pela empresa de qualquer máquina.',
    featured: true,
    variants: [
      {
        years: 1,
        label: '1 Ano',
        price: 'R$ 280,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6NDZ9'
      },
      {
        years: 2,
        label: '2 Anos',
        price: 'R$ 310,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6MTB9'
      },
      {
        years: 3,
        label: '3 Anos',
        price: 'R$ 380,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6MTZ9'
      }
    ]
  },
  {
    id: 'ecnpj-a3-cartao',
    category: 'pj',
    title: 'e-CNPJ A3 com Cartão Smartcard',
    subtitle: 'Certificado + Cartão Criptográfico',
    mediaType: 'cartao',
    image: '/images/produtos/cartao.png',
    description: 'Segurança reforçada em formato cartão para diretoria e departamento fiscal.',
    variants: [
      {
        years: 1,
        label: '1 Ano',
        price: 'R$ 220,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6NDd9'
      },
      {
        years: 2,
        label: '2 Anos',
        price: 'R$ 250,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6MTJ9'
      },
      {
        years: 3,
        label: '3 Anos',
        price: 'R$ 290,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6MTd9'
      }
    ]
  },
  {
    id: 'ecnpj-a3-leitora',
    category: 'pj',
    title: 'e-CNPJ A3 com Cartão e Leitora',
    subtitle: 'Kit Completo Empresarial',
    mediaType: 'leitora',
    image: '/images/produtos/cartao-pendrive.png',
    description: 'Equipe o setor contábil/financeiro com kit completo de leitora USB e cartão com chip.',
    variants: [
      {
        years: 1,
        label: '1 Ano',
        price: 'R$ 290,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6NDh9'
      },
      {
        years: 2,
        label: '2 Anos',
        price: 'R$ 320,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6MTF9'
      },
      {
        years: 3,
        label: '3 Anos',
        price: 'R$ 400,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6MTV9'
      }
    ]
  },

  // --- PROFISSIONAIS (OAB / CRM / CRC) ---
  {
    id: 'oab-a3-somente',
    category: 'oab',
    title: 'Certificado OAB / Profissional (Somente)',
    subtitle: 'Para advogados, médicos e contadores com mídia',
    badge: 'Desconto Profissional',
    mediaType: 'token',
    image: '/images/produtos/computador.png',
    description: 'Desconto exclusivo para advogados (OAB), médicos (CRM) e contadores (CRC). Validade de 3 anos.',
    featured: true,
    variants: [
      {
        years: 3,
        label: '3 Anos',
        price: 'R$ 120,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6NTh9'
      }
    ]
  },
  {
    id: 'oab-a3-token',
    category: 'oab',
    title: 'Certificado OAB com Token USB',
    subtitle: 'Certificado de 3 Anos + Token USB',
    badge: 'Mais Escolhido OAB',
    mediaType: 'token',
    image: '/images/produtos/pendrive.png',
    description: 'Essencial para peticionamento eletrônico no PJe, e-SAJ e assinar prontuários de saúde.',
    featured: true,
    variants: [
      {
        years: 3,
        label: '3 Anos',
        price: 'R$ 180,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6NTl9'
      }
    ]
  },
  {
    id: 'oab-a3-cartao',
    category: 'oab',
    title: 'Certificado OAB com Cartão Smartcard',
    subtitle: 'Certificado de 3 Anos + Cartão Criptográfico',
    mediaType: 'cartao',
    image: '/images/produtos/cartao.png',
    description: 'Grave na carteira da Ordem/Conselho ou no cartão smartcard AllCert.',
    variants: [
      {
        years: 3,
        label: '3 Anos',
        price: 'R$ 150,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6RwfQ=='
      }
    ]
  },
  {
    id: 'oab-a3-leitora',
    category: 'oab',
    title: 'Certificado OAB com Cartão e Leitora',
    subtitle: 'Kit Completo para Advogados e Médicos',
    mediaType: 'leitora',
    image: '/images/produtos/cartao-pendrive.png',
    description: 'Kit completo com leitora USB para usar a carteira do conselho profissional no notebook.',
    variants: [
      {
        years: 3,
        label: '3 Anos',
        price: 'R$ 225,00',
        checkoutUrl: 'https://arallcert.gestao.plus/loja/checkout?p=&item=eyJyYW1vX2F0aXZpZGFkZV9pZCI6MTIsImNhdGVnb3JpYV9pZCI6MiwiaXRlbV9pZCI6ExfQ=='
      }
    ]
  },

  // --- PROMOÇÃO ESPECIAL ---
  {
    id: 'promo-ecnpj-a1',
    category: 'promocao',
    title: 'OFERTA ESPECIAL: e-CNPJ A1',
    subtitle: 'Emissão 100% Online via Videoconferência',
    badge: 'Preço Imbatível R$ 144,90',
    mediaType: 'a1',
    image: '/images/produtos/computador.png',
    description: 'Super promoção por tempo limitado para emissão do e-CNPJ A1 para sua empresa.',
    featured: true,
    variants: [
      {
        years: 1,
        label: '1 Ano Promocional',
        price: 'R$ 144,90',
        checkoutUrl: 'https://wa.me/5531995246581?text=Ol%C3%A1!%20Vi%20o%20an%C3%BAncio%20do%20certificado%20digital%20por%20R%24%20144%2C90%20e%20gostaria%20de%20saber%20mais.'
      }
    ]
  }
];

export function getProductsByCategory(category: 'pf' | 'pj' | 'oab' | 'promocao'): Product[] {
  return productsList.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return productsList.filter(p => p.featured);
}

/** Seleciona produtos por id, preservando a ordem informada — usado nas landings de SEO. */
export function getProductsByIds(ids: readonly string[]): Product[] {
  return ids
    .map((id) => productsList.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));
}
