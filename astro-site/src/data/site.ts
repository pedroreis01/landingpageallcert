export const site = {
  name: 'AllCert',
  legalName: 'AllCert Certificados Digitais',
  description:
    'Emita seu Certificado Digital ICP-Brasil por videoconferência: pessoa física, jurídica e OAB. Autoridade de Registro em Belo Horizonte, atendimento em todo o Brasil.',
  url: 'https://allcert.com.br',
  email: 'contato@allcert.com.br',
  phoneDisplay: '(31) 97151-7322',
  phoneHref: 'tel:+5531971517322',
  whatsapp:
    'https://wa.me/5531995246581?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20AllCert.',
  whatsappNumber: '5531995246581',
  city: 'Belo Horizonte - MG',
  gtmId: 'GTM-P4JFXQJT',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.4480209638274!2d-43.93795472599831!3d-19.947659438122463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699d5d14f8d19%3A0x31d58b155b1b366f!2sAllcert%20certificadora!5e0!3m2!1spt-BR!2sbr!4v1748611053417!5m2!1spt-BR!2sbr',
} as const;

export const nav = [
  { href: '/', label: 'Início' },
  { href: '/certificado-digital-pessoa-fisica', label: 'Pessoa Física' },
  { href: '/certificado-digital-pessoa-juridica', label: 'Pessoa Jurídica' },
  { href: '/certificado-digital-oab', label: 'OAB' },
  { href: '/#contato', label: 'Contato' },
] as const;
