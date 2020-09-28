//5- Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

let ang1 = 100;
let ang2 = 70;
let ang3 = 10;

let angtotal = ( ang1 + ang2 + ang3 );
let array =[ang1,ang2,ang3];

console.log(angtotal)
console.log(array);

if (angtotal === 180 ) {
  console.log("true")
}
else{
  console.log("false")
}