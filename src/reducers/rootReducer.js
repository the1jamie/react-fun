import { combineReducers } from 'redux';
import home from '../containers/Home/reducer';
import menuDrawer from '../containers/NavBar/reducer';
import pigLatin from '../containers/PigLatin/reducer';
import RPS from '../containers/RPS/reducer'

const rootReducer = combineReducers({
  home,
  menuDrawer,
  pigLatin,
  RPS
});  

export default rootReducer;