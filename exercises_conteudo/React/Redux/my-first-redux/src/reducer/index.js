const INITIAL_STATE = [];

function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_ELEMENT':
      return [...state, action.value];
    default:
      return state;
  }
}

export default listReducer;

// Vamos analisar o que está acontencedo:

// Primeiro, definimos um estado inicial para nosso reducer;

// Um reducer deve receber como parâmetro um estado e uma ação;

// A ação, por convenção, deve ser um objeto e possuir a key type. É essa key que define como o reducer vai manipular o estado.

// No exemplo, como estamos criando uma lista e só queremos adicionar elementos, caso o type seja igual a "ADDELEMENT", estamos 
// instruindo nosso reducer a guardar todo o estado anterior, utilizando _spread operator, e a adicionar o novo elemento, 
// que nesse caso está na key value da nossa action. Caso o type seja diferente de "ADD_ELEMENT", 
// o reducer deverá cair no default do switch, que preserva o state.
