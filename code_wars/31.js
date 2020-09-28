// ) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

function negativos (array) {
  let contador = 0
  for( let i = 0 ; i < array.length ; i ++){
    if (array[i] < 0){
      contador += 1
     }
  }
  return console.log(contador);
} 

const array = [-1, -3, 5, 7, -10, -5, 2, -99]

negativos(array)