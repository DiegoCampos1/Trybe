// Faça um teste que verifique a chamada dessa API para um resultado específico. 
// Para isso, faça um mock do fetch, que faz a chamada à API, utilizando os seguintes dados:

const API_URL = 'https://icanhazdadjoke.com/';
const fetch = require('node-fetch')

const fetchJoke = () => {
  return fetch(API_URL, { headers: { Accept: 'application/json' }})
    .then(response => response.json())
    .then(data => data.joke);
};

