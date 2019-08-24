import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const devtoolsConf = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore(initialState = {}) {
 return createStore(
   rootReducer,
   initialState,
   devtoolsConf,
  //  applyMiddleware(thunk)
 );
}