import { z } from "zod";

export const categorieSchema = z.object({
  id: z.number(),
  name: z.string(),
  picture_url: z.string(),
  description: z.string(),
  id_subcategory: z.number().nullable(),
});

export type Categorie = z.infer<typeof categorieSchema>;
