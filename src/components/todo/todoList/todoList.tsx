import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../../redux/thunks/todoThunks';
import TodoItem from '../todoItem/todoItem';
import { RootState, AppDispatch } from '../../../redux/store';
import './todoList.scss';

const TodoList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { todos, status, error } = useSelector((state: RootState) => state.todos);
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchTodos());
    }
  }, [dispatch, isAuthenticated]);

  if (status === 'loading') {
    return <div className="loading">Loading todos...</div>;
  }

  if (status === 'failed') {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <div className="empty-list">No todos yet. Add one!</div>
      ) : (
        todos.map((todo) => <TodoItem key={todo._id} todo={todo} />)
      )}
    </div>
  );
};

export default TodoList;