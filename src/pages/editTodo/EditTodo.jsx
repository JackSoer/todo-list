import React from 'react';
import EditTodoForm from '../../components/editTodoForm/EditTodoForm';

const EditTodo = ({ saveTodos, todos }) => {
  return (
    <div className="edit-todo">
      <div className="container">
        <EditTodoForm saveTodos={saveTodos} todos={todos} />
      </div>
    </div>
  );
};

export default EditTodo;
