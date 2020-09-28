//28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares

function parImpar (num) {
  let par = 0
  let impar = 0
  for (let i = 1; i <= num ; i += 1){
    if ( i % 2 ===0){
      par += 1
    } else {
      impar += 1
    }
  }
  return console.log(`${par} numeros pares, e ${impar} numeros impares`)
}

parImpar(10)