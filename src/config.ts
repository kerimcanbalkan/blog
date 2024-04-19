import type { Site } from "./types";

export const SITE: Site = {
        website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
        author: "Buse Yigit",
        desc: "A personal blog of mine.",
        title: "My blog",
        ogImage: "astropaper-og.jpg",
        lightAndDarkMode: true,
        postPerPage: 3,
        scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
        lang: "en", // html lang code. Set this empty and default will be "en"
        langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

