import { z } from "zod";

export const productSchema = z.object({
  id: z.number(),
  fk_id_brands: z.number(),
  title: z.string(),
  description: z.string(),
  fk_category_id: z.number(),
  price: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
  discount: z.number().nullable(),
  colors: z.array(z.string()),
  sizes: z.array(z.number()),
  picture_url: z.string(),
});

export type Product = z.infer<typeof productSchema>;
