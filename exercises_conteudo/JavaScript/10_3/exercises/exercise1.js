 
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: { Accept: 'application/json' },
  });
  const responseJSON = await response.json();
  return responseJSON.joke;
};

window.onload = async () => {
  const h2 = document.getElementById('jokeContainer');
  const joke = await fetchJoke();
  h2.innerHTML = joke;
};
