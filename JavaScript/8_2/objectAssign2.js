// Quando se faz o que foi feito no exemplo mais acima, ao criar uma nova variável para armazenar 
// o retorno do método Object.assign, cria-se apenas um outro “caminho” para modificar ou acessar 
// os dados do objeto destino (nesse caso person). No exemplo abaixo é apresentada outra forma de se copiar um objeto
const obj = { value1: 10, value2: 11 };
const cloneObj = obj;
// Dessa forma também acabamos mudando em ambos objetos quando alteramos um deles.
//Para resolver fazemos dessa forma:
const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);
// podemos passar como primeiro parâmetro do Object.assign um objeto vazio {} e pegar armazenar seu retorno em uma nova variável