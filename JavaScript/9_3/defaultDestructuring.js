const person = {
  name: "João",
  lastName: "Jr",
  age: 34
}

const { nationality } = person
console.log(nationality)
//  valor padrão para nationality, caso essa propriedade não exista no objeto? Você consegue assinalar esse valor padrão via default destructuring:
const person2 = {
  name: "João",
  lastName: "Jr",
  age: 34
}

const { nationality2 = "Brazilian" } = person2 // Seta um valor caso não encontre a chave no objeto.
console.log(nationality2) // Brazilian

//Analogamente, o mesmo pode ser feito na hora de desestruturar um array:
const position2d = [1.0, 2.0]
const [x, y, z = 0] = position2d

console.log(z) // 0
