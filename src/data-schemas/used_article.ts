import { z } from "zod";
import { SchemaDefinition } from "../types";
import { definitionBase } from "../zod-schemas";

const used_article: SchemaDefinition = {
  title: "used_article",
  description:
    "A schema to save product offerings from pages like Craigslist or eBay",
  typeDefinition: definitionBase.extend({
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
  }),
};

export type TypeDefinition = z.infer<typeof used_article.typeDefinition>;

export default used_article;
