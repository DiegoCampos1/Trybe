import React from 'react';
import { connect } from 'react-redux';
import { addAssignment } from '../actions';

class InputsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textValue: '' };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={(event) => this.setState({ textValue: event.target.value })}
        />
        <button onClick={() => this.props.add(this.state.textValue)}>Adicionar tarefa</button>
      </div>
    );
  }
}

// A função mapDispatchToProps é a responsável por disparar - fazer o dispatch de - uma ação para o reducer.
// mapDispatchToProps mapeia os dispatchs para o props.
const mapDispatchToProps = (dispatch) => ({
  // Retorno sempe em objeto
  add: (e) =>
    dispatch( 
      addAssignment(e),
    ) /*estamos nomeando uma propriedade chamada add, que faz o dispatch da action addAssignment com um parâmetro.*/,
});
// Para termos acesso às funcionalidades do Redux, seja a de ler os dados ou manipulá-los,
// precisamos acessá-las como props de um componente.

// única maneira de enviarmos uma action para um reducer é fazendo seu dispatch.

// O método connect possui a seguinte estrutura: connect()(). É ele quem nos da acesso ao store do Redux.
export default connect(null, mapDispatchToProps)(InputsList);
// No primeiro parênteses, devem estar presentes os métodos nativos do Redux. Como nesse caso estamos apenas enviando dados,
//  estamos passando apenas o mapDispatchToProps. O null presente no connect é necessário pois ele entende que o primeiro
//  parâmetro deve ser uma função chamada mapStateToProps, que veremos logo a frente.

// No segundo parênteses passamos nosso componente.
