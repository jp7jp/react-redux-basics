import { combineReducers } from 'redux';
import vehiclesReducer from './vehicles-reducer';

export default combineReducers({
  vehicles: vehiclesReducer
});
