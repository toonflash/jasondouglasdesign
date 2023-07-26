import React, { useState } from 'react';

function TextArea({ type = 'textarea', label, name }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="textarea-container message">
      <textarea type={type} value={value} onChange={handleChange} rows="6" required ></textarea>
      <label className={value && 'filled'} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}


export default TextArea;