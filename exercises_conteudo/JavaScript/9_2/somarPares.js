// faça uma função que some todos os números pares do array:
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
// solução usando filter e reduce
const somaPares = numbers.filter(number => (number % 2 ===0)).reduce((a,b) => a+b)

console.log(somaPares)
// solução usando apenas reduce
const somaSe = (a,b) => ((b % 2 === 0) ? a + b : a)
const somaPares2 = numbers.reduce(somaSe)
console.log(somaPares2)