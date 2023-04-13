import React from 'react';
import './todoItem.scss';

const TodoItem = () => {
  return (
    <li className="todo-list__todos-item todos-item">
      <div className="todos-item__checkbox-box">
        <input
          type="checkbox"
          name="todo-checkbox"
          id="todo-checkbox"
          className="todos-item__checkbox"
        />
        <label htmlFor="todo-checkbox" className="todos-item__todo-title">
          Wash the cat
        </label>
      </div>
      <button className="todos-item__delete-btn">
        <img
          className="todos-item__delete-btn-icon"
          src="./img/icons/trash.svg"
          alt="Your image was stolen("
        />
      </button>
    </li>
  );
};

export default TodoItem;
