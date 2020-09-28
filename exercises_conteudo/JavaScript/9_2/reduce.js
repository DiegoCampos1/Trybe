// A função soma todos os valores de um array:
// Apenas com o for
const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0; // A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!
for(let i = 0; i < numbers.length; i += 1){
  sumNumbers = sumNumbers + numbers[i];
}
console.log(sumNumbers); // 113

// Fazendo com reduce:
const getsum = (a,b) => a+b
const sum = numbers.reduce(getsum);
// podemos passar mais um parametro para adicionar um valor inicial
const sum2 = numbers.reduce(getsum, 10);

console.log(sum);
console.log(sum2);
