import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, updateTodo } from '../../../redux/thunks/todoThunks';
import { Todo } from '../../../redux/slices/todoSlice';
import { AppDispatch } from '../../../redux/store';
import './todoItem.scss';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleToggle = () => {
    dispatch(toggleTodo({ id: todo._id, completed: !todo.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo._id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editText.trim()) {
      dispatch(updateTodo({ id: todo._id, text: editText }));
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="todo-edit">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
          <div className="todo-actions">
            <button onClick={handleSave} className="save-btn">Save</button>
            <button onClick={handleCancel} className="cancel-btn">Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <div className="todo-content">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={handleToggle}
            />
            <span className="todo-text">{todo.text}</span>
          </div>
          <div className="todo-actions">
            <button onClick={handleEdit} className="edit-btn">Edit</button>
            <button onClick={handleDelete} className="delete-btn">Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;