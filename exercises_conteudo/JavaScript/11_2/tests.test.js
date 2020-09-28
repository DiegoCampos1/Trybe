const service = require("./randonColor");

const random = require("./randonNumber");
console.log(random);

describe("testes randomNumber", () => {
  test("Called function", () => {
    random.randomNumber = jest.fn();
    // random.isDivisible = jest.fn();
    random.isDivisible();
    expect(random.randomNumber).toHaveBeenCalled();
  });
});

describe("Testes randomColor", () => {
  test("#randomRgbColor", () => {
    // testando se a função foi chamada e qual seu retorno
    service.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");
    // O mockReturnValue define um valor padrão de retorno
    // mockReturnValueOnce retorna o valor definido apenas uma vez,
    // e é importante pois pode ser encadeado para que chamadas sucessivas retornem valores diferentes.
    service.randomRgbColor();
    expect(service.randomRgbColor).toHaveBeenCalled();
    expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)");
  });

  test("#randomRgbColor2", () => {
    // testando quantas vezes a função foi chamada e qual seu retorno
    service.randomRgbColor = jest
      .fn()
      .mockReturnValue("default value")
      .mockReturnValueOnce("first call")
      .mockReturnValueOnce("second call");

    expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

    expect(service.randomRgbColor()).toBe("first call");
    expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

    expect(service.randomRgbColor()).toBe("second call");
    expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

    expect(service.randomRgbColor()).toBe("default value");
    expect(service.randomRgbColor).toHaveBeenCalledTimes(3);
  });
});
