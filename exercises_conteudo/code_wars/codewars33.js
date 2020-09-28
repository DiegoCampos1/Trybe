const squareDigits = (num) =>
  parseInt(
    num
      .toString()
      .split("")
      .map(Number)
      .map((a) => a ** 2)
      .join("")
  );

console.log(squareDigits(9119));
