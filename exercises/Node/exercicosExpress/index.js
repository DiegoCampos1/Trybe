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

const validatePassword = (password) => {
  const validation = password.split('').every((char) => {
    typeof char === Number;
  });
  if (password.length >= 4 && password.length <= 8 && validation) return true;
  return false;
};

app.post('/login', (req, res, next) => {
  const { password, email } = req.query;
  const hash = cryptoHandle();
  if (validateEmail(email) && validatePassword(password)) return res.status(200).send(hash);
  res.status(403).send('E-mail or password is not correct');
});

app.listen(3000, () => {
  console.log('O pai tá ON!');
});
