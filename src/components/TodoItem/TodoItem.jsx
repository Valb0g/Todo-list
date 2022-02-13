/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTodo, delTodo } from '../../redux/ac/todosAC';
import styles from './styles.module.css';

function TodoItem({ todo, index }) {
  const dispatch = useDispatch();

  const delHandler = (id) => {
    dispatch(delTodo(id));
  };

  const changeStatus = (id) => {
    dispatch(changeTodo(id));
  };
  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      <span className={todo.status ? styles.done : ''}>
        {index + 1}
        . &nbsp;
        {todo.text}
      </span>
      <div>
        <button type="button" onClick={() => changeStatus(todo.id)} className={`btn btn-outline-${todo.status ? 'secondary' : 'success'} mx-2`}>{todo.status ? 'Undone' : 'Done'}</button>
        <button type="button" onClick={() => delHandler(todo.id)} className="btn btn-outline-danger">Delete</button>
      </div>
    </li>

  );
}

export default TodoItem;
