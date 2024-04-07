import { z } from "zod";
import { SchemaDefinition } from "../types";
import { definitionBase } from "../zod-schemas";

const car: SchemaDefinition = {
  title: "car",
  description: "A schema to save car models",
  typeDefinition: definitionBase.extend({
    brand: z.string().describe("the manufacturer"),
    model: z.string().describe("the model name of the car"),
    engine: z.object({
      type: z.enum(["electric", "gasoline", "diesel", "other"]),
    }),
    keywords: z
      .array(z.string())
      .describe(
        "a list of max 10 keywords like 'sportscar', 'sedan', 'offroad' that could be helpful when searching"
      ),
    price: z
      .object({ value: z.number(), unit: z.enum(["usd", "eur"]) })
      .describe("the price of the car in euros"),
  }),
};

export type TypeDefinition = z.infer<typeof car.typeDefinition>;

export default car;
