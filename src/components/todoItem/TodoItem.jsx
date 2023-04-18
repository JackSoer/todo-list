import React from 'react';
import './todoItem.scss';
import TodoDeleteBtn from '../todoDeleteBtn/TodoDeleteBtn';
import TodoInputCheckbox from '../todoInputCheckbox/TodoInputCheckbox';

const TodoItem = (props) => {
  const { id, title, isDone, todos, saveTodos } = props;

  return (
    <li className="todo-list__todos-item todos-item">
      <TodoInputCheckbox
        id={id}
        todos={todos}
        title={title}
        isDone={isDone}
        saveTodos={saveTodos}
      />
      <div className="todos-item__options">
        <button className="todos-item__edit-btn">Edit</button>
        <TodoDeleteBtn id={id} todos={todos} saveTodos={saveTodos} />
      </div>
    </li>
  );
};

export default TodoItem;
