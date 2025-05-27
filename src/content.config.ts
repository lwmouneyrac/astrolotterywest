import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const schema = z.object({
    id: z.number(),
    title: z.string(),
    text: z.string().optional(),
    imageUrl: z.string().optional(),
    imageAlt: z.string().optional(),
    category: z.string().optional(),
    date: z.string().optional(),
    buttonLabel: z.string().optional(),
    buttonStyle: z.string().optional(),
    buttonUrl: z.string().optional(),
    secondButtonLabel: z.string().optional(),
    secondButtonStyle: z.string().optional(),
    secondButtonUrl: z.string().optional(),
    bgStyle: z.enum(['clear']).optional()
})

const post = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/pages/posts" }),
    schema
});

export const collections = { post };