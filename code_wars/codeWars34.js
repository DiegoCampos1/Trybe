const isSquare = (n) =>
  n === 0 ? true : n > 0 && Math.sqrt(n) % 1 === 0 ? true : false;
// (n > 0 && Math.sqrt(n) % 1 === 0) (n === 0);

console.log(isSquare(0));
