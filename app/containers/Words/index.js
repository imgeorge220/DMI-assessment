/**
 *
 * Words
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import WordsList from 'components/WordsList';
import {
  makeSelectWords,
  makeSelectWordsLoading,
  makeSelectWordsError,
} from './selectors';
import { loadWords } from './actions';
import reducer from './reducer';
import saga from './saga';

export function Words({ words, loading, error, onPageLoad }) {
  useInjectReducer({ key: 'words', reducer });
  useInjectSaga({ key: 'words', saga });

  useEffect(() => {
    onPageLoad();
  }, []);

  const wordListProps = { loading, error, words };

  return (
    <div>
      <WordsList {...wordListProps} />
    </div>
  );
}

Words.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  words: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onPageLoad: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  words: makeSelectWords(),
  loading: makeSelectWordsLoading(),
  error: makeSelectWordsError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: () => dispatch(loadWords()),
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
