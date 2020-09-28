const descendingOrder = (n) => parseInt(n.toString().split('').sort((a,b) => b - a ).map(Number).join(""));
   


const nums = 12345678

console.log(descendingOrder(nums))