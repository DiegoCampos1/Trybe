const randomNumber = () => {
  return Math.floor(Math.random * 101);
}

let upperCase = (str) => str.toUpperCase()
let first = (str) => str[0];
let concat = (str1, str2) => str1 + str2;

module.exports = { randomNumber, upperCase, first, concat };