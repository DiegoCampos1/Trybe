let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionaVetor(vetorInicial, vetorAdicionar) {
    for(let i = 0; i < vetorAdicionar.length; i++) {
        console.log(vetorAdicionar[i])
        vetorInicial.push(vetorAdicionar[i])
    }
    console.log('Vetor adicionado: ' + vetorAdicionar)
    console.log('Vetor resultado: ' + vetorInicial)
}

adicionaVetor(vetorPilha, vetorAdiciona)

//This is a math problem, avoid the programming approach and you will find the results.
// function oddCount(n){
//  let impar = 0
//  for (let i = 1; i < n; i ++){
//  if (i % 2 != 0){
//   impar ++
//  }
//  }
//  return impar
// }