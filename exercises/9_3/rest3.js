//REST

const usuario = {
  nome: 'Diego',
  idade: 31,
  empresa: "Pode ser a sua"
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4,];
const [ a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);
