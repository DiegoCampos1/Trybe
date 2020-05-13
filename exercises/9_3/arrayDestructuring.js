const someArray = [ 0, 1, 2]

var [first, second, third] = someArray;
console.log(first, second, third)
// The general form of the syntax is:
// [ variable1, variable2, ..., variableN ] = array

//And you can capture all trailing items in an array with a “rest” pattern:
var [head, ...tail] = [1, 2, 3, 4];
console.log(tail);
// [2, 3, 4]