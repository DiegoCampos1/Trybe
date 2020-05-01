const button = document.querySelector(".btn");
const p = document.querySelector(".p1")
let clickCount = 0
console.log(button, p)
button.addEventListener("click", () => {
  clickCount += 1
  if (clickCount < 10) {
    p.innerHTML = `Já clicou ${clickCount} vez(es) consagrado(a)`
  } else if (clickCount < 21) {
    p.innerHTML = `Já são ${clickCount} cliques, não tem mais o que fazer?!`
  } else {
    p.innerHTML = `Cansei!! Só vou continuar contando porque sou obrigado via JS. ${clickCount} cliques na caralha do butão`
  }
})
