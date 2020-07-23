import { createStore, combineReducers } from 'redux';
import listReducer from '../reducer';

const rootReducer = combineReducers({ listReducer });

const store = createStore(rootReducer);
// Um Store é criado para armazenar todos o estado da aplicação;
export default store;
