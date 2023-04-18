import React, { useState } from 'react';
import Form from '../form/Form';
import { useNavigate, useParams } from 'react-router-dom';

const EditTodoForm = ({ todos, saveTodos }) => {
  const { id } = useParams();
  const todoTitle = todos.find((todo) => todo.id === Number(id)).title;

  const navigator = useNavigate();

  const [titleValue, setTitleValue] = useState(todoTitle);

  const handleSubmit = (e) => {
    e.preventDefault();

    handleEdit();

    navigator('/');
  };

  const handleEdit = () => {
    const newTodos = todos.map((todo) =>
      todo.id === Number(id) ? { ...todo, title: titleValue } : todo
    );

    saveTodos(newTodos);
  };

  return (
    <Form
      title="Edit Todo"
      submitBtnText="Edit"
      handleSubmit={handleSubmit}
      inputValue={titleValue}
      setInputValue={setTitleValue}
    ></Form>
  );
};

export default EditTodoForm;
