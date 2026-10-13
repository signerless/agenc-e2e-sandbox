'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { sum, mode } = require('../src/stats.js');

test('sum adds every value', () => {
  assert.equal(sum([1, 2, 3, 4]), 10);
});

test('sum of an empty list is 0', () => {
  assert.equal(sum([]), 0);
});

test('mode returns the most frequent number', () => {
  assert.equal(mode([1, 2, 2, 3]), 2);
});

test('mode returns the sole item', () => {
  assert.equal(mode([7]), 7);
});

test('mode chooses the smallest value in a tie', () => {
  assert.equal(mode([3, 3, 1, 1]), 1);
  assert.equal(mode([5, 4, 5, 4]), 4);
  assert.equal(mode([-1, -2, -1, -2]), -2);
});

test('mode returns null for an empty list', () => {
  assert.equal(mode([]), null);
});
