/**
 *
 * AddWord
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Form from 'components/Form';
import Input from 'components/FormInput';
import Button from 'components/Button';
import Notifications from 'components/Notifications';
import { changeNewWord, addWord } from './actions';
import {
  makeSelectNewWord,
  makeSelectNewWordLoading,
  makeSelectNewWordError,
  makeSelectNewWordSuccess,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

export function AddWord({
  newWord,
  loading,
  error,
  success,
  onChangeNewWord,
  onSubmitForm,
}) {
  useInjectReducer({ key: 'addWord', reducer });
  useInjectSaga({ key: 'addWord', saga });

  const notificationProps = { loading, error, success };

  return (
    <div>
      <Notifications {...notificationProps} />
      <Form onSubmit={onSubmitForm}>
        <Input
          label="Enter a new string"
          id="newWord"
          type="textarea"
          value={newWord}
          onChange={onChangeNewWord}
        />
        <Button value="Submit" />
      </Form>
    </div>
  );
}

AddWord.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  success: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  newWord: PropTypes.string,
  onChangeNewWord: PropTypes.func,
  onSubmitForm: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  newWord: makeSelectNewWord(),
  loading: makeSelectNewWordLoading(),
  error: makeSelectNewWordError(),
  success: makeSelectNewWordSuccess(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeNewWord: evt => dispatch(changeNewWord(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(addWord());
      dispatch(changeNewWord(''));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddWord);
