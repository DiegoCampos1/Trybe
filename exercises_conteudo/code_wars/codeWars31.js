const arrayPlusArray = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((a, b) => a + b);

console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));
