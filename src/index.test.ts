import { expect, test } from "bun:test";
import { z } from "zod";
import { findDuplicate, serializeSchema } from "./helpers";
import loadSchemas from "./schemas";

const mods = await loadSchemas();

test("file loading", async () => {
  const parsersAreThrowing = mods.map((elem) => {
    try {
      elem.typeDefinition.parse({ realyWeirdKeyNobodyShouldUse: 69 });
      return false;
    } catch (e) {
      return true;
    }
  });

  expect(parsersAreThrowing.every((elem) => !!elem)).toBeTrue();
});

test("no duplicates in zod-definitions", () => {
  const { dups: refDups } = findDuplicate(mods.map((elem) => elem.title));
  expect(refDups.length).toEqual(0);

  const { dups: titleDups } = findDuplicate(mods.map((elem) => elem.title));
  expect(titleDups.length).toEqual(0);
});

test("no duplicates in build result", () => {
  const serialized = mods.map((elem) => serializeSchema(elem));
  const { dups: hashDups } = findDuplicate(serialized.map((elem) => elem.id));
  expect(hashDups.length).toEqual(0);
});
