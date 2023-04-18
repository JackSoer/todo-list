import React from 'react';
import AddTodoForm from '../../components/addTodoForm/AddTodoForm';
import './addTodo.scss';

const AddTodo = ({ saveTodos, todos }) => {
  return (
    <div className="add-todo">
      <div className="container">
        <AddTodoForm saveTodos={saveTodos} todos={todos} />
      </div>
    </div>
  );
};

export default AddTodo;
