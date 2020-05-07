/**
 *
 * AddWord
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Form from './Form';
import Input from './Input';
import { changeNewWord } from './actions';
import { makeSelectNewWord } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function AddWord({ newWord, onChangeNewWord, onSubmitForm }) {
  useInjectReducer({ key: 'addWord', reducer });
  useInjectSaga({ key: 'addWord', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <Form onSubmit={onSubmitForm}>
        <Input
          id="newWord"
          type="text"
          value={newWord}
          onChange={onChangeNewWord}
        />
      </Form>
    </div>
  );
}

AddWord.propTypes = {
  newWord: PropTypes.string,
  onChangeNewWord: PropTypes.func,
  onSubmitForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newWord: makeSelectNewWord(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeNewWord: evt => dispatch(changeNewWord(evt.target.value)),
    onSubmitForm: evt => {
      evt.preventDefault();
      // dispatch(addWord());
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddWord);
