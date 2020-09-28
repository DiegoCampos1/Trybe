const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

// 1 Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
assert.deepEqual(myIndexOf([1, 2, 3, 4], 3), 2)
// 2 Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
assert.deepEqual(myIndexOf([1, 2, 3, 4], 5), -1)