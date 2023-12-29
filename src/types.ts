import { ZodObject } from "zod";

export type SchemaDefinition = {
  ref: number;
  typeDefinition: ZodObject<any>;
  description: string;
  title: string;
};
