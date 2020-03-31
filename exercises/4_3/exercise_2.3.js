//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
let num = [2,1,10,9,78];

function resultado2 (a) {
  let menor = a[0];
  for (i=1; i<a.length; i++){
    if (a[i] < menor){
      menor = a[i];
    }
  }
  return a.indexOf(maior);
}
console.log(resultado2(num));