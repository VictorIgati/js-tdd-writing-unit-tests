// src/__tests__/utils.test.js
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  // Basic functionality test
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  // Case sensitivity test
  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  // Empty string test
  it("returns 0 for an empty string", () => {
    const word = "";
    const points = pointsForWord(word);
    expect(points).toBe(0);
  });

  // Non-alphanumeric characters test
  it("ignores non-alphanumeric characters", () => {
    const word = "he!!o";
    const points = pointsForWord(word);
    expect(points).toBe(4); // h(2) + e(1) + o(1) = 4
  });

  // Invalid input test
  it("throws an error for non-string input", () => {
    expect(() => pointsForWord(123)).toThrow("Input must be a string");
    expect(() => pointsForWord(null)).toThrow("Input must be a string");
    expect(() => pointsForWord(undefined)).toThrow("Input must be a string");
  });
});