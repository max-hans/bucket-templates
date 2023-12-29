import { z } from "zod";
import { SchemaDefinition } from "../types";

export const typeDefinition = z.object({
  title: z.string().describe("the name of the product"),
  description: z
    .string()
    .describe("a description, just use the one from the original text"),
  keywords: z
    .array(z.string())
    .describe(
      "a list of max 10 relevant keywords or tags that describe the product"
    ),
  price: z.number().describe("the price of the product"),
  price_evaluation: z
    .enum(["high", "ok", "low"])
    .describe(
      "an estimation whether the price is justified for the product based on usage and the overall market"
    ),
});

export type TypeDefinition = z.infer<typeof typeDefinition>;

const used_article: SchemaDefinition = {
  ref: 2,
  title: "used_article",
  description:
    "A schema to save product offerings from pages like Craigslist or eBay",
  typeDefinition,
};

const a = typeof typeDefinition;

export default used_article;
