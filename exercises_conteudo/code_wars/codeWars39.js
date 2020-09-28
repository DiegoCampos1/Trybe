function fizzbuzzPlusPlus(numbers, words) {
  const mult = numbers.reduce((a,b) => a*b)
  const arr =[]
  for (let i = 1; i <= mult; i++) {
    if (i % 15 === 0) {
      const a = words[0]+words[1]
      arr.push(a)
    } else if(i % 5 ===0) {
      arr.push(words[1])
    } else if (i % 3 ===0){
      arr.push(words[0])
    } else {
      arr.push(i)
    }
    
  }
  return arr
  
}

console.log(fizzbuzzPlusPlus([3,5],["fizz","buzz"]))

function fizzbuzzPlusPlus2(numbers, words) {
  return [];
}

console.log(fizzbuzzPlusPlus([3,5],["fizz","buzz"]))