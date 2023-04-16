import React from 'react';
import './todoDeleteBtn.scss';

const TodoDeleteBtn = ({ id, todos }) => {
  return (
    <button className="todos-item__delete-btn">
      <img
        className="todos-item__delete-btn-icon"
        src="./img/icons/trash.svg"
        alt="Your image was stolen("
      />
    </button>
  );
};

export default TodoDeleteBtn;
