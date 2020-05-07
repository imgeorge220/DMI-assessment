import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_WORDS } from 'containers/Words/constants';
import { wordsLoaded, wordsLoadError } from 'containers/Words/actions';

import apiRequest from 'utils/apiRequest';

/**
 * Gets words list from backend API
 */
export function* getWords() {
  const requestURL = `http://localhost:3001`;

  try {
    // Call request helper (see 'utils/apiRequest')
    const words = yield call(apiRequest, requestURL);
    yield put(wordsLoaded(words));
  } catch (err) {
    yield put(wordsLoadError(err));
  }
}

/**
 * Watcher Saga
 */
export default function* githubData() {
  yield takeLatest(LOAD_WORDS, getWords);
}
