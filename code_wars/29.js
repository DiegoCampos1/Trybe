// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

function contaIntervalo (num) {
  let dentro = 0
  let fora = 0
  for (let i = 0; i <= num; i +=1) {
    if (i >= 10 && i <= 20){
      dentro +=1
    } else {
      fora +=1
    }
  }
  return console.log(`Temos ${dentro} numeros no intervalo de 10 a 20, e ${fora} fora do intervalo`)
}

contaIntervalo(20)