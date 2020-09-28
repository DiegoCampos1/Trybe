import React from 'react';
// o provider é o meio pelo qual disponibilizamos o Store
import { Provider } from 'react-redux';
import store from './store';
import List from './List';
import InputsList from './InputsList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}> {/* O Store é disponibilizado através do Provider para todos os componentes da aplicação; */}
          <InputsList />
          <List />
        </Provider>
      </div>
    );
  }
}

export default App;