import React from 'react';
import './form.scss';
import Input from '../input/Input';

const Form = (props) => {
  const { title, submitBtnText, handleSubmit, inputValue, setInputValue } =
    props;

  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <h1 className="form__title">{title}</h1>
      <Input
        labelText="Title"
        placeholderText="Wash the cat"
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <button type="submit" className="form__submit-btn">
        {submitBtnText}
      </button>
    </form>
  );
};

export default Form;
