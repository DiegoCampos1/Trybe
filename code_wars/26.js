//26) Fazer um programa para encontrar todos os pares entre 1 e 100.

function pares () {
  let array = []
  for (let i = 1 ;  i<=100 ; i +=1){
    if( i % 2 == 0 )
    array.push(i)
  }
  return console.log(array)
}

pares()
