import React from 'react';
import { string, func } from 'prop-types';

const Input = ({ value, onChange }) => {
  return (
    <textarea value={value} onInput={onChange}></textarea>
  );
};

Input.propTypes = {
  value: string,
  onChange: func
};

Input.defaultProps = {
  value: '',
  onChange: f => f
};

export default Input;