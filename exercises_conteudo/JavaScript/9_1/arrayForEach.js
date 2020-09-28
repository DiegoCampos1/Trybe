const students = [
  { name: 'Maria', note: 70, approved: '' },
  { name: 'José', note: 56, approved: '' },
  { name: 'Roberto', note: 90, approved: '' },
  { name: 'Ana', note: 81, approved: '' }
];

function verifyNote (student){
  if (student.note >= 60) {
    student.approved = 'Aprovado';
  } else {
    student.approved = 'Recuperação';
  }
}
// let i;
// for (i = 0; i < students.length; i += 1) {
//   verifyNote(students[i]);
// }
students.forEach(verifyNote); // verifica e modifica o array original conform função de callback

console.log(students);
