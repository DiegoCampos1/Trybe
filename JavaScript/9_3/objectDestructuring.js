const aluno = {
  nome: "Matheus",
  idade: "23",
  email: "matheushcastiglioni@gmail.com",
};

const { nome, idade, email } = aluno;
console.log(nome);
console.log(idade);
console.log(email);
// desestruturação de objeto segue a seguinte sintaxe:
// [{Variáveis}] = [Objeto em JSON];
// Dentro das chaves é onde fazemos a assossiação dos campos que pretendemos extrair de um determinado objeto JSON.
const fornecedor = {
  razaosocial: "Alura - Cursos Online",
  cnpj: "00.000.000/0000-00",
  email: "suporte@alura.com.br",
};
// pegar apenas a razão social do objeto fornecerdor
const { razaosocial } = fornecedor;
console.log(razaosocial);
// Conseguimos extrair apenas a informação que precisamos

// recurso para referenciar um objeto mas trocando seu nome na criação da variável:
const json = { a: "Matheus", b: "23", c: "matheushcastiglioni@gmail.com" };
const {a:nome, b:idade, c:email} = json; // coloque: e o nome novo da chave
console.log(nome);
console.log(idade);
console.log(email);
// então temos a seguinte estrutura:
// [{Campo_do_objeto:Nome_para_variavel}] = [Objeto];

// IMPORTATE: quando passamos o nome de algum atributo que não existe dentro do nosso objeto, a variável torna-se undefined.