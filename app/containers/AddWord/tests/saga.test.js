/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { put, takeLatest } from 'redux-saga/effects';
import { ADD_WORD } from 'containers/AddWord/constants';
import { wordAdded, wordAddError } from 'containers/AddWord/actions';
import addWordsWatcher, { addWord } from '../saga';

describe('addWordSaga Saga', () => {
  let addWordGenerator;

  beforeEach(() => {
    addWordGenerator = addWord();

    const selectDescriptor = addWordGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = addWordGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the addWord action if it requests the data successfully', () => {
    const putDescriptor = addWordGenerator.next().value;
    expect(putDescriptor).toEqual(put(wordAdded()));
  });

  it('should call the repoLoadingError action if the response errors', () => {
    const response = new Error('Test erros');
    const putDescriptor = addWordGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(wordAddError(response)));
  });

  describe('addWordsWatcher Saga', () => {
    const addWordsSaga = addWordsWatcher();

    it('should start task to watch for LOAD_REPOS action', () => {
      const takeLatestDescriptor = addWordsSaga.next().value;
      expect(takeLatestDescriptor).toEqual(takeLatest(ADD_WORD, addWord));
    });
  });
});
