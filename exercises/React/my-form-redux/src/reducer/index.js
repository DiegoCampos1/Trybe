import loginReducer from './login';
import registerReducer from './register'
import { combineReducers } from 'redux';

const rootReducers = combineReducers({ registerReducer, loginReducer});

export default rootReducers;