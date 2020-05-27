// function randomNumber() {
//   return Math.floor(Math.random * 101);
// }

let { randomNumber, upperCase, first, concat } = require('./functionsExercises');

describe("Exercise 1", () => {
  test("Numero randomico entre 0 e 100", () => {
    randomNumber = jest.fn().mockReturnValue(10);
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
});



describe("Exercise 2", () => {
  test("Divisao entre dois numeros", () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b) => a/b);
    expect(randomNumber(6,2)).toBe(3);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
});

describe("Exercise 3", () => {
  test("Multiplicação 3 numeros", () => {
    randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a*b*c);
    expect(randomNumber(6,2, 1)).toBe(12);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
});

// let upperCase = (str) => str.toUpperCase()
// let first = (str) => str[0];
// let concat = (str1, str2) => str1 + str2;

describe("Exercise 4", () => {
  test("Novas implementações", ()=>{
    upperCase = jest.fn().mockImplementationOnce((str) => str.toLowerCase());
    first = jest.fn().mockImplementationOnce((str) => str[str.length -1]);
    concat = jest.fn().mockImplementationOnce((str1, str2, str3) => str1+str2+str3)

    expect(upperCase('Aaa')).toBe('aaa');
    expect(first('Aaa')).toBe('a');
    expect(concat('a', 'b', 'c')).toBe('abc');
  });
});



