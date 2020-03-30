let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "sim"
};

//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
function imprimaNome (a) {
  return "Bem-vindo(a) " + a
}
console.log(imprimaNome(info.personagem));

//Insira no objeto uma nova propriedade com o nome de chave “recorrente” e o valor “Sim” e, em seguida, imprima o objeto no console.
console.log(info);
