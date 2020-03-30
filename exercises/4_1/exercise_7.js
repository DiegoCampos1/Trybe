let nota = 65;
let result = null;

if (nota >= 90) {
    result = "A";
}
else if (nota >= 80) {
    result = "B";
}
else if (nota >= 70) {
result = "C";
}
else if (nota >= 60) {
    result = "D";
}
else if (nota >= 50) {
    result = "E";
}
else {
    result = "F";
}

console.log("Sua nota é: " + result)