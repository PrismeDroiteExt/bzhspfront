import { z } from "zod";

export const categoriesSchema = z.object({
  id: z.number(),
  name: z.string(),
  picture_url: z.string(),
  description: z.string(),
  id_subcategory: z.number().nullable(),
});

export type Categories = z.infer<typeof categoriesSchema>;
