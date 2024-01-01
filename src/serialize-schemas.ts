import zodToJsonSchema from "zod-to-json-schema";
import { SerializedSchemaDefinition } from "./types";
import { join } from "path";

import stringHash from "string-hash";
import loadSchemas from "./schemas";

const encoder = new TextEncoder();
const schemas = await loadSchemas();

const serialized: SerializedSchemaDefinition[] = schemas.map((elem) => {
  const defSer = zodToJsonSchema(elem.typeDefinition);
  const hash = stringHash(JSON.stringify(defSer));
  return { ...elem, typeDefinition: defSer, hash };
});

Promise.all(
  serialized.map((f) => {
    const s = JSON.stringify(f);
    const data = encoder.encode(s);
    Bun.write(join(".", "output", `${f.title}.json`), data);
  })
);
