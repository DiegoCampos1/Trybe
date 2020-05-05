const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(Object.values(customer))

//Fazendo pelo for in:

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

console.log(listSkillsWithFor(student));

//pelo