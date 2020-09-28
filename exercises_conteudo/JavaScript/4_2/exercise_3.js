 
let n = 5;

for (let i = 1; i <= n; i++) {
   let linha = "*".repeat(i);
    let espaco = " ".repeat(n - i);
    console.log(espaco + linha);
}
