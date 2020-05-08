// A função find é utilizada para achar o primeiro elemento que satisfaça a condição passada. 
// Então, a função que deverá ser passada precisa retornar true ou false.

//Esse exemplo mostra duas formas de resolver o mesmo problema, que é retornar o primeiro número par do array.
const numbers = [19, 10, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0

console.log(numbers.find(verifyEven));

/// retorno na mesma linha:
const isEven2 = numbers.find((number) => number % 2 === 0) // O find sempre retorna o primeiro que for true dos elementos do array
console.log(isEven2)