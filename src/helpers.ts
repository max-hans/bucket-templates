import stringHash from "string-hash";
import zodToJsonSchema from "zod-to-json-schema";
import { SchemaDefinition, SerializedSchemaDefinition } from "./types";

type DupResult<T> = { scanned: T[]; dups: T[] };

export function findDuplicate<T>(list: Array<T>): DupResult<T> {
  const refs = list.reduce<{ scanned: T[]; dups: T[] }>(
    (acc, elem) => {
      if (acc.dups.includes(elem)) return acc;

      if (acc.scanned.includes(elem)) {
        acc.dups.push(elem);
        return acc;
      } else {
        acc.scanned.push(elem);
        return acc;
      }
    },
    { scanned: [], dups: [] }
  );

  return refs;
}

export const serializeSchema = (
  elem: SchemaDefinition
): SerializedSchemaDefinition => {
  const defSer = zodToJsonSchema(elem.typeDefinition);
  const hash = stringHash(JSON.stringify(defSer));
  return { ...elem, typeDefinition: defSer, hash };
};
