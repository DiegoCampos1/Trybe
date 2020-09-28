function abbrevName(name){
  var nam = name.split(' ');
  return nam[0].charAt(0).toUpperCase()+'.' + nam[1].charAt(0).toUpperCase();
}

console.log(abbrevName("Sam Harris"));