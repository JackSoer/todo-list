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
      <TodoDeleteBtn id={id} todos={todos} saveTodos={saveTodos} />
    </li>
  );
};

export default TodoItem;
