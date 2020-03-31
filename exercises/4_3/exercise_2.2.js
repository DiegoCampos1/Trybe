////Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let num = [2,3,10,9,78];


function resultado (a) {
  let maior = a[0];
  for (i=1; i<a.length; i++){
    if (a[i]>maior){
      maior = a[i];
    }
  }
  return a.indexOf(maior);
}
console.log(resultado(num));