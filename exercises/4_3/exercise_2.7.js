let word = "trybe";
let ending = "be";

function verificaFimPalavra (a, b) {
let finalPalavra = '';
let varredura = a.length - b.length;
for (i=varredura; i<a.length; i++){
  finalPalavra += a[i]
}
if (finalPalavra == b) {
  return true;
}else {
  return false;
}
}
console.log(verificaFimPalavra(word, ending));