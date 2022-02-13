import { v4 as uuidv4 } from 'uuid';
import {
  ADD_TODO, CHANGE_TODO, DEL_TODO,
} from '../types/types';

export function addTodo(payload) {
  return {
    type: ADD_TODO,
    payload,
  };
}
export function delTodo(payload) {
  return {
    type: DEL_TODO,
    payload,
  };
}
export function changeTodo(payload) {
  return {
    type: CHANGE_TODO,
    payload,
  };
}
export function newTodo(text) {
  return {
    id: uuidv4(),
    text,
    status: false,
  };
}
