function animals (heads, legs) {
//25 e 70
let vaca = ((legs - 2*heads) / 2)
let galinha = heads - vaca

if( vaca < 0 || galinha < 0 || vaca != parseInt(vaca) || galinha != parseInt(galinha)){
  return `No solution`
}

return [galinha, vaca]
}

console.log(animals(12, 25))