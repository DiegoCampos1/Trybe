let word = "trybe";
let ending = "be";

function verificaFimPalavra (palavra, final){
let guardaWord ="";
let guardaEnding ="";

for(i=0; i<palavra.length; i+=1){
  
guardaWord +=palavra[i];
}
for(i=0; i<final.length; i+=1){
  guardaEnding +=final[i];
}
if (guardaEnding  )
return guardaWord + guardaEnding;

}


console.log(verificaFimPalavra(word, ending));