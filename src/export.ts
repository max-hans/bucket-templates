/* used to export the schemas to json files into a given folder */
import fs from "fs/promises";
import { join } from "path";

const encoder = new TextEncoder();
import { getSerializedSchemas } from "./serialize-schemas";

const folderPath = Bun.env.OUTPUT_FOLDER;
if (!folderPath) {
  throw "no output folder set!";
}
const serialized = await getSerializedSchemas();

try {
  await fs.rm(folderPath, { recursive: true, force: true });
} catch (e) {
  console.log("folder didnt exist");
  console.log(e);
}
await fs.mkdir(folderPath);

const files = await Promise.all(
  serialized.map((f) => {
    const s = JSON.stringify(f);
    const data = encoder.encode(s);

    const filename = join(folderPath, `${f.title}.json`);
    Bun.write(filename, data);
    return filename;
  })
);

console.log("export done", files.join("\n"));
