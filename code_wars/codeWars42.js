function encode(string) {
  const array = string.split('');
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] == 'a') {
      result.push('1');
    } else if (array[i] == 'e') {
      result.push('2');
    } else if (array[i] == 'i') {
      result.push('3');
    } else if (array[i] == 'o') {
      result.push('4');
    } else if (array[i] == 'u') {
      result.push('5');
    } else {
      result.push(array[i]);
    }
  }
  return result.join('');
}

console.log(encode('How are you today?'));

function decode(string) {
  const array = string.split('');
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] == '1') {
      result.push('a');
    } else if (array[i] == '2') {
      result.push('e');
    } else if (array[i] == '3') {
      result.push('i');
    } else if (array[i] == '4') {
      result.push('o');
    } else if (array[i] == '5') {
      result.push('u');
    } else {
      result.push(array[i]);
    }
  }
  return result.join('');
}

console.log(decode('h2ll4'));
