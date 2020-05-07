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
import { changeNewWord } from './actions';
import { makeSelectNewWord } from './selectors';
import { addWord } from '../Words/actions';
import reducer from './reducer';
import saga from './saga';

export function AddWord({ newWord, onChangeNewWord, onSubmitForm }) {
  useInjectReducer({ key: 'addWord', reducer });
  useInjectSaga({ key: 'addWord', saga });

  return (
    <div>
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
