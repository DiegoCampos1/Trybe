//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function nomeMaior (a){
  let maior = "";
  for (i=0; i<a.length ; i++)
  if (a[i].length > maior.length) maior = a[i];
  
return maior;
}
console.log(nomeMaior(nomes));