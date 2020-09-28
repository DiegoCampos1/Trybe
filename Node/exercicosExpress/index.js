const express = require('express');
const crypto = require('crypto');
const app = express();
const cryptoHandle = () => {
  return crypto.randomBytes(12).toString('hex');
};
const validateEmail = (emailAdress) => {
  const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true;
  }
  return false;
};

app.get('/', (req, res, next) => {
  console.log('Entrei');
  res.json({ message: 'Hello world' });
});
const validatePassword = (password) => {
  Number(password)
  const validation = password.split('').every((char) => {
    return char.match(/^[0-9]{1,}$/);

  });
  if (password.length >= 4 && password.length <= 8 && validation) return true;
  return false;
};

app.post('/login', (req, res, next) => {
  console.log(req.query);
  const { password, email } = req.query;
  const hash = cryptoHandle();
  if (validateEmail(email) && validatePassword(password))
    return res.status(200).send(hash);
  res.status(403).send('E-mail or password is not correct');
});
app.listen(3001, () => {
  console.log('O pai tá ON!');
});

