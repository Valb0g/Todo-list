import React from 'react';
import InputForm from './components/InputForm/InputForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="container py-5">
      <InputForm />
      <TodoList />
    </div>
  );
}

export default App;
