// O filter é bem parecido com o find. O que o filter traz de novo é que, em vez de retornar apenas um elemento, 
// ele retornará todos os elementos em um array que satisfaçam à condição verificada pela função.
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

console.log(isEven); // [ 30, 22 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2); // [ 30, 22 ]
