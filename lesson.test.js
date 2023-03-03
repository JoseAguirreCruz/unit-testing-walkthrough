// import our functions from main.js
// const { exportAllDeclaration } = require('@babel/types')
// const { default: test } = require('node:test')
// const { default: test } = require('node:test')
const modules = require('./main')
// console.log(modules)
const isEven = modules.isEven
const divide = modules.divide
const isPositive = modules.isPositive

// This is where all of our test cases belong 
test("It should return true when called with an even number", () => {
  expect(isEven(4)).toBe(true)
})

// Test case for divide
test("It should return a number when called", () => {
  expect(typeof divide(4, 2)).toBe("number")
})

test("It should return true when passed a positive number", () => {
  // Base case: where a number is true 
  expect(isPositive(3)).toBe(true);
  // Edge case: consider 0 as true
  expect(isPositive(0)).toBe(true)
});

test("It should return false when passed a negative number.", () => {
  expect(isPositive(-3)).toBe(false)
})

