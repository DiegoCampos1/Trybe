function capital(capitals){
  if(capitals.length === 1) return `The capital of ${capitals[0].state} is ${capitals[0].capital}`
}



console.log(capital([{state: 'Maine', capital: 'Augusta'}]))