// //(Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
// Dicas:
// Uma string é um array de caracteres, então cada elemento do array é uma letra.
// O valor de cada numeral romano é:
// Copiar
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |
// Que tal criar um objeto que associe cada letra a um numeral para fácil consulta?
// Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

let roman = 'X'; //914

function romanToAlgebric(str){

let valor = 0;
let possibilidades = ['M','D','C','X','V','I','L'];

for (i = 0 ; i < str.length ; i++){

if (possibilidades.indexOf(str[i]) === -1) {
console.log("Número Inválido");
break;
}

if (str[i] === 'M') {
valor += 1000;
}

if (str[i] === 'D') {
valor -= 500;
}

if (str[i] === 'C') {
if (str[i+1] === 'M') {
valor -= 100;
} else {
valor +=100;
}
}

if (str[i] === 'L') {
valor +=50
}
if (str[i] === 'X') {
if (str[i+1] === 'C') {
valor -= 10;
} else {
valor +=10;
}
}
if (str[i] === 'V') {
valor +=5
}
if (str[i] === 'I') {
if (str[i+1] === 'V') {
valor -= 1;
} else {
valor +=1;
}
}
} 
return valor;
}
console.log(romanToAlgebric(roman)); 