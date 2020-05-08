/**
 *
 * FormInput
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label';
import Input from './Input';

function FormInput({ label, id, type, value, onChange }) {
  return (
    <div>
      <Label>{label}</Label>
      <Input id={id} type={type} value={value} onChange={onChange} />
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormInput;
