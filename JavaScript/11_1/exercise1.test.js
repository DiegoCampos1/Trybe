const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

test('Testando caixa alta', done => {
  uppercase('filipe', (result) => {
    expect(result).toBe('FILIPE');
    done();
  });
});
