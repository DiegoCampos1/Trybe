//12) Faça um algoritmo que calcule o fatorial de um número
function fatorial (num) {
  if (num < 0){
    return `O valor deve ser maior ou igual a zero`
  } else if ( (num === 0) || (num === 1) ){
    return 1
  } else {
    let acumula = 1
    for (let i = num; i > 1; i -= 1) {
      acumula = acumula * i
      }
      return acumula
  }
}

console.log(fatorial(4))