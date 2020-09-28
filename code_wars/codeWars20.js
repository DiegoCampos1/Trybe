function XO(str) {
  const a = str.split('')
  let x = 0
  let o = 0
  for (let i = 0; i < a.length; i += 1){
    if (a[i] == "x" || a[i] =="X"){
      x += 1
    }
    if (a[i] == "o" || a[i] =="O"){
      o += 1
    }
  }
  if ( x == o){
    return true
  } else {
    return false
  }
}

console.log(XO('Oo'))