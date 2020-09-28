function getCount(str) {
  var vowelsCount = 0;
  const array = str.split('')
  for (let i = 0 ; i <array.length ; i+=1){
    if (array[i] == "a"|| array[i] == "e" || array[i] == "i" || array[i] == "o" || array[i] == "u") {
      vowelsCount += 1
    }
  }

  return vowelsCount
}

console.log(getCount('abracadabra'))