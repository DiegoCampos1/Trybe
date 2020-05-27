function randomNumber(){
  Math.floor(Math.random() * 100);

}

function isDivisible(number){
  // randomNumber=jest.fn()
  (randomNumber() % number) === 0;
}

// describe("testes randomNumber", () => {
//   test("Called function", () => {
//     randomNumber = jest.fn();
//     isDivisible();
//     expect(randomNumber).toHaveBeenCalled();
//   });
// });

module.exports = { randomNumber, isDivisible };