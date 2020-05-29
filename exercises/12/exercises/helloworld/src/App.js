import React from "react";
import logo from "./logo.svg";
import "./App.css";

const task = () => {
  const list = [ 'Inglês', 'Trybe', 'IGTI', 'Rockseat', 'Udemy', 'Soneca']
  const li = list.map(tarefa => <li>{tarefa}</li>)
  return li;
};

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
      <Greeting name="Diego" lastName="Campos" />
    </div>
        <ul>
          {task()}
        </ul>
      <p>E esse foi meu hello world em React...</p>
      </header>
    </div>
  );
}

export default App;
