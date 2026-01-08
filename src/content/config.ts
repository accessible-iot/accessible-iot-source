import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    authors: z.array(z.string()),
    venue: z.string(),
    venueType: z.enum(['conference', 'journal', 'workshop', 'poster']),
    year: z.number(),
    date: z.date(),
    themes: z.array(z.string()),
    keywords: z.array(z.string()).optional(),
    pdfUrl: z.string().optional(),
    pdfSourceUrl: z.string().optional(),
    doi: z.string().optional(),
    bibtex: z.string().optional(),
    grant: z.string(),
    featured: z.boolean().default(false),
    abstract: z.string().optional(),
    keyContribution: z.string().optional()
  })
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['publication', 'event', 'milestone', 'media']),
    relatedPublication: z.string().optional(),
    summary: z.string(),
    featured: z.boolean().default(false)
  })
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    navigationLabel: z.string().optional(),
    description: z.string().optional()
  })
});

export const collections = { publications, news, pages };
