import React from 'react';
import './todoAddBtn.scss';

const TodoAddBtn = () => {
  return (
    <>
      <button className="todo-list__add-btn">
        <img
          className="todo-list__add-btn-icon"
          src="./img/icons/plus.svg"
          alt=""
        />
      </button>
      <span className="todo-list__add-btn-desc">Add New Task</span>
    </>
  );
};

export default TodoAddBtn;
