import { call, put, takeLatest, select } from 'redux-saga/effects';
import apiRequest from 'utils/apiRequest';
import { ADD_WORD } from './constants';
import { wordAdded, wordAddError } from './actions';
import { makeSelectNewWord } from './selectors';

/**
 * posts word to backend API
 */
export function* addWord() {
  const newWord = yield select(makeSelectNewWord());
  const requestURL = `http://localhost:3001`;
  const reqOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ word: newWord }),
  };

  try {
    // Call request helper (see 'utils/apiRequest')
    yield call(apiRequest, requestURL, reqOptions);
    yield put(wordAdded());
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
