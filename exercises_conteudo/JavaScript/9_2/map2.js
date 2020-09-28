// Suponha que é preciso transformar todos os números em negativos e passa-lós para um array novo.
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * -1 : number));
console.log(negativeNumbers);