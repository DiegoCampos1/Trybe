const { calculaImc, situacao, respostaAoUsuario } = require('./functions')
const readline = require('readline-sync')


const nome = readline.question("Qual seu nome? ")
const peso = readline.questionFloat("Qual seu peso? ").toFixed(2)
const altura = readline.questionFloat("Qual seu altura? ").toFixed(2)

respostaAoUsuario(nome, peso, altura);
