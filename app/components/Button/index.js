/**
 *
 * Button
 *
 */

import React from 'react';
import StyledButton from './StyledButton';

function Button({value}) {
  return (
    <StyledButton>{value}</StyledButton>
  );
}

Button.propTypes = {};

export default Button;
