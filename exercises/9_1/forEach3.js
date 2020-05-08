// No exemplo acima, ele realizou em cada elemento do array a função multipliesFor2, que imprime o parâmetro * 2 no console.
const numbers = [0, 1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9, 10]

const multiplesFor2 = (element) => {
  console.log(`${element} * 2 = ${element *2}`)
}

numbers.forEach(multiplesFor2)

