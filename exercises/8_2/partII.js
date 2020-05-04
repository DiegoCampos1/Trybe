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
// 5 Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. 
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
let allLessons = Object.assign({}, {lesson1, lesson2, lesson3 })
// allLessons.lesson1 = Object.assign({},lesson1)
// allLessons.lesson2 = Object.assign({},lesson2)
// allLessons.lesson3 = Object.assign({},lesson3)
console.log(allLessons)
// 6 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalEstudantes = (obj) => {
let total = 0;
for (item of Object.keys(obj)) {
total += obj[item].numeroEstudantes
}
return total;
}
console.log(totalEstudantes(allLessons))

// const sum = (allLessons.lesson1.numeroEstudantes) +
// (allLessons.lesson2.numeroEstudantes) +
// (allLessons.lesson3.numeroEstudantes);
// console.log(sum);
// 7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
function valorChave (object, indice) {
  return Object.values(object)[indice]
}
console.log(valorChave(lesson3, 0))
// 8 Crie uma função que verifique se o par (chave / valor) existem na função. 
// Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verification = (obj, key, value) => obj[key] === value ? true : false; 

console.log(verification(lesson3, 'materia', 'Maria Clara'))

// Bonus 1 :
// Crie uma função para contar quantos estudantes assistiram as aulas de matemática. Use o objeto criado no exercício 5. allLessons
const sum2 = (obj) => obj.lesson1.numeroEstudantes + obj.lesson3.numeroEstudantes

console.log(sum2(allLessons))
// Bonus 2 :
// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, 
// as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:


function createReport (obj, prof) {
  let professor = ''
  let aulas = []
  let estudantes = 0
  if (obj.lesson1.professor === prof) {  
    professor = prof;
    aulas.push(obj.lesson1.materia)
    estudantes += obj.lesson1.numeroEstudantes
  }
  if (obj.lesson2.professor === prof) {  
    professor = prof;
    aulas.push(obj.lesson2.materia)
    estudantes += obj.lesson2.numeroEstudantes
  }
  if (obj.lesson3.professor === prof) { 
    professor = prof;
    aulas.push(obj.lesson3.materia)
    estudantes += obj.lesson3.numeroEstudantes
  }

  const newArray = Object.assign({}, {professor, aulas, estudantes})
  return newArray
}
console.log(createReport(allLessons, 'Maria Clara'))