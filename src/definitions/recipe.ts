import { z } from "zod";
import { SchemaDefinition } from "../types";
export const typeDefinition = z.object({
  title: z.string().describe("the title of the recipe"),
  description: z
    .string()
    .describe("a description, just use the one from the original text"),
  keywords: z
    .array(z.string())
    .describe(
      "a list of max 10 keywords like 'vegan', 'beef', 'vegetarian', 'summer' that could be helpful when searching. extract them from the recipe"
    ),
  ingredients: z.array(z.object({ name: z.string(), quantity: z.string() })),
  steps: z.array(z.string()),
});

export type TypeDefinition = z.infer<typeof typeDefinition>;

const recipe: SchemaDefinition = {
  ref: 1,
  title: "recipe",
  description:
    "A schema to save recipes including the ingredients and individual steps",
  typeDefinition,
};

export default recipe;
