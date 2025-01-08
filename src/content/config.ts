import { defineCollection, z } from "astro:content";

const blog = defineCollection({
        type: "content",
        schema: () =>
                z.object({
                        author: z.string().default("Kerimcan Balkan"),
                        pubDatetime: z.date(),
                        title: z.string(),
                        description: z.string(),
                }),
});

export const collections = { blog };
