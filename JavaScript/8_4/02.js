const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
const wordLengths = (arr) => {
  const array =[];
  for (i in arr){
    array.push(arr[i].length);
  }
  return array
}
//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
