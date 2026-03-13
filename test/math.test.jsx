import { describe, test, expect } from "vitest";
import { add, multiply, subtract, divide } from "../src/utils/math";

describe("Math utility functions", () => {

  test("add function adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(10, 0)).toBe(10);
  });

  test("multiply function multiplies two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, 5)).toBe(-5);
    expect(multiply(0, 100)).toBe(0);
  });

  test("subtract function subtracts numbers", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3, 5)).toBe(-2);
  });

  test("divide function divides numbers", () => {
    expect(divide(6, 2)).toBe(3);
    expect(divide(9, 3)).toBe(3);
  });

  test("divide by zero throws error", () => {
    expect(() => divide(10, 0)).toThrow();
  });

});