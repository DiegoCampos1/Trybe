//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.
function operacoes (a,b) {
  const soma = a + b;
  const sub = a - b;
  const mult = a * b;
  const div = a / b;
  return console.log(`soma = ${soma}, subtração = ${sub}, multiplicação = ${mult}, divisão = ${div} .`);
}
operacoes(3, 2)