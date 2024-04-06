import { z } from "zod";

export const moduleDefinition = z.object({
  title: z.string(),
  description: z.string(),
  typeDefinition: z.any(),
});
