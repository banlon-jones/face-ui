import React from 'react';

export default function InputField({name, placeholder, type, required, value, onChange, min, max
}) {
  return (
    <form className="mt-1">
      <input
        className="form-control"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
        required={required}
        maxLength={max}
        minLength={min}
      />
    </form>
  );
}
