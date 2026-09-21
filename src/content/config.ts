import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    category: z.enum([
      'Neighborhood & Dining',
      'Surf & Tides',
      'Architecture & Design',
      'Mindful Travel',
      'Host Recommendations',
      'Stayin in Canggu',
    ]),
    readTime: z.string().default('4 min read'),
    author: z.string().default('Casa Roca Team'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
