// Your code here
// src/utils.js
export function pointsForWord(word) {
  // Input validation
  if (typeof word !== "string") {
    throw new Error("Input must be a string");
  }

  // Handle empty string
  if (word.length === 0) {
    return 0;
  }

  let points = 0;
  const cleanWord = word.replace(/[^a-zA-Z]/g, ""); // Remove non-alphabetic characters

  for (const char of cleanWord) {
    points += /[aeiou]/i.test(char) ? 1 : 2;
  }

  return points;
}