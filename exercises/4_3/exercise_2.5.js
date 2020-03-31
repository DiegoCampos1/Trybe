//Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let array = [ 3, 2, 3];


function mostCommon(arr) {

let armazenaDefinitivo = [];

for ( i = 0 ; i < arr.length ; i++ ) {
let armazenaMaior = [];

for (c = 1 ; c < arr.length; c++){
if (arr[i] === arr[c]) {
armazenaMaior.push(arr[c]);
}

if (armazenaMaior.length > armazenaDefinitivo.length) {
armazenaDefinitivo = armazenaMaior;

}
}
}
let resultado = armazenaDefinitivo[0];
return resultado;
}

console.log(mostCommon(array)); 