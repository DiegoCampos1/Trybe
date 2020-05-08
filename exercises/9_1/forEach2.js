const meuArray = [ 2, 4, 6, 8, 9, 11, 16 ]

meuArray.forEach(elemento => {
  if (elemento % 2 === 0) { 
  console.log(`${elemento} é divísivel por 2!`)}
})
// É possível trabalhar com mais de um paramentro.

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
const printValues = arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});
// A arrow function passada para o forEach possui element, index e array como parâmetros, onde:

// element - Valor do elemento do array;
// index - Índice em cada iteração ou posição do elemento no array, começando do 0;
// array - Array original que está sendo percorrido.