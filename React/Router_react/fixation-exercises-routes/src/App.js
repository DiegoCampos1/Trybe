// arquivo App.js, criado pelo create-react-app, modificado
import React, { Component } from 'react';
import Home from './Home';
import Users from './Users';
import About from './About';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ol>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ol>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/about' component={About} />
        <Route path='/Users/:ID' component={Users} />
        <Route  
        path='/users' 
        render={props => <Users {...props} greetingMessage={"Bom dia Consagrado"} />} 
        />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
