const test = ['1:0', '3:0' , '4:0']

function points(games) {
let acumulador = 0 
for (let i = 0; i<games.length; i+=1){
  const a = test[i].charAt(0)
  const b = test[i].substr(2)
  if (a > b){
    acumulador += 3
  }else if ( a == b){
    acumulador += 1
  } 
}
return acumulador
}

console.log(points(test))