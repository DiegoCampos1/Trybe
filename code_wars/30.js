// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
function maiorMenor(nums) {
  let maior = 0;
  let menor = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (maior === 0 || menor === 0) {
      maior = nums[i];
      menor = nums[i];
    }
    if (nums[i] > maior) {
      maior = nums[i];
    }
    if (nums[i] < menor) {
      menor = nums[i];
    }
  }
  return console.log(`${maior} é o maior, ${menor} é o menor`);
}
const nums = [2, 3, 7, 50, 3];
maiorMenor(nums);
