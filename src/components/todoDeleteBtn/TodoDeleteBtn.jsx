import React from 'react';
import './todoDeleteBtn.scss';

const TodoDeleteBtn = ({ id, todos, saveTodos }) => {
  const handleDelete = () => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    saveTodos(newTodos);
  };

  return (
    <button
      className="todos-item__delete-btn"
      aria-label="Delete Todo"
      onClick={handleDelete}
    >
      <img
        className="todos-item__delete-btn-icon"
        src="./img/icons/trash.svg"
        alt="Your image was stolen("
      />
    </button>
  );
};

export default TodoDeleteBtn;
