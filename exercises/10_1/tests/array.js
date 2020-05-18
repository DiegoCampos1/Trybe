
function retornePares(array){
  return array.filter(x => x%2 == 0)
}
console.log(retornePares([1,2,3,4,5,6,7,8,9,10]))
function addItem4(array){
 array.push('item4')
 return array
}

module.exports = {
 retornePares,
 addItem4
}