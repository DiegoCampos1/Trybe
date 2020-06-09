import React, { Component } from 'react';
import Button from './Button';
import Alert from './Alert';
import Dropdown from './Dropdown'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      isDisableButton: false,
    };
  }

  changeTitle = (value) => {
    this.setState({ title: value });
  };

  changeShowComponent = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
      isDisableButton: !state.isDisableButton,
    }));
  };

  
  render() {
    const content = [
      {id: 1, item: 'Programar'},
      {id: 2, item: 'Basquete'},
      {id: 3, item: 'Video Game'},
      {id: 4, item: 'Filmes e Série'},
    ];
    return (
      <div className="main">
        <Button
          content="Clique aqui"
          isDisable={this.state.isDisableButton}
          showComponent={this.changeShowComponent}
          value="Título Show"
        />
        {this.state.showModal && (
          <Alert
            hideComponent={this.changeShowComponent}
            
          />
        )}
        <Dropdown content={content}>Título da lista customizado</Dropdown>

      </div>
    );
  }
}

export default App;
