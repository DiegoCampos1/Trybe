const assert = require("assert");

function sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }

  return a + b;
}

// implemente seus testes aqui
// Teste se o retorno de sum(4, 5) é 9
assert.deepEqual(sum(4, 5), 9)
//Teste se o retorno de sum(0, 0) é 0
assert.deepEqual(sum(0, 0), 0)
// Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
assert.throws(() => { sum(4, "5"); }, /^Error: parameters must be numbers/);