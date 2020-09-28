import React, { Component } from 'react';
import MyList from './MyList';
import Showbutton from './Showbutton';
import Pictures from './Pictures';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Minha Lista de Componentes',
    };
  }

  changeTitle = (value) => {
    this.setState({ title: value });
  };

  render() {
    return (
      <div className="main">
        <h1>{this.state.title}</h1>
        <MyList>
          <li>SUPIMPA</li>
          SUPIMPA 2.0 - Melhor palavra!
          <Showbutton changeTitle={this.changeTitle} value="Título Show" />
        </MyList>
        <Pictures
          src="https://course.betrybe.com/images/logo_white.png"
          alt="Logo da Trybe"
          height={100}
          legenda="Lista feita na Trybe"
        />
      </div>
    );
  }
}
export default App;
