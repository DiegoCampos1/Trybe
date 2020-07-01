import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.list.map(element => (
            <p>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}
// Estamos fazendo um map com os elementos presentes no array list que, por sua vez, está presente no props. Mas como isso foi parar lá?
// mapStateToProps, auto-descritiva, mapeia as entidades armazenadas nos estados para uma props.
// Basta acessar o caminho do state com o reducer desejado e nomear a prop que o receberá (no caso, chamamos de list).

const mapStateToProps = state => ({
  list: state.listReducer});

export default connect(mapStateToProps)(List);

// Como no caso estamos fazendo apenas leitura dos dados, basta passar a função mapStateToProps no primeiro parênteses e o componente no segundo.