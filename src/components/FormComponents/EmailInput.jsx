import React, { useState } from 'react';

function EmailInput({ type = 'email', label, name }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container email">
      <input type={type} value={value} onChange={handleChange} autoComplete="sdfkshdlfkhsd" required />
      <label className={value && 'filled'} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}


export default EmailInput;