import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";

test("las tres invitaciones de compra y beca quedan desactivadas", () => {
  const page = readFileSync(new URL("../pages/KSHealing.tsx", import.meta.url), "utf8");
  assert.equal((page.match(/<Button disabled /g) ?? []).length, 6);
  assert.equal((page.match(/Inscripciones próximamente/g) ?? []).length, 3);
  assert.equal((page.match(/Becas próximamente/g) ?? []).length, 3);
  assert.doesNotMatch(page, /offers\/7SaCLieS|formulario-becas-ascendant-KSHB/);
});
