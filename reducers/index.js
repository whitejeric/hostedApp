import { combineReducers } from 'redux';
import TempReducer from './reducer-temp';

const rootReducer = combineReducers({
  temp: TempReducer
});

export default rootReducer;
