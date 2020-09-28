let chessPiece = "Knight";
let chessPieceLowerCase = chessPiece.toLowerCase();

switch (chessPieceLowerCase) {
    case "king":
        console.log("One square in any direction")
        break;
    case "queen":
        console.log("Everywhere")
        break;
    case "rook":
        console.log("Straight")
        break;
    case "bishop":
        console.log("Diagonal")
        break;
    case "knight":
        console.log("L move")
        break;
    case "pawn":
        console.log("Forward one square")
    default:
        console.log("ERRO: This is not a chess piece")
        break;
}