import { z } from "zod";
import { SchemaDefinition } from "../types";
import { definitionBase } from "../zod-schemas";

const bicycle: SchemaDefinition = {
  title: "bicycle",
  description: "A schema to save bicycles",
  typeDefinition: definitionBase.extend({
    brand: z.string().describe("the manufacturer"),
    model: z.string().describe("the model name of the bicycle"),
    type: z.object({
      type: z.enum(["road", "mountainbike", "gravel", "triathlon", "other"]),
    }),
    frameMaterial: z.object({
      type: z.enum(["steel", "aluminium", "carbon", "titanium"]),
    }),

    price: z
      .object({ value: z.number(), unit: z.enum(["usd", "eur"]) })
      .describe("the price of the bicycle in euros or usd"),
  }),
};

export type TypeDefinition = z.infer<typeof bicycle.typeDefinition>;

export default bicycle;
