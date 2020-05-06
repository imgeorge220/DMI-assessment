/**
 *
 * Words
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectWords from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Words({ words }) {
  useInjectReducer({ key: 'words', reducer });
  useInjectSaga({ key: 'words', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <ul>
        {words.map(word => (
          <li>{word}</li>
        ))}
      </ul>
    </div>
  );
}

Words.propTypes = {
  dispatch: PropTypes.func.isRequired,
  words: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  words: makeSelectWords(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Words);
