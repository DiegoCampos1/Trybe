const fizzBuzzCustom = function(stringOne = "Fizz", stringTwo = "Buzz", numOne = 3, numTwo = 5) {
  let arr =[]
  for (let i = 1; i <= 100; i++) {
    let f = i % numOne == 0, b = i % numTwo == 0;
    arr.push(f ? b ? `${stringOne}${stringTwo}` : `${stringOne}` : b ? `${stringTwo}` : i);
  }
  return arr
};

console.log(fizzBuzzCustom())