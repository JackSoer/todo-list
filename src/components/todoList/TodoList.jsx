import React, { useState } from 'react';
import './todoList.scss';
import { Link } from 'react-router-dom';

import TodoItem from '../todoItem/TodoItem';
import TodoProgressInfo from '../todoProgressInfo/TodoProgressInfo';
import TodoAddBtn from '../todoAddBtn/TodoAddBtn';

const TodoList = ({ todos, saveTodos }) => {
  return (
    <div className="todo-list">
      <h1 className="todo-list__title">Your Tasks</h1>
      <div className="todo-list__todos-box">
        <ul className="todo-list__todos">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              isDone={todo.isDone}
              todos={todos}
              saveTodos={saveTodos}
            />
          ))}
        </ul>
        <TodoProgressInfo todos={todos} />
      </div>
      <Link to="/addTodo">
        <TodoAddBtn />
      </Link>
    </div>
  );
};

export default TodoList;
