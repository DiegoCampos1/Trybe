// Neste exemplo, serão comparados valores para buscar o maior valor em um array.

const numbers = [50, 85, -30, 3, 15];

const maior = (a,b) => ((a > b) ? a : b)

const theBigger = numbers.reduce(maior)

console.log(theBigger)
