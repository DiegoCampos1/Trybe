function mult (array, num) {
  
  const resultado = []
  for(let i = 0; i < array.length ; i ++){
    let result = array[i]*num
    resultado.push(result)
  }
  return console.log(resultado)
}

const array = [1, 2, 3, 4, 5]
const num = 6

mult(array,num)

function mult2(array, num) {
  if (num > 5){
    const resultado = []
  for(let i = 0; i < array.length ; i ++){
    let result = array[i]*num
    resultado.push(result)
  }
  return console.log(resultado)
  }
}
mult2(array, num)