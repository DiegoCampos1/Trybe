// 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
// quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
// mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

const vetorInteiro = [1, 2, 3, 4]
const vetorString = ['oi', 'amor', 'paz', 'luz']
const vetorDouble = [4.20, 8.40, 16.20, 23.06]


const result1 = vetorInteiro.concat(vetorString)
const result2 = vetorDouble.concat(vetorInteiro)
const result3 = vetorString.concat(vetorInteiro)
console.log(result1, result2, result3)