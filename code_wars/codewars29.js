function accum(s) {
  const array = s.split("");
  let aux = ""  
  for (let i = 0; i < array.length; i++) {
    let currentChar = array[i]
    for (let j=0; j<=i; j ++){
      if(j == 0){
      aux += array[i].toUpperCase(currentChar);
      } else {
        aux += array[i].toLowerCase(currentChar);

      }
      
    }

    if (i != array.length -1) {
        aux += "-"
    }
  }

  return aux;
}

console.log(accum("ZpgLnrxqenU"));