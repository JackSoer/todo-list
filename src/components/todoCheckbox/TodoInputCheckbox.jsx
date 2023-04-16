import React, { useState, useEffect } from 'react';
import './todoInputCheckbox.scss';

const TodoCheckbox = (props) => {
  const { id, todos, title, isDone, saveTodos } = props;

  const [isDoneTodo, setIsDoneTodo] = useState(isDone);

  const handleEdit = () => {
    setIsDoneTodo(!isDoneTodo);

    const newTodos = todos.map((todo) =>
      todo.id === id ? { id, title, isDone: !isDone } : todo
    );

    saveTodos(newTodos);
  };

  return (
    <div className="todos-item__checkbox-box">
      <input
        type="checkbox"
        name="todo-checkbox"
        id="todo-checkbox"
        className="todos-item__checkbox"
        checked={isDoneTodo}
        onChange={handleEdit}
      />
      <label htmlFor="todo-checkbox" className="todos-item__todo-title">
        {title}
      </label>
    </div>
  );
};

export default TodoCheckbox;
