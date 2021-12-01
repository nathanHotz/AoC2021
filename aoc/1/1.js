const input = require("./input");

const inputArray = input.string.split("\n");
const numOfIncreases = inputArray.reduce((acc, cur, index) => {
  if (!index) return acc;
  if (cur - inputArray[index - 1] > 0) {
    return acc + 1;
  }
  return acc;
}, 0);

console.log(numOfIncreases);
