import { z } from 'zod';

export const characterSchema = z.object({
  info: z.object({
    count: z.number(),
    pages: z.number(),
    /**
     * It refers to the **next page** of items as an `endpoint`
     */
    next: z.string().nullable(),
    prev: z.string().nullable(),
  }).strict(),
  results: z.array(
    z.object({
      id: z.number().int().positive(),
    }).strict()
  )
})

export type CharacterType = z.infer<typeof characterSchema>