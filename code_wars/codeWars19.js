
function duplicate(word) {
  const array = word.split('')
  //  const ver = array[0]
  let res = ''
  for (let i = 0; i < array.length; i += 1) {
    
    if (array[i] == array) {
      res += ")"
    } else {
      res += "("
    }
    }
  
  return res
}
console.log(duplicate("excelente"))