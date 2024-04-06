/* used to get all schemas and upload them to supabase */

import { createClient } from "@supabase/supabase-js";

import { SchemaDefinition } from "./types";
import loadSchemas from "./schemas";
import { serializeSchema } from "./helpers";

const schemas = await loadSchemas();

const serialized = schemas.map((elem: SchemaDefinition) =>
  serializeSchema(elem)
);

const supabase = createClient(
  Bun.env.SUPABASE_URL!,
  Bun.env.SUPABASE_SERVICE_KEY!
);

const { data, error } = await supabase
  .from("data-schemas")
  .upsert(serialized, { onConflict: "id", ignoreDuplicates: true })
  .select();

console.log(data, error);
