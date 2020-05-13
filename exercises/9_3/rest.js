// funcionalidade oposta do spread
// os valores listados são agrupados em um array
const myPackage = ['cheese', 'eggs', 'milk', 'bread'];
console.log(...myPackage) // espalhando os elementos
const printPackage = (...items) => {
  for (item of items){
    console.log(item)
  }
}
console.log(printPackage(myPackage))