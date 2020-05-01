const button = document.querySelector(".btn");
const p = document.querySelector(".p1")
let clickCount = 0
console.log(button, p)
button.addEventListener("click", () => {
  clickCount += 1
  p.innerHTML = `Já clicou ${clickCount} vez(es) consagrado(a)`
})