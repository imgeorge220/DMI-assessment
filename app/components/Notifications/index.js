/**
 *
 * Notifications
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import CenterDiv from 'components/CenterDiv';
import NotificationBar from './NotificationBar';

function Notifications({ loading, error, success, errMessage }) {
  let color;
  let message;

  if (loading) {
    color = '#3041db';
    message = 'Loading...';
  } else if (success) {
    color = '#3FBF3F';
    message = 'Word Successfully Added!';
  } else if (error) {
    color = '#BF3F3F';
    message = errMessage || 'Oops. There was an error. Please try again.';
  } else return null;

  return (
    <CenterDiv>
      <NotificationBar color={color}>
        <p>{message}</p>
      </NotificationBar>
    </CenterDiv>
  );
}

Notifications.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  success: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  errMessage: PropTypes.string,
};

export default Notifications;
