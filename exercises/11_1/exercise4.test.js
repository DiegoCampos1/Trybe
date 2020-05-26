const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

describe('exercise4', () => {
  test('apiGitHub includes', async () => {
    const data = await getRepos('https://api.github.com/users/tryber/repos');
    expect(data.includes('sd-01-week4-5-project-todo-list')).toBe(false);
    expect(data.includes('sd-01-week4-5-project-meme-generator')).toBe(false);
  });
});