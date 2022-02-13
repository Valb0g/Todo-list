const initState = {
  todos: [],
};

function defaultState() {
  const stateFromLS = JSON.parse(window.localStorage.getItem('todos'));
  const state = stateFromLS || initState;
  return state;
}
export default defaultState;
