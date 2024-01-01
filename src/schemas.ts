import { glob } from "glob";
import { join } from "path";
import { moduleDefinition } from "./zod-schemas";

const loadSchemas = async () => {
  const data = await glob(join(import.meta.dir, "data-schemas", "/*.ts"));
  const mods = await Promise.all(data.map((elem) => import(elem)));
  const parsed = mods.map((elem) => moduleDefinition.parse(elem.default));
  return parsed;
};

export default loadSchemas;
