import assert from "node:assert/strict";
import { test } from "node:test";
import { getUpcomingEvents, getEventById } from "./eventos";

test("la portada y la agenda muestran retiro y Básico en orden, sin retiros pasados", () => {
  const events = getUpcomingEvents("kshealing", new Date("2026-10-06T18:00:00Z"));
  assert.deepEqual(events.map(event => event.id), ["evento-010", "ks-healing-basico-2026-oct"]);
  assert.equal(events[0].date, "2026-10-11");
  assert.equal(events[0].startTime, "12:00 p.m. CDMX");
  assert.equal(events[1].date, "2026-10-18");
  assert.equal(events[1].endDate, "2026-11-01");
  assert.match(events[1].description, /18 y 25 de octubre y 1 de noviembre de 2026/);
  assert.equal(events[1].link, "/ks-healing");
});

test("Básico permanece visible entre sesiones y hasta finalizar el 1 de noviembre en CDMX", () => {
  assert.equal(getUpcomingEvents("kshealing", new Date("2026-10-25T18:00:00Z")).some(event => event.id === "ks-healing-basico-2026-oct"), true);
  const beforeMidnight = getUpcomingEvents("kshealing", new Date("2026-11-02T05:59:59Z"));
  assert.equal(beforeMidnight.some(event => event.id === "ks-healing-basico-2026-oct"), true);
  const afterMidnight = getUpcomingEvents("kshealing", new Date("2026-11-02T06:00:00Z"));
  assert.equal(afterMidnight.some(event => event.id === "ks-healing-basico-2026-oct"), false);
});

test("el filtro de próximos eventos no borra los retiros históricos", () => {
  getUpcomingEvents("kshealing", new Date("2026-10-06T18:00:00Z"));
  assert.equal(getEventById("evento-007")?.date, "2026-07-05");
  assert.equal(getEventById("evento-008")?.date, "2026-08-02");
});

test("no publica Básico en el catálogo de otro sitio", () => {
  const events = getUpcomingEvents("instituto", new Date("2026-10-06T18:00:00Z"));
  assert.deepEqual(events.map(event => event.id), ["evento-010"]);
});
