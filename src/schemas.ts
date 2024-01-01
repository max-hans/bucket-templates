import { glob } from "glob";
import { join } from "path";
import { moduleDefinition } from "./zod-schemas";
import { SchemaDefinition } from "./types";

const loadSchemas = async (): Promise<SchemaDefinition[]> => {
  const data = await glob(join(import.meta.dir, "data-schemas", "/*.ts"));
  const mods = await Promise.all(data.map((elem) => import(elem)));
  const parsed = mods
    .map((elem) => moduleDefinition.parse(elem.default))
    .filter(
      (elem): elem is SchemaDefinition => elem.typeDefinition !== undefined
    );
  return parsed;
};

export default loadSchemas;
