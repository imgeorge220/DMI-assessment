/**
 * NotFoundPage
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */
import React from 'react';
import Notifications from 'components/Notifications';

export default function NotFound() {
  const errMessage = '404 - Sorry the page you are looking for does not exist';
  return (
    <h1>
      <Notifications error errMessage={errMessage} />
    </h1>
  );
}
