function getMiddle(s) {
  let array = ''
  if (s.length % 2 != 0) {
  let i = Math.trunc(s.length/2)
  array += (s[i])
  }
  if (s.length % 2 == 0) {
  let i = s.length/2
  array  += (s[i-1])
  array += (s[i])
  }

  return array.toString()
}
console.log(getMiddle("test"))

//Math.trunc(s/2)