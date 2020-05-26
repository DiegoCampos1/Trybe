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

describe("Utilizando asinc e await para testar o ID", ()=>{
  test('Its ID defined', async()=> {
    const name = await getUserName(5);
    expect(name).toBe('Paul')
  })
  test('ID Undefined, testando reject', async () => {
    try {
      await getUserName(0);
    } catch (error) {
      expect(error).toEqual({error: "User with 0 not found."})
    }
  })
})