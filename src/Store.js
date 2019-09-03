import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from './Reducer'
import root from './pages/root/reducer'

function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
   if (typeof action === 'function') {
    return action(dispatch, getState, extraArgument);
   }
   return next(action);
  };
 } 
 const thunk = createThunkMiddleware();
 thunk.withExtraArgument = createThunkMiddleware; 
//  export default thunk;
 
const appReducer = combineReducers({
  Reducer,
  root
})
 

const store = createStore( appReducer, composeWithDevTools(
  applyMiddleware(thunk)
))


export default store;