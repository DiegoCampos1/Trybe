const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

console.log(mySum([1, -2, -3, 4]))

// implemente seus testes aqui

// 1 Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
assert.deepEqual(mySum([1, 2, 3, 4]), 11)

//Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado
assert.deepEqual(mySum([1, -2, -3, 4], 0))
