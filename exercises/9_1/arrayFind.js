// Primeiro numero divisivel por 5

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 5 === 0) {
    firstMultipleOf5 = numbers[i];
    break;
  }
}

//usando o array.find
const numbers2 = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf52 = numbers2.find(number => number % 5 === 0);

console.log(firstMultipleOf5);
console.log(firstMultipleOf52);
