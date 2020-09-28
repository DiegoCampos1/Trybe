function highAndLow(numbers){
    const array = numbers.split(' ').map(Number)
    array.sort(function(a,b){return a-b})
    const a = array.pop()
    const b = array.shift()
    return `${a} ${b}`
  }
  console.log(highAndLow("4 5 29 54 4 0"))