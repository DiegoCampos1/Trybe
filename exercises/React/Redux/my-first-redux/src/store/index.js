import { createStore, combineReducers } from 'redux';
import listReducer from '../reducer';

const rootReducer = combineReducers({ listReducer });

const store = createStore(rootReducer);

export default store;
