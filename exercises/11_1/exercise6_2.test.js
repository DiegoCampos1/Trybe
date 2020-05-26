const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.age === age);
      if (arrayAnimals) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui animal com essa idade.' });
    }, 100);
  })
);

const getAnimal = (age) => findAnimalsByAge(age)


describe('Testando findAnmals by Age', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      // expect.assertions(1);
      return getAnimal(5).then(animal => {
        expect(animal).toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }]);
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      // expect.assertions(1);
      return getAnimal('7').catch(err =>
        expect(err.error).toEqual('Não possui animal com essa idade.')
      );
    });
  });
});