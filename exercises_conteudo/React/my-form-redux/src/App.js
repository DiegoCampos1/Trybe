import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import ClientesCadastrados from './components/ClientesCadastrados';
import Cadastro from './components/Cadastro'

function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/ClientesCadastrados" component={ClientesCadastrados} />
          <Route path="/Cadastro" component={Cadastro} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
