import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../form/Form';

const AddTodoForm = ({ saveTodos, todos }) => {
  const [titleValue, setTitleValue] = useState('');

  const navigator = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAdd();

    navigator('/');
  };

  const handleAdd = () => {
    const newTodoId = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
    const newTodos = [
      ...todos,
      { id: newTodoId, title: titleValue, isDone: false },
    ];

    saveTodos(newTodos);
  };

  return (
    <Form
      title="New Todo"
      submitBtnText="Add Todo"
      handleSubmit={handleSubmit}
      inputValue={titleValue}
      setInputValue={setTitleValue}
    ></Form>
  );
};

export default AddTodoForm;
