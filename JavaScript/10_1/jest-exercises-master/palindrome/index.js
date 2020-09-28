// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindrome = (str) => {
  let result = false;
  for (let i = 1; i <= str.length / 2; i++) {
    str[i - 1] === str[str.length - i] ? (result = true) : false;
  }
  return str.includes(" ") ? false : result;
};

module.exports = palindrome;
