import { defineCollection, z } from "astro:content";

const blog = defineCollection({
        type: "content",
        schema: ({ image }) =>
                z.object({
                        author: z.string().default("Buse Yigit"),
                        pubDatetime: z.date(),
                        title: z.string(),
                        ogImage: image()
                                .refine(img => img.width >= 1200 && img.height >= 630, {
                                        message: "OpenGraph image must be at least 1200 X 630 pixels!",
                                })
                                .or(z.string())
                                .optional(),
                        description: z.string(),
                }),
});

export const collections = { blog };
