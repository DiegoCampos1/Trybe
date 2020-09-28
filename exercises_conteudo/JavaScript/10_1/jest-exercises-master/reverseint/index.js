// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = (n) => {
  return n > -10 && n < 0
    ? n
    : n < 0
    ? -Number(
        n
          .toString()
          .split("")
          .reverse()
          .join("")
          .substring(0, n.toString().split("").length - 1)
      )
    : Number(n.toString().split("").reverse().join(""));
};

module.exports = reverseInt;
