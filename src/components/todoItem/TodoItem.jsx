import React from 'react';
import './todoItem.scss';
import TodoDeleteBtn from '../todoDeleteBtn/TodoDeleteBtn';
import TodoInputCheckbox from '../todoInputCheckbox/TodoInputCheckbox';
import { Link } from 'react-router-dom';

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
        <Link to={`/editTodo/${id}`}>
          <button className="todos-item__edit-btn">
            <img
              src="./img/icons/edit-pen-icon.svg"
              alt=""
              className="todos-item__edit-btn-icon"
            />
          </button>
        </Link>
        <TodoDeleteBtn id={id} todos={todos} saveTodos={saveTodos} />
      </div>
    </li>
  );
};

export default TodoItem;
