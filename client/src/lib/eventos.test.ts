import assert from "node:assert/strict";
import { test } from "node:test";
import { getUpcomingEvents, getEventById } from "./eventos";

test("la portada y la agenda muestran retiro y Básico en orden, sin retiros pasados", () => {
  const events = getUpcomingEvents("kshealing", new Date("2026-10-06T18:00:00Z"));
  assert.deepEqual(events.map(event => event.id), ["evento-010", "ks-healing-basico-2026-oct"]);
  assert.equal(events[0].date, "2026-10-11");
  assert.equal(events[0].startTime, "12:00 p.m. CDMX");
  assert.equal(events[1].date, "2026-11-01");
  assert.equal(events[1].endDate, "2026-11-15");
  assert.match(events[1].description, /1, 8 y 15 de noviembre de 2026/);
  assert.equal(events[1].link, "/ks-healing");
});

test("Básico permanece visible entre sesiones y hasta finalizar el 15 de noviembre en CDMX", () => {
  assert.equal(getUpcomingEvents("kshealing", new Date("2026-11-08T18:00:00Z")).some(event => event.id === "ks-healing-basico-2026-oct"), true);
  const beforeMidnight = getUpcomingEvents("kshealing", new Date("2026-11-16T05:59:59Z"));
  assert.equal(beforeMidnight.some(event => event.id === "ks-healing-basico-2026-oct"), true);
  const afterMidnight = getUpcomingEvents("kshealing", new Date("2026-11-16T06:00:00Z"));
  assert.equal(afterMidnight.some(event => event.id === "ks-healing-basico-2026-oct"), false);
});

test("la convocatoria del 17 de octubre anuncia el inicio del 1 de noviembre", () => {
  const events = getUpcomingEvents("kshealing", new Date("2026-10-17T18:00:00Z"));
  assert.deepEqual(events.map(event => event.id), ["ks-healing-basico-2026-oct"]);
  assert.equal(events[0].date, "2026-11-01");
  assert.equal(events[0].startTime, "12:00 a 14:00 hrs (Hora CDMX)");
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
