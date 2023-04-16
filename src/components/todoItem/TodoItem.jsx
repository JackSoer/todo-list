import React from 'react';
import './todoItem.scss';
import TodoDeleteBtn from '../todoDeleteBtn/TodoDeleteBtn';
import TodoInputCheckbox from '../todoCheckbox/TodoInputCheckbox';

const TodoItem = (props) => {
  const { id, title, isDone, todos, setTodos } = props;

  const saveTodos = (newTodos) => {
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
  };

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
