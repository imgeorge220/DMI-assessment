import { put, takeLatest, select } from 'redux-saga/effects';
import { ADD_WORD } from 'containers/Words/constants';
import { wordAdded, wordAddError } from 'containers/Words/actions';
import { makeSelectNewWord } from 'containers/AddWord/selectors';

import apiRequest from 'utils/apiRequest';

/**
 * posts word to backend API
 */
export function* addWord() {
  const newWord = yield select(makeSelectNewWord());
  // const requestURL = `http://localhost:3001`;

  try {
    // Call request helper (see 'utils/apiRequest')
    // const words = yield call(apiRequest, requestURL);
    yield put(wordAdded(newWord));
  } catch (err) {
    yield put(wordAddError(err));
  }
}

/**
 * Watcher Saga
 */
export default function* wordsWatcher() {
  yield takeLatest(ADD_WORD, addWord);
}
