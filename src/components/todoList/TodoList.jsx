import React, { useEffect, useState } from 'react';
import './todoList.scss';
import { Link } from 'react-router-dom';

import TodoItem from '../todoItem/TodoItem';
import TodoProgressInfo from '../todoProgressInfo/TodoProgressInfo';
import TodoAddBtn from '../todoAddBtn/TodoAddBtn';

const TodoList = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || [
      { id: 1, title: 'Wash the cat', isDone: false },
      { id: 2, title: 'Wash the cat', isDone: true },
    ]
  );

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
              setTodos={setTodos}
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
