import { site } from '../data/site';

/**
 * Builders de JSON-LD centralizados para garantir NAP idêntico
 * (nome, endereço, telefones, CNPJ) em todas as páginas do site.
 */

const postalAddress = {
  '@type': 'PostalAddress',
  ...site.addressLd,
};

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  logo: `${site.url}/images/logoAllcert.png`,
  image: `${site.url}/images/logoAllcert.png`,
  email: site.email,
  telephone: site.phoneLd,
  taxID: site.cnpj,
  vatID: site.cnpj,
  description: site.description,
  address: postalAddress,
  areaServed: { '@type': 'Country', name: 'Brasil' },
  parentOrganization: {
    '@type': 'Organization',
    name: `Autoridade Certificadora ${site.certificationAuthority}`,
  },
  memberOf: {
    '@type': 'Organization',
    name: 'ICP-Brasil',
    url: 'https://www.gov.br/iti/pt-br',
  },
};

export const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#localbusiness`,
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  image: `${site.url}/images/logoAllcert.png`,
  logo: `${site.url}/images/logoAllcert.png`,
  email: site.email,
  telephone: site.phoneLd,
  description: site.description,
  priceRange: 'R$',
  taxID: site.cnpj,
  address: postalAddress,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  openingHoursSpecification: site.openingHoursLd,
  areaServed: [
    { '@type': 'City', name: 'Belo Horizonte' },
    { '@type': 'State', name: 'Minas Gerais' },
    { '@type': 'Country', name: 'Brasil' },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: site.phoneLd,
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
    {
      '@type': 'ContactPoint',
      telephone: site.phoneSecondaryLd,
      contactType: 'sales',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
  ],
};

export interface FaqEntry {
  q: string;
  a: string;
}

export function faqLd(items: readonly FaqEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export interface Crumb {
  name: string;
  href: string;
}

export function breadcrumbLd(crumbs: readonly Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: new URL(crumb.href, site.url).href,
    })),
  };
}

export interface ServiceLdInput {
  name: string;
  description: string;
  serviceType: string;
  path: string;
  /** Cidades/regiões priorizadas para SEO local desta página. */
  areaServed?: readonly string[];
}

export function serviceLd({
  name,
  description,
  serviceType,
  path,
  areaServed = ['Belo Horizonte', 'Minas Gerais', 'Brasil'],
}: ServiceLdInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    url: new URL(path, site.url).href,
    provider: {
      '@type': 'ProfessionalService',
      '@id': `${site.url}/#localbusiness`,
      name: site.legalName,
      telephone: site.phoneLd,
      address: postalAddress,
    },
    areaServed: areaServed.map((area) => ({ '@type': 'AdministrativeArea', name: area })),
    audience: { '@type': 'Audience', audienceType: 'Empresas e profissionais no Brasil' },
  };
}

export interface ArticleLdInput {
  title: string;
  description: string;
  path: string;
  pubDate: Date;
  updatedDate?: Date;
  image: string;
  keywords?: readonly string[];
  section?: string;
}

export function articleLd({
  title,
  description,
  path,
  pubDate,
  updatedDate,
  image,
  keywords = [],
  section,
}: ArticleLdInput) {
  const url = new URL(path, site.url).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: new URL(image, site.url).href,
    datePublished: pubDate.toISOString(),
    dateModified: (updatedDate ?? pubDate).toISOString(),
    inLanguage: 'pt-BR',
    articleSection: section,
    keywords: keywords.join(', '),
    author: {
      '@type': 'Organization',
      name: site.legalName,
      url: site.url,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.legalName,
      logo: {
        '@type': 'ImageObject',
        url: `${site.url}/images/logoAllcert.png`,
      },
    },
  };
}

export function blogLd(path = '/blog') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog AllCert — Certificado Digital sem complicação',
    description:
      'Guias práticos sobre certificado digital ICP-Brasil: e-CNPJ, e-CPF, A1, A3, nuvem, OAB e renovação, escritos pela equipe da AllCert em Belo Horizonte.',
    url: new URL(path, site.url).href,
    inLanguage: 'pt-BR',
    publisher: {
      '@type': 'Organization',
      '@id': `${site.url}/#organization`,
      name: site.legalName,
    },
  };
}
