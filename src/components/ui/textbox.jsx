import React from 'react';

const TextBox = ({ label, val, onChange }) => {
  return (
    <label>{label}{' '}
      <input onChange={(e) => onChange(e.target.value)} value={val} />
    </label>
  );
}

export default TextBox;
