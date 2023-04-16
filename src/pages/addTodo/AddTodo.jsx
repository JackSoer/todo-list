import React from 'react';
import AddTodoForm from '../../components/addTodoForm/AddTodoForm';
import './addTodo.scss';

const AddTodo = () => {
  return (
    <div className="add-todo">
      <div className="container">
        <AddTodoForm />
      </div>
    </div>
  );
};

export default AddTodo;
