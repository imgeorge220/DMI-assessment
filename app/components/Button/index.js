/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';

function Button({ value }) {
  return <StyledButton>{value}</StyledButton>;
}

Button.propTypes = {
  value: PropTypes.string,
};

export default Button;
