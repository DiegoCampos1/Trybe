// As funções some e every são parecidas. A primeira retorna true se ao menos um elemento de um array satisfaz a uma condição.
//  A segunda retorna true se todos os elementos de um array satisfazem a uma condição.

// O exemplo abaixo usa o some para verificar se possui algum nome que começa com a letra desejada:
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => {
  return names.some((name) => name[0] === letter);
}

console.log(verifyFirstLetter('J', listNames)); //true
console.log(verifyFirstLetter('X', listNames)); //false

// O exemplo abaixo usará o every para verificar se o estudante passou em todas as matérias:
const notes = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyPassedAll = (notes1) => {
  return Object.values(notes1).every((note) => note === 'Aprovado');
}
console.log(verifyPassedAll(notes))

// Como o Object.values retorna um array, o every percorrerá esse array retornado.