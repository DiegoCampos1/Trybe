const button = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const p = document.querySelector(".p1")
const p2 = document.querySelector(".p2")
const p3 = document.querySelector(".p3")
const input = document.querySelector(".form-control");
const skills =["HTML", "CSS", "JavaScript", "GitHub", "Comunicação"]


//Contador de Clique
let clickCount = 0
button.addEventListener("click", () => {
  clickCount += 1
  if (clickCount < 10) {
    p.innerHTML = `Já clicou ${clickCount} vez(es) consagrado(a)`
  } else if (clickCount < 21) {
    p.innerHTML = `Já são ${clickCount} cliques, não tem mais o que fazer?!`
  } else {
    p.innerHTML = `Cansei!! Só vou continuar contando porque sou obrigado via JS. ${clickCount} cliques`
  }
})

// 4) Gerando a frase e substituindo o '+', ordenando o array skills para printar na tela as habilidades
button2.addEventListener("click", () => {
  const name = input.value
  const frase1 = `Tryber ${name} aqui!
  tudo bem?`
  p2.innerText = frase1
  p3.innerText = `${frase1}
  Minhas Principais habilidades são:
  * ${skills.sort()[0]}
  * ${skills.sort()[1]}
  * ${skills.sort()[2]}
  * ${skills.sort()[3]}
  * ${skills.sort()[4]}`
})
