import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, newTodo } from '../../redux/ac/todosAC';

function InputForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo(newTodo(input)));
    setInput('');
  };
  return (
    <>
      <header className="d-flex justify-content-center">
        <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
          <div className="mb-3">
            <h2>Твой список дел</h2>
            <img src="https://englishlib.org/dictionary/img/wlibrary/t/60532b6229aba9.23748554.jpg" alt="https://englishlib.org/dictionary/img/wlibrary/t/60532b6229aba9.23748554.jpg" />
            <input style={{ marginTop: '1%' }} type="text" value={input} onChange={(e) => setInput(e.target.value)} className="form-control" />
          </div>
          <button type="submit" className="btn btn-success">Создать</button>
        </form>
      </header>
      <hr />
    </>
  );
}
export default InputForm;
