import { z, defineCollection } from "astro:content";

const musicCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    genre: z.array(z.string()),
    description: z.string(),
    tracklist: z.array(
      z.object({
        name: z.string(),
        link: z.string(),
        length: z.string(),
      })
    ),
    links: z.object({
      bandcamp: z.string(),
      spotify: z.string().optional(),
      apple: z.string().optional(),
    }),
  }),
});

export const collections = {
  music: musicCollection,
};
