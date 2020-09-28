import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ClientesCadastrados extends Component {
  render() {
    return (
      <div>
        <Link to="/Cadastro">Clique para cadastrar</Link>
      </div>
    );
  }
}

export default ClientesCadastrados;
