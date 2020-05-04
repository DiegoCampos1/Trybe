// A função recebe um numero qualquer de parâmetros. 
// Todos são agregados como valores para adicionar ao objeto de destino!
// Object.assign(destino, objeto1);  
// Primeiro sempre será o objeto de destino e os parâmetros restantes serão os valores que serão adicionados a esse objeto destino.
//Ex:
const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)