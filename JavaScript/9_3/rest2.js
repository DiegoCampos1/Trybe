// es6 rest parameter 
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
function fun(...input){ 
  let sum = 0; 
  for(let i of input){ 
      sum+=i; 
  } 
  return sum; 
} 
console.log(fun(1,2)); //3 
console.log(fun(1,2,3)); //6 
console.log(fun(1,2,3,4,5)); //15  

// rest with function and other arguments 
// o parametro rest deve ser sempre o último dos argumentos
function fun(a,b,...c){ 
	console.log(`${a} ${b}`); //Mukul Latiyan 
	console.log(c); //[ 'Lionel', 'Messi', 'Barcelona' ] 
	console.log(c[0]); //Lionel 
	console.log(c.length); //3 
	console.log(c.indexOf('Lionel')); //0 
} 
fun('Mukul','Latiyan','Lionel','Messi','Barcelona'); 
