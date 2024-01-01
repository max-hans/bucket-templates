import { z } from "zod";

export const moduleDefinition = z.object({
  ref: z.number(),
  title: z.string(),
  description: z.string(),
  typeDefinition: z.any(),
});
