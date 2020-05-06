const assert = require('assert');

const getLargestNumber = (array) => {
  array.sort(function (x, y) {
    return x - y;
  });
  return array.pop();
}

const parameter = [45, 8, 2, 50, 1, 7, 99, 100];
const result = 100;

assert.equal(getLargestNumber(parameter), result)

