/* used to all schemas in a serialized form */

import { SchemaDefinition, SerializedSchemaDefinition } from "./types";

import loadSchemas from "./schemas";
import { serializeSchema } from "./helpers";

const schemas = await loadSchemas();

export const getSerializedSchemas = (): SerializedSchemaDefinition[] =>
  schemas.map((elem: SchemaDefinition) => serializeSchema(elem));
