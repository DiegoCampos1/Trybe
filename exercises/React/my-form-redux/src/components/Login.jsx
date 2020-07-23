import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default class Login extends Component {
  // redirectToCadastro(e) {
  //   // e.preventdefault()
  //   return <Link  />
  // }

  render() {
    return (
      <div>
        <p>Bem vindo a Paginda de Login</p>
        <form>
          <div>
            <label>
              E-mail
              <input
                type="email"
                name="email"
                maxLength="50"
                required
                // value={}
                // onChange={}
              />
            </label>
            <label>
              Senha
              <input
                type="password"
                name="Name"
                maxLength="50"
                required
                // value={}
                // onChange={}
              />
            </label>
          </div>
        </form>
            <Link to="/ClientesCadastrados"><button>LOGIN</button></Link>
      </div>
    );
  }
}
