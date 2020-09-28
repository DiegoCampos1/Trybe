class Pen {
  constructor(point, color, ink = 100) {
    this.point = point;
    this.color = color;
    this.ink = ink;
  }

  loseInk(quant) {
    this.ink -= quant;
  }

  sign() {
    this.loseInk(10);
    return `'I've signed a text with a ${this.color} pen. charge: ${this.ink}%'`;
  }
}

const myPen = new Pen (0.7, 'black');

console.log(myPen.sign()); // 'I've signed a text with a black pen. charge: 90%'

/* Perceba que não foi necessário definir, no objeto myPen, qualquer funcionalidade 
extra para ter acesso ao método sign, pois essa ação é intrínseca à criação do objeto 
- ou seja, todo objeto derivado da classe Pen possuirá, dentro de si, a capacidad
e de utilizar o método sign. */