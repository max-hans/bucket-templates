import { ZodObject, z } from "zod";
import { JsonSchema7Type } from "zod-to-json-schema";

export type SchemaDefinition = {
  ref: number;
  typeDefinition: ZodObject<any>;
  description: string;
  title: string;
};

export type SerializedSchemaDefinition = Omit<
  SchemaDefinition,
  "typeDefinition"
> & { typeDefinition: JsonSchema7Type; hash: number };
