/**
 *
 * WordsList
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import Notifications from 'components/Notifications';
import { v4 as uuid } from 'uuid';

function WordsList({ loading, error, words }) {
  if (loading) {
    return <Notifications loading />;
  }

  if (error !== false) {
    return <Notifications error />;
  }

  if (words !== false) {
    return (
      <ul>
        {words.map(word => (
          <li key={uuid()}>{word}</li>
        ))}
      </ul>
    );
  }

  return null;
}

WordsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  words: PropTypes.any,
};

export default WordsList;
