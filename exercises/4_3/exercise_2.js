//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false, se não for

let nome = "araaxra";

// function verificaPalindromo(str) {
// let tam = (str.length/2);
// let resultado = true;

// for (i = 1 ; i <= tam ; i++){
// if (str[i-1] !== str[str.length - i]) {
// resultado = false;
// }
// }
// return resultado;

// } 

function palindromo(a) {
  let tamanho = (a.length/2);
  let resultado = true;
  for(i=1; i<=tamanho ; i++){
    if(a[i-1] !== a[a.length-i]){
      resultado = false;
    }
  }
return resultado;
}
console.log(palindromo("nome"));


