import zodToJsonSchema from "zod-to-json-schema";
import { SchemaDefinition, SerializedSchemaDefinition } from "./types";
import { join } from "path";

import stringHash from "string-hash";
import loadSchemas from "./schemas";
import { serializeSchema } from "./helpers";

const encoder = new TextEncoder();
const schemas = await loadSchemas();

const serialized = schemas.map((elem: SchemaDefinition) =>
  serializeSchema(elem)
);

Promise.all(
  serialized.map((f) => {
    const s = JSON.stringify(f);
    const data = encoder.encode(s);
    Bun.write(join(".", "output", `${f.title}.json`), data);
  })
);
