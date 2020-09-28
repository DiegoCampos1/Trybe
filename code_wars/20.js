// 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function calculoNotas (valor) {
 let resto = 0
 let cem = 0
 let cinq = 0
 let dez = 0
 let cinco = 0
 let um = 0

  if ((valor / 100) >= 1){
    cem = Math.trunc(valor / 100)
    resto = valor % 100
  }
  if ((resto / 50) >= 1){
    cinq = Math.trunc(resto / 50)
    resto = valor % 50
  }
  if ((resto / 10) >= 1){
    dez = Math.trunc(resto / 10)
    resto = valor % 10
  }
  if ((resto / 5) >= 1){
    cinco = Math.trunc(resto / 5)
    resto = valor % 5
  }
  if ((resto  / 1 >= 1)){
    um = Math.trunc(resto / 1)
  }
  return `${cem} nota's de 100, ${cinq} nota's de 50, ${dez} nota's de 10, ${cinco} nota's de 5, ${um} nota's de 1`
}

console.log(calculoNotas(117))

// //function calcularValorNota(valorSaque) {
//     if (valorSaque >= 100) {
//         return 100
//     } else if (valorSaque >= 50) {
//         return 50
//     } else if (valorSaque >= 10) {
//         return 10
//     } else if (valorSaque >= 5) {
//         return 5
//     } else if (valorSaque >= 1) {
//         return 1
//     }
// }