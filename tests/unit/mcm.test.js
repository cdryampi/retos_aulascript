// src/utils/mcm.test.js
import { describe, expect, it } from "vitest";
import { mcm } from "@/utils/mcm";

describe("mcm function", () => {
  it("debería calcular el mínimo común múltiplo de 4 y 6", () => {
    expect(mcm(4, 6)).toBe(12);
  });

  it("debería calcular el mínimo común múltiplo de 5 y 10", () => {
    expect(mcm(5, 10)).toBe(10);
  });

  it("debería calcular el mínimo común múltiplo de 7 y 3", () => {
    expect(mcm(7, 3)).toBe(21);
  });

  it("debería calcular el mínimo común múltiplo de 8 y 12", () => {
    expect(mcm(8, 12)).toBe(24);
  });

  it("debería calcular el mínimo común múltiplo de 1 y 1", () => {
    expect(mcm(1, 1)).toBe(1);
  });
});
