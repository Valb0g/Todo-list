import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';

function TodoList() {
  const myTodos = useSelector((state) => state.todos);

  return (
    <div>
      {myTodos.length > 0
        ? (
          <div>
            <ul className="list-group" style={{ marginTop: 20 }}>
              {
                 myTodos.map((todo, index) => (
                   <TodoItem
                     todo={todo}
                     key={todo.id}
                     index={index}
                   />
                 ))
              }
            </ul>
          </div>
        )
        : (
          <div className="d-flex flex-column align-items-center" style={{ fontSize: '1.5rem', marginTop: 20 }}>
            Список дел пуст
          </div>
        )}
    </div>

  );
}

export default TodoList;
