import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    category: z.enum(['Canggu Guide', 'Travel Tips', 'Staying in Canggu']),
    author: z.string().default('Casa Roca'),
  }),
});

export const collections = { blog };