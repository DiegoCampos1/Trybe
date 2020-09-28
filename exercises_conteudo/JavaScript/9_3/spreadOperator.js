const arr = [0, 1, 2];
const newArr = [...arr, 3] // instancia novo array, o spread esta adicionando a const arr, e add também o 3.
// ...arr = 0,1,2 espalhamento
console.log(newArr)

const soma = (a, b, c) => a + b + c;

console.log(soma(...arr)) // espalaha os valores que entram como parametro da função.