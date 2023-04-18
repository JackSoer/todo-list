import React from 'react';

const EditTodo = () => {
  return (
    <div className="edit-todo">
      <div className="container">
        <EditTodoForm saveTodos={saveTodos} todos={todos} />
      </div>
    </div>
  );
};

export default EditTodo;
