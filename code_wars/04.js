//04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.

function resto (dividendo, divisor) {
  const div = dividendo / divisor
  const rest = dividendo % divisor
  return [div, rest]
  
}

console.log(resto(7,2))