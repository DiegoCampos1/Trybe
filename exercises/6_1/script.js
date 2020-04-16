const mail = document.querySelector('#email')
const button1 = document.querySelector('#button1')
const uf = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO" ]; 

const estado = document.querySelector('#select')

for (let i = 0; i < uf.length; i += 1){
  estado.innerHTML += ` <option value=${uf[i]}>${uf[i]}</option>`
}


const email = document.querySelector('#email')
console.log(email)


function validateEmail() {
console.log(email.value)
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(email.value.match(mailformat)) {
// document.form1.text1.focus();
 console.log(`ok`)
 return true;

 } else {
 alert("You have entered an invalid email address!");
// document.form1.text1.focus();
console.log(`false`)
return false;
}
}


email.addEventListener('change',validateEmail)

