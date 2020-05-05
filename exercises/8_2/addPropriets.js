const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

const newObject = function (objt, key, value) {
  objt[key] = value
  return objt
}

console.log(newObject((customer), "pagamento", "cartão"))