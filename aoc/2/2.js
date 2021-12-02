const input = require("./input");

const { horizontal, depth } = input.string.split("\n").reduce(
  (acc, cur) => {
    const [direction, v] = cur.split(" ");

    const value = parseInt(v, 10);

    if (direction === "forward") {
      acc.horizontal += value;
      return acc;
    }

    if (direction === "up") {
      acc.depth -= value;
      return acc;
    }

    if (direction === "down") {
      acc.depth += value;
      return acc;
    }

    return acc;
  },
  {
    horizontal: 0,
    depth: 0,
  }
);

console.log(horizontal * depth);
