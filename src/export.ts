/* used to export the schemas to json files into a given folder */

import { join } from "path";

const encoder = new TextEncoder();
import { getSerializedSchemas } from "./serialize-schemas";

const serialized = await getSerializedSchemas();

Promise.all(
  serialized.map((f) => {
    const s = JSON.stringify(f);
    const data = encoder.encode(s);
    Bun.write(join(".", "output", `${f.title}.json`), data);
  })
);
