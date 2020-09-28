// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples (capital, juros, n = 1) {
  let result = capital * (1 + juros * n)
  return result
}

console.log(jurosSimples(100, 0.2, 2))

function jurosComposto (capital, juros, n = 1) {
  let result = capital * (1 + juros)**n
  return result
}
console.log(jurosComposto(100, 0.2, 2))