import React from 'react';
import TodoItem from '../todoItem/TodoItem';
import './todoList.scss';

const TodoList = () => {
  return (
    <div className="todo-list">
      <div className="container">
        <h1 className="todo-list__title">Your Tasks</h1>
        <div className="todo-list__todos-box">
          <ul className="todo-list__todos">
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </ul>
          <div className="todo-list__extra-info">
            <p className="todo-list__finished-info">4 Finished</p>
            <p className="todo-list__progress-info">1 in Progress</p>
          </div>
        </div>
        <button className="todo-list__add-btn">
          <img
            className="todo-list__add-btn-icon"
            src="./img/icons/plus.svg"
            alt=""
          />
        </button>
        <span className="todo-list__add-btn-desc">Add New Task</span>
      </div>
    </div>
  );
};

export default TodoList;
