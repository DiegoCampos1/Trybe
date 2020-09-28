import React from 'react';
import { Link } from 'react-router-dom';


const Cadastro = () => (
  <div>
    <label>Nome:<input type="text"></input></label>
    <label>idade:<input type="number"></input></label>
    <label>e-mail<input type="e-mail"></input></label>
    <button>Cadastrar</button>
    <Link to="/ClientesCadastrados"><button>Clientes Cadastrados</button></Link>
  </div>
)

export default Cadastro;
