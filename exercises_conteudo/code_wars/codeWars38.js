function disemvowel(str) {
  let string = ""
  arr = Array.from(str)
  for (let i = 0; i < arr.length; i++) {
    if( arr[i].toLowerCase() != 'a' && arr[i].toLowerCase() != 'e' && arr[i].toLowerCase() != 'i' && arr[i].toLowerCase() != 'o' && arr[i].toLowerCase() != 'u') {
      string += arr[i]
    };
    
    
  }
  return string
}

disemvowel("This website is for losers LOL!")