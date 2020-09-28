const calculaImc = (peso, altura) => {
  return peso / altura ** 2;
};

const situacao = (imc) => {
  if (imc < 18.5) {
    return 'Abaixo do peso (magreza)';
  }
  if (imc < 25) {
    return 'Peso normal';
  }
  if (imc < 30) {
    return 'Acima do peso (sobrepeso)';
  }
  if (imc < 35) {
    return 'Obesidade grau I';
  }
  if (imc < 40) {
    return 'Obesidade grau II';
  }
  return 'Obesidade graus III e IV';
};

const respostaAoUsuario = (nome, peso, altura) => {
  const imc = calculaImc(peso, altura).toFixed(2);
  const resposta = situacao(imc);
  console.log(`Oi amigo(a) ${nome}, seu imc é: ${imc}, e sua situação é: ${resposta}`);
  return;
};

module.exports = { calculaImc, situacao, respostaAoUsuario };
