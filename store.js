import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

let initialState = {};



export const initStore = (initialState = initialState) => {
  // return 
  var a = createStore((state = initialState) => state, initialState, applyMiddleware(thunkMiddleware))
  console.log('a', a);
  return a;
}