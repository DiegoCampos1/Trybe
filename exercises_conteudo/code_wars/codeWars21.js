const isSquare = (n) => {
  var aux = Math.sqrt(n)
  return Number.isInteger(aux)
}

console.log(isSquare(0))

// Outra oslução em uma linha:
const isSquare = n => Number.isInteger(Math.sqrt(n));