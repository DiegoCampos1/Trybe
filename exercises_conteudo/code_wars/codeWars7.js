function barTriang(p1, p2, p3){
  let x = (p1[0] + p2[0] + p3 [0]) / 3
  let ax = parseFloat(x.toFixed(4))
  let y = (p1[1] + p2[1] + p3 [1]) / 3
  let ay = parseFloat(y.toFixed(4))
  return [ax, ay]
}

console.log(barTriang([4,6], [12, 4], [10,10]))