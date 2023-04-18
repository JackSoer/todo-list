import React from 'react';
import './input.scss';

const Input = ({ labelText, placeholderText, inputValue, setInputValue }) => {
  return (
    <div className="input-box">
      <label htmlFor={labelText} className="label">
        {labelText}
      </label>
      <input
        required
        id={labelText}
        type="text"
        className="input"
        placeholder={placeholderText}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
