// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

function div(num) {
  let divisivel = false
  
  if (num % 3 === 0) {
    divisivel = true
  }
  return divisivel
}

console.log(div(3))
console.log(div(8))
console.log(div(12))

console.log(Math.trunc(202 / 100))