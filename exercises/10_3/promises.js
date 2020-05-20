// Sem utilizar promisses
function sumNumbers() {
  let result = 1 + 1;
  if (result === 2) {
    sucessCallback();
  } else {
    errorCallback();
  }
}

function sucessCallback() {
  console.log("Yeah! Number 2");
}

function errorCallback() {
  console.log("Oops! Something wrong.");
}

sumNumbers();

// utilizando promisse

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("sucess");
  } else {
    reject("Failed");
  }
});

// quando se tem uma promisse criada se chama a partir do then o resolve,
// e o catch quando o reject é chamado.

p.then((message) => {
  console.log('This is in then ' + message)
})
.catch((err) => {
  console.log('This is the catch ' + err)
})