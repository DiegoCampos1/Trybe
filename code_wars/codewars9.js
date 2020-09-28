function positiveSum(arr) {
  let contador = 0
  for (let i = 0 ; i < arr.length ; i += 1){
    if (arr[i] > 0){
      contador += arr[i]
    }
  }
  return contador
}

console.log(positiveSum[1,2,3,4,5])