function solution (number) {
  let resultado = 0
  for (let i = 1; i < number; i += 1){
    if (i % 3 == 0 || i % 5 ==0){
      resultado += i
    }
  }
  return resultado
}

console.log(solution(10))