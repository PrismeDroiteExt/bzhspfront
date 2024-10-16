import { z } from "zod";

export const brandSchema = z.object({
  id: z.number(),
  name: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  logo_url: z.string(),
});

export type Brand = z.infer<typeof brandSchema>;
