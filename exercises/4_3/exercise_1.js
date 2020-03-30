let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "sim"
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "sim"
}

// //Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
// function imprimaNome (a) {
//   return "Bem-vindo(a) " + a
// }
// console.log(imprimaNome(info.personagem));

// //Insira no objeto uma nova propriedade com o nome de chave “recorrente” e o valor “Sim” e, em seguida, imprima o objeto no console.
// console.log(info);

// //Faça um for/in que mostre todas as chaves do objeto.
// for(let i in info){
//   console.log(i);
// }

// //Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
// for(let i in info){
//   console.log(info[i]);
// }

// //Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”.

function imprimir (a,b) {
  for(i=0; i < info.length; i++);
  
  return console.log(a[i]+ " e " +b[i])
  
  }
imprimir(info, info2);