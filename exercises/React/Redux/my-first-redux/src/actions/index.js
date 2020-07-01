export const addAssignment = (value) => ({ type: 'ADD_ELEMENT', value });

// nossa action, por convenção, deve ser um objeto. Esse objeto pode possuir apenas a key type ou mais outras keys, 
// caso seja conveniente. Note que, no caso acima, criamos também uma key value, que guardará o valor recebido pela action.