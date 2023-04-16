import React from 'react';
import './input.scss';

const Input = ({ labelText, placeholderText }) => {
  return (
    <div className="input-box">
      <label htmlFor={labelText} className="label">
        {labelText}
      </label>
      <input
        id={labelText}
        type="text"
        className="input"
        placeholder={placeholderText}
      />
    </div>
  );
};

export default Input;
