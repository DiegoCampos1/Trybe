// O operador $lookup foi introduzido na versão 3.2 do MongoDB e vem evoluindo desde então. 
// Com ele, é possível juntar documentos de outra coleção (join). Como resultado dessa junção, 
// um elemento do tipo array é adicionado a cada documento da coleção de entrada, 
// contendo os documentos que deram "match" na coleção com a qual se faz o "join".

// Existem 4 parâmetros básicos para montar um $lookup:
// from: uma coleção no mesmo database para executar o join;
// localField: o campo da coleção de onde a operação de agregação está sendo executada. Será comparado por igualdade com o campo especificado no parâmetro foreingField;
// foreingField: o campo da coleção especificada no parâmetro from que será comparado com o campo localField por igualdade simples;
// as: o nome do novo array que será adicionado

// orders
// { _id: 1, item: "almonds", price: 12, quantity: 2 },
// { _id: 2, item: "pecans", price: 20, quantity: 1 },
// { _id: 3 }

// { _id: 1, sku: "almonds", description: "product 1", instock: 120 },
// { _id: 2, sku: "bread", description: "product 2", instock: 80 },
// { _id: 3, sku: "cashews", description: "product 3", instock: 60 },
// { _id: 4, sku: "pecans", description: "product 4", instock: 70 },
// { _id: 5, sku: null, description: "Incomplete" },
// { _id: 6 }

// Imagine que você queria retornar em uma única query os documentos das duas coleções acima. 
// A primeira coisa é encontrar um campo em comum entre elas. Nesse caso, seriam os campos 
// item (coleção orders) e o campo sku (coleção inventory). Quando cruzados na operação abaixo,
//  um novo campo, chamado inventory_docs, será adicionado ao resultado final:



db.orders.aggregate([
  {
    $lookup: {
      from: "inventory",
      localField: "item",
      foreignField: "sku",
      as: "inventory_docs"
    }
  }
]);
// Selecione todos os clientes com as suas respectivas transações feitas;
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "from"
    }
  },
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "to"
    }
  }
]);
// Selecione 4 clientes com as suas respectivas transações feitas;

db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "from"
    }
  },
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "to"
    }
  },
  {
    $limit : 4
  }
]);

// Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas;

db.clients.aggregate([
  {$match : {State: "Florida"}},
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "from"
    }
  },
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "to"
    }
  }
]).pretty();

