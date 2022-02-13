import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/rootReducer';
import defaultState from '../state/defaultState';

const store = createStore(rootReducer, defaultState(), composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => {
  window.localStorage.setItem('todos', JSON.stringify(store.getState()));
});
export default store;
