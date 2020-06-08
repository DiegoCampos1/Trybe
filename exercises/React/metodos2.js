/* A partir da classe acima, crie um método chamado wroteText, o qual recebe uma string como parâmetro, 
retornará o texto passado e diminuirá a tinta da caneta numa quantidade equivalente à quantidade de caracteres da string.
 */

class Pen {
  constructor(point, color, string, ink = 100) {
    this.point = point;
    this.color = color;
    this.ink = ink;
    this.string = string
  }

  loseInk(quant) {
    this.ink -= quant;
  }

  wroteText() {
    let quant = 2 * this.string.length
    this.loseInk(quant);
    return `Eu escrivi a string: ${this.string} com ${this.string.length} letras. charge: ${this.ink}%'`;
  }
}

const myPen = new Pen (0.7, 'black', 'Diego');

console.log(myPen.wroteText()); // 'I've signed a text with a black pen. charge: 90%'
