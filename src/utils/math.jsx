// src/utils/math.js

export function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Parameters must be numbers");
  }
  return a + b;
}

export function multiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Parameters must be numbers");
  }
  return a * b;
}

export function subtract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Parameters must be numbers");
  }
  return a - b;
}

export function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Parameters must be numbers");
  }

  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }

  return a / b;
}