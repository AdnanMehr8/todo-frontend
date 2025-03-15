import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../redux/thunks/todoThunks';
import { AppDispatch } from '../../../redux/store';
import './addtodo.scss';

const AddTodo: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="todo-input"
      />
      <button type="submit" className="add-btn">Add</button>
    </form>
  );
};

export default AddTodo;