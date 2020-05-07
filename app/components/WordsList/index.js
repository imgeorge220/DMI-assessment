import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

function WordsList({ loading, error, words }) {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error !== false) {
    return <p>Oops. There was an error. Please try again.</p>;
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
