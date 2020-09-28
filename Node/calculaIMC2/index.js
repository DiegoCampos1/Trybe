const { respostaAoUsuario } = require('./functions')
const inquirer = require('inquirer');

const questions  = [
  {
    type: 'input',
    name: 'name',
    message: "Qual seu Nome?",
    validate: function (value) {
      
      if (typeof value === 'string') {
        return true;
      }

      return 'Por favor insira uma string';
    },
  },
  {
    type: 'input',
    name: 'peso',
    message: 'Qual seu Peso?',
    validate: function (value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Por favor insira um numero';
    },
    filter: Number,
  },
  {
    type: 'input',
    name: 'altura',
    message: 'Qual sua altura?',
    validate: function (value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Por favor insira um numero';
    },
    filter: Number,
  },
]

inquirer.prompt(questions).then((answers) => {
  // console.log((answers));
  respostaAoUsuario(answers.name, answers.peso, answers.altura);
});
