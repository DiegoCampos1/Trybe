const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
const printValues = arrayOfValues.forEach((element) => {
  console.log(`Cada elemento do array: ${element}`)
})

// Suas partes:

// arrayOfValues - Nome do array que será percorrido;
// .forEach - A HOF, pode ser, .find, .filter, .some, .every;
// element - Valor do elemento do array;
// (element) => {console.log('Cada elemento do array:', element); 
// - função a ser executada, pode ser passada igual ao terceiro exemplo do conteúdo com a função verifyNote.

// Quando você passa uma arrow function para uma HOF, o primeiro parâmetro que essa arrow function recebe é o elemento do array