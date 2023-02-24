import { z } from "zod";

export const characterSchema = z
  .object({
    id: z.number().int().positive(),
    name: z.string(),
    status: z.string(),
    species: z.string(),
    type: z.string(),
    gender: z.string(),

    origin: z
      .object({
        name: z.string(),
        url: z.string(),
      })
      .optional(),
    location: z
      .object({
        name: z.string(),
        url: z.string(),
      })
      .optional(),

    image: z.string(),
    episode: z.array(z.string()),
    url: z.string(),
    created: z.string(),
  })
  .strict();

export type CharacterType = z.infer<typeof characterSchema>;

export const allCharactersSchema = z.object({
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
  results: z.array(characterSchema),
});

export type AllCharactersType = z.infer<typeof allCharactersSchema>;
