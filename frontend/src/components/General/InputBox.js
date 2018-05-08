import React from 'react';
import './inputbox.css';

const InputBox = options => {
  const {
    label,
    placeholder,
    autoComplete,
    type,
    name,
    value,
    onChange,
    display
  } = options;

  return (
    <div className="input-box" display={display}>
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      <input
        className="input"
        placeholder={placeholder}
        autoComplete={autoComplete}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBox;
