let costPrice = 100;
let sellPrice = 200;
let profit = 0;

if (costPrice > 0 || sellPrice > 0) {
    profit = (sellPrice - costPrice * 1.2) * 1000
    console.log("When selling one thousand products, the profit will be: " + profit)
}
else (
    console.log("ERRO: The price of the cost or of the sell is 0 or less")
)