import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    /** Título curto usado em cards e listagens (fallback: title). */
    cardTitle: z.string().optional(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Equipe AllCert'),
    category: z.enum([
      'Guias',
      'Pessoa Jurídica',
      'Pessoa Física',
      'Tipos de Certificado',
      'Renovação',
      'Belo Horizonte',
      'Advocacia',
    ]),
    tags: z.array(z.string()).default([]),
    keywords: z.array(z.string()).default([]),
    image: z.string().default('/images/hero-notebook-signature.jpg'),
    imageAlt: z.string().default('Certificado digital ICP-Brasil emitido pela AllCert'),
    featured: z.boolean().default(false),
    /** Perguntas que viram FAQPage JSON-LD no fim do artigo. */
    faq: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        }),
      )
      .default([]),
    /** Ids (slugs) de outros posts para o bloco "Leia também". */
    related: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
