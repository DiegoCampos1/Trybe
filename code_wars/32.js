//32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros

function media (array) {
  let total = 0
  for(let i =0 ; i < array.length; i ++){
    total += array[i]
  }
  let media = total / array.length
  return console.log(media)
}

const array = [10, 20, 30, 40]

media(array)