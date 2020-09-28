const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('Verifiacando se existe ID retornando', () => {

  test ('Name its defined', () => {
    expect.assertions(1);
    return getUserName('5').then(name =>{
      expect(name).toBe('Paul')
    } )
  })
  
  test ('Name undefined', () => {
    expect.assertions(1);
    return getUserName('0').catch(error =>{
      expect(error.error).toBe('User with 0 not found.')
    } )
  })
})