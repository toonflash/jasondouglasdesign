import React, { useState } from 'react';

function TextInput({ type = 'text', label, name }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container guestName">
      <input type={type} value={value} onChange={handleChange} autoComplete="fdskhfaldkfh" required/>
      <label className={value && 'filled'} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}


export default TextInput;