import React from 'react';


// Utilizando o código do componente Counter, adicione, imediatamente após sua montagem, o valor 10 na chave counter do estado.
// Com o mesmo código do exercício anterior, impeça que a renderização seja feita, caso o valor na chave counter esteja entre 13 e 15.
class CounterDisplay extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value >= 13 && nextProps.value <= 15 ) return false;
    return true;
  }

  render() {
    return <div> counter: {this.props.value}</div>;
  }
}

export default CounterDisplay;
