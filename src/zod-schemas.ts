import { z } from "zod";

export const moduleDefinition = z.object({
  title: z.string(),
  description: z.string(),
  typeDefinition: z.any(),
});

export const definitionBase = z.object({
  title: z.string().min(5).max(50).describe("a title for the page"),
  description: z
    .string()
    .min(100)
    .max(300)
    .describe("a short abstract summary of the whole text provided."),
});
