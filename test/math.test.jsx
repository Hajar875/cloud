import { test, expect } from 'vitest';
import { add, multiply } from '../src/utils/math';

test('add function adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
});

test('multiply function multiplies two numbers', () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(-1, 5)).toBe(-5);
});