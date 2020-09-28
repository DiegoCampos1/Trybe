function getSum(a, b) {
  let maior = 0
  let menor = 0
  let acumulador = 0
  if (a === b) {
    return a
  }
  if (a > b) {
    maior = a
    menor = b
  } else if (b > a) {
    maior = b
    menor = a
  } 

  for (let i = menor; i <= maior; i += 1) {
    
    acumulador += i
  }
  return acumulador
}

console.log(getSum(-1, 2))

// // Reduzindo:
// const GetSum = (a, b) => {
//   let min = Math.min(a, b),
//       max = Math.max(a, b);
//   return (max - min + 1) * (min + max) / 2;
// }