import {defineCollection, z} from "astro:content";

export const collections = {
    posts: defineCollection(
        {
            schema: z.object({
                draft: z.boolean().default(false),
                title: z.string(),
                seo_title: z.string(),
                description: z.string(),
                seo_description: z.string(),
                date: z.string(),
                seo_date: z.date().transform((str)=> new Date(str).toISOString()),
                author: z.enum(['Anas Ouardini']).default('Anas Ouardini'),
                category: z.array(z.enum(['JavaScript', 'JS-Questions', 'Reactjs', 'Performance'])),
                image: z.object({url: z.string(), alt: z.string()}).optional(),
                sharing_image: z.object({url: z.string(), alt: z.string()}).optional(),
                keywords: z.array(z.string()).optional(),
                todo: z.array(z.string()).optional(),
            })
        }
    )
}