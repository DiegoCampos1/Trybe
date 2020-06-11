Torne a aplicação navegável, encapsulando o que é retornado pelo App dentro do componente BrowserRouter.

Agora, adicione dentro de BrowserRouter uma lista contendo 3 links:

um link que aponte para o caminho de URL “/” contendo o texto Home;

um link que aponte para o caminho de URL “/about” contendo o texto About;

um link que aponte para o caminho de URL “/users” contendo o texto Users.

OBS: averigue que os links estão atualizando a URL do seu browser quando são clicados.

Substitua o componente Home por um Route que mapeia o caminho de URL “/” para Home.

Adicione uma rota que mapeie o caminho de URL “/about” para o componente About. Acesse http://localhost:3000/about para ver se o componente About foi renderizado!

Legal, o componente About foi renderizado, mas o componente Home foi também, o que não era desejado para o nosso caso. 😭 Altere a forma como a correspondência de caminho da URL está sendo feita para renderizar Home, de modo que Home somente seja renderizado se o caminho da URL for exatamente igual a “/”.

Por fim, adicione uma rota que mapeie o caminho de URL “/users” para o componente Users. Acesse http://localhost:3000/users para ver se somente o componente Users foi renderizado.

Altere o componente Users criado acima no projeto fixation-exercises-12-3, para poder fazer o exercício a seguir.

