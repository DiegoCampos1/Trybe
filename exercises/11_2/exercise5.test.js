const functions = require('./functionsExercises');

// jest.mock('const functions = require('./functionsExercises');


describe('Questão 5', () => {
  test('questão 5', () => {
    const mockUpperCase = jest
    .spyOn(functions, "upperCase")
    .mockImplementation(word => word.toLowerCase());
    
    expect(functions.upperCase('TESTE')).toBe('teste')
    
    functions.upperCase.mockRestore();

    expect(functions.upperCase('teste')).toBe('TESTE')
  })
});