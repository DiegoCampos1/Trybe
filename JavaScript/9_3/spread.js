// SPREAD
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2]
console.log(arr3)


const usuario1 = {
  nome: 'Diego',
  idade: 31,
  empresa: "Pode ser a sua"
};

const usuario2 = {...usuario1, nome: "Diego2"};

console.log(usuario2);
