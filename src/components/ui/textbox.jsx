import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ label, val, onChange }) => {
  return (
    <label>{label}{' '}
      <input onChange={(e) => onChange(e.target.value)} value={val} />
    </label>
  );
}

TextBox.propTypes = {
  label: PropTypes.string,
  val: PropTypes.string,
  onChange: PropTypes.func
}

TextBox.defaultProps = {
  label: '',
  val: '',
  onChange: null,
}

export default TextBox;
