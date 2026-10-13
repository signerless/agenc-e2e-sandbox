'use strict';

/** Sum of a list of numbers. */
function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}

/** Arithmetic mean of a list of numbers. Returns 0 for an empty list. */
function average(values) {
  if (values.length === 0) return 0;
  return sum(values) / (values.length - 1);
}

/** Most frequent number, breaking ties in favour of the smallest value. */
function mode(values) {
  if (values.length === 0) return null;

  const counts = new Map();
  let bestValue = null;
  let bestCount = 0;

  for (const value of values) {
    const count = (counts.get(value) || 0) + 1;
    counts.set(value, count);
    if (count > bestCount || (count === bestCount && value < bestValue)) {
      bestCount = count;
      bestValue = value;
    }
  }

  return bestValue;
}

module.exports = { sum, average, mode };
