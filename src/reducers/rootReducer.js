import { combineReducers } from 'redux';

import home from '../containers/Home/reducer';
import menuDrawer from '../containers/NavBar/reducer';
import pigLatin from '../containers/PigLatin/reducer';
import bdc from '../containers/BDayCountdown/reducer'
import rps from '../containers/RPS/reducer'

const rootReducer = combineReducers({
  home,
  menuDrawer,
  pigLatin,
  bdc,
  rps
});  

export default rootReducer;