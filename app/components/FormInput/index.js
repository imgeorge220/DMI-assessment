/**
 *
 * FormInput
 *
 */

import React from 'react';
import Label from './Label';
import Input from './Input';

function FormInput({label, id, type, value, onChange}) {
  console.log({id, type, value})
    return (
    <div>
      <Label>{label}</Label>
      <Input id={id} type={type} value={value} onChange={onChange}/>
    </div>
  );
}

FormInput.propTypes = {};

export default FormInput;
