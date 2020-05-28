import React from "react";
import logo from "./logo.svg";
import "./App.css";

const task = () => {
  const list = [ 'Inglês', 'Trybe', 'IGTI', 'Rockseat', 'Udemy', 'Soneca']
  const li = list.map(tarefa => <li>{tarefa}</li>)
  return li;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {task()}
        </ul>
      <p>E esse foi meu hello world em React...</p>
      </header>
    </div>
  );
}

export default App;
