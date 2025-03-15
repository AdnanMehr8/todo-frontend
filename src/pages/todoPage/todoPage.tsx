import React from 'react';
import AddTodo from '../../components/todo/addtodoItem/addtodo';
import TodoList from '../../components/todo/todoList/todoList';
import './todoPage.scss';

const TodoPage: React.FC = () => {
  return (
    <div className="todo-page">
      <div className="todo-container">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoPage;