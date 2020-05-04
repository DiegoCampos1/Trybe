const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
// 1 Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, 
// sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
 function modify (objt, key, value) {
  objt[key] = value;
  return objt;
}

console.log(modify((lesson2), "topico", "Historia do Brasil"))
// 2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listSkills = (obj) => {
  const arrayOfSkills = Object.keys(obj);
  return console.log(arrayOfSkills);
}
listSkills(lesson1);
// 3 Crie uma função para mostrar o tamanho de um objeto.
const lenght = (obj) => Object.keys(obj).length;
console.log(lenght(lesson3));
// 4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const values = (obj) => Object.values(obj)
console.log(values(lesson3));