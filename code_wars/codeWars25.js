function sum(digits) {
if (isNaN(digits)){
 return ""
} else {
let array = Array.from(String(digits), Number);
let resultado = 0
let print = ""
for (let i = 0 ; i < array.length ; i += 1){
 resultado += array[i]
  if (i === array.length -1) {
  print += array[i] + " = "
  } else {
  print += array[i] + " + "
  } 
}

return `${print}${resultado}`
}
}