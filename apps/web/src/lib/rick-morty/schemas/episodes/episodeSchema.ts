import { z } from "zod";

export const episodeSchema = z
  .object({
    id: z.number().int().positive(),
    name: z.string(),
    air_date: z.string(),
    episode: z.string(),
    characters: z.array(z.string()),
    url: z.string(),
    created: z.string(),
  })
  .strict();

export type EpisodeType = z.infer<typeof episodeSchema>;

export const allEpisodesSchema = z.object({
  info: z
    .object({
      count: z.number(),
      pages: z.number(),
      /**
       * It refers to the **next page** of items as an `endpoint`
       */
      next: z.string().nullable(),
      prev: z.string().nullable(),
    })
    .strict(),
  results: z.array(episodeSchema),
});

export type AllEpisodesType = z.infer<typeof allEpisodesSchema>;
