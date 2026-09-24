export const site = {
  name: 'AllCert',
  legalName: 'AllCert Certificados Digitais',
  description:
    'Emita seu Certificado Digital ICP-Brasil por videoconferência: pessoa física, jurídica e OAB. Autoridade de Registro em Belo Horizonte, atendimento em todo o Brasil.',
  url: 'https://allcert.com.br',
  email: 'contato@allcert.com.br',
  cnpj: '47.618.844/0001-64',
  phoneDisplay: '(31) 97151-7322',
  phoneHref: 'tel:+5531971517322',
  phoneSecondaryDisplay: '(31) 99524-6581',
  phoneSecondaryHref: 'tel:+5531995246581',
  phoneLd: '+55-31-97151-7322',
  phoneSecondaryLd: '+55-31-99524-6581',
  whatsapp:
    'https://wa.me/5531995246581?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20AllCert.',
  whatsappNumber: '5531995246581',
  city: 'Belo Horizonte - MG',
  address: 'R. São Paulo, 1071 - Sl 809 - Centro, Belo Horizonte - MG, 30170-131',
  addressLd: {
    streetAddress: 'R. São Paulo, 1071 - Sl 809 - Centro',
    addressLocality: 'Belo Horizonte',
    addressRegion: 'MG',
    postalCode: '30170-131',
    addressCountry: 'BR',
  },
  geo: { latitude: -19.9229526, longitude: -43.9409521 },
  openingHours: 'Segunda a sexta, das 9h às 18h',
  openingHoursLd: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  /** Autoridade Certificadora à qual a AllCert é vinculada como AR. */
  certificationAuthority: 'Soluti',
  registrationAuthorityNote:
    'A AllCert é Autoridade de Registro (AR) vinculada à Autoridade Certificadora Soluti, dentro da Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil).',
  gtmId: 'GTM-P4JFXQJT',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.0344607951815!2d-43.9409521!3d-19.9229526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6990fe04d5f1b%3A0xea16a531624d4c0f!2sAllCert%20Certificados%20Digitais%20LTDA!5e0!3m2!1spt-BR!2sbr!4v1790117514112!5m2!1spt-BR!2sbr',
} as const;

/** Frase curta de NAP usada em rodapés de artigo e blocos de contato. */
export const napLine =
  `${site.legalName} — ${site.address} · ${site.phoneDisplay} / ${site.phoneSecondaryDisplay} · CNPJ ${site.cnpj}`;

export const nav = [
  { href: '/', label: 'Início' },
  { href: '/certificado-digital-pessoa-fisica', label: 'Pessoa Física' },
  { href: '/certificado-digital-pessoa-juridica', label: 'Pessoa Jurídica' },
  { href: '/certificado-digital-oab', label: 'OAB' },
  { href: '/blog', label: 'Blog' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
] as const;

/** Landing pages de SEO — usadas no rodapé e nos blocos de links internos. */
export const solutionLinks = [
  { href: '/e-cnpj', label: 'Certificado e-CNPJ' },
  { href: '/e-cpf', label: 'Certificado e-CPF' },
  { href: '/certificado-digital-a1', label: 'Certificado A1' },
  { href: '/certificado-digital-a3', label: 'Certificado A3' },
  { href: '/certificado-digital-em-nuvem', label: 'Certificado em Nuvem' },
  { href: '/renovacao-certificado-digital', label: 'Renovação de Certificado' },
] as const;

export const localLinks = [
  { href: '/certificado-digital-belo-horizonte', label: 'Certificado Digital em Belo Horizonte' },
  { href: '/certificado-digital-centro-bh', label: 'Certificado Digital no Centro de BH' },
  { href: '/blog', label: 'Blog AllCert' },
] as const;
