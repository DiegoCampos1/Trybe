// Crie uma função que receba um número e retorne seu fatorial.
// Minha resoluçao
// const fatorial = (num) => {
//   if (num < 0){
//     return `O valor deve ser maior ou igual a zero`
//   } else if ( (num === 0) || (num === 1) ){
//     return 1
//   } else {
//     let acumula = 1
//     for (let i = num; i > 1; i -= 1) {
//       acumula = acumula * i
//       }
//       return acumula
//   }
// }
// codigo da internet 
const fatorial = (n) => n === 0 || n === 1 ? 1 : n * fatorial(n-1);
console.log(fatorial(4))