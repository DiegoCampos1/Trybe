const array = new Promise((resolve, reject) => {
  let arr = []
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 50))
  }
  
  const sumArr = arr.reduce((acc, cur) => acc + cur * cur,0)
  
  if (sumArr < 8000) {
    const divisores = [2, 3, 5, 10]
    const sumDiv = divisores.map(divisor => sumArr/divisor)
    resolve (sumDiv)
  } else {
    reject ("É mais de oito mil! Essa promise deve estar quebrada!”")
  }

})

array.then().then((message) => {
  console.log(message)
}).catch((err) => {
  console.log(err)
})

