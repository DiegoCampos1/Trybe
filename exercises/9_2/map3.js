// Outras formas de usar o .map é unir dois arrays para criar um novo. Considere que você possui duas listas: 
// o preço do primeiro produto (Arroz) é o primeiro elemento da lista prices (2.99), e assim por diante:

// Deseja-se juntá-las em apenas uma lista de objetos que fique dessa forma:
// const listProducts = [{ Arroz: 2.99 },...]

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => {
  return listProducts.map((product, index) => (
    { [product]: listPrices[index] }
  ));
};

console.log(updateProducts(products, prices));

