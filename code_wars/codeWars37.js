function findSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
      sum += i;
    }
  }
  return sum-n;
}

console.log(findSum(10))