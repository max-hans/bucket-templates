import { join } from "path";
import { glob } from "glob";
import { expect, test } from "bun:test";
import { z } from "zod";
import { findDuplicate } from "./helpers";

export const moduleDefinition = z.object({
  ref: z.number(),
  title: z.string(),
  description: z.string(),
  typeDefinition: z.any(),
});

const loadAllFiles = async () => {
  const data = await glob(join(import.meta.dir, "definitions", "/*.ts"));
  const mods = await Promise.all(data.map((elem) => import(elem)));
  const parsed = mods.map((elem) => moduleDefinition.parse(elem.default));
  return parsed;
};
const mods = await loadAllFiles();

test("file loading", async () => {
  const parsersAreThrowing = mods.map((elem) => {
    try {
      /* @ts-ignore */
      elem.typeDefinition.parse({ realyWeirdKeyNobodyShouldUse: 69 });
      return false;
    } catch (e) {
      return true;
    }
  });
  expect(parsersAreThrowing.every((elem) => !!elem)).toBeTrue();
});

test("no duplicates", () => {
  const { dups: refDups } = findDuplicate(mods.map((elem) => elem.ref));
  expect(refDups.length).toEqual(0);

  const { dups: titleDups } = findDuplicate(mods.map((elem) => elem.title));
  expect(titleDups.length).toEqual(0);
});
