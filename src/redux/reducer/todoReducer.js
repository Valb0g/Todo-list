/* eslint-disable default-param-last */
import {
  ADD_TODO, CHANGE_TODO, DEL_TODO,
} from '../types/types';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DEL_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case CHANGE_TODO:
      return (
        state.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              status: !todo.status,
            };
          }
          return todo;
        })
      );

    default:
      return state;
  }
};
export default todoReducer;
