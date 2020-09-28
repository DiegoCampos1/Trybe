var moveZeros = function (arr) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  return [...arr2, ...arr1];
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
