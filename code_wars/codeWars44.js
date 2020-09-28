async function getMovieList(year) {
  fetch(`https://jsonmock.hackerrank.com/api/movies?Year=${year}`).then(response => response.json()).then(responseJSON => data)
  // const resp = await data.JSON();
  // if (data.status !== 200) {
  //     throw Error(body.detail);
  // }
  return data.map((movie) => movie.Title)
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/movies?Year=<year>
}

console.log(getMovieList(2015))