const input = require("./input");

const inputArray = input.string.split("\n");
const threeSumWindow = inputArray.reduce((acc, cur, index) => {
  if (inputArray.length - (index + 1) < 2) {
    return acc;
  }

  acc.push(
    parseInt(cur, 10) +
      parseInt(inputArray[index + 1], 10) +
      parseInt(inputArray[index + 2], 10)
  );
  return acc;
}, []);

const numOfIncreases = threeSumWindow.reduce((acc, cur, index) => {
  if (!index) return acc;
  if (cur - threeSumWindow[index - 1] > 0) {
    return acc + 1;
  }
  return acc;
}, 0);

console.log(numOfIncreases);
