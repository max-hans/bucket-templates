import { z } from "zod";
import { SchemaDefinition } from "../types";
import { definitionBase } from "../zod-schemas";

const recipe: SchemaDefinition = {
  title: "recipe",
  description:
    "A schema to save recipes including the ingredients and individual steps",
  typeDefinition: definitionBase.extend({
    portions: z
      .number()
      .describe("the amount of portions that this recipe is calculated for"),
    keywords: z
      .array(z.string())
      .describe(
        "a list of max 10 keywords like 'vegan', 'beef', 'vegetarian', 'summer dish' that could be helpful when searching. extract them from the recipe or make up your own based on the dish. make them all lower-case"
      ),
    ingredients: z
      .array(z.object({ name: z.string(), quantity: z.string() }))
      .describe("all the ingredients needed for the recipe"),
    steps: z.array(z.string()),
  }),
};

console.log(recipe.typeDefinition.shape);

export type TypeDefinition = z.infer<typeof recipe.typeDefinition>;

export default recipe;
