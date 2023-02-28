import { z } from "zod";

export const locationSchema = z
  .object({
    id: z.number().int().positive(),
    name: z.string(),
    type: z.string(),
    dimension: z.string(),
    residents: z.array(z.string()),
    url: z.string(),
    created: z.string(),
  })
  .strict();

export type LocationType = z.infer<typeof locationSchema>;

export const allLocationsSchema = z.object({
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
  results: z.array(locationSchema),
});

export type AllLocationsType = z.infer<typeof allLocationsSchema>;
