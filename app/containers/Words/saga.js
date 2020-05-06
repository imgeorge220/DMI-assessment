import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_WORDS } from 'containers/Words/constants';
import { wordsLoaded, wordsLoadError } from 'containers/Words/actions';

import apiRequest from 'utils/apiRequest';

/**
 * Gets words list from backend API
 */
export function* getWords() {
  const requestURL = `https://api.github.com/users/imgeorge220/repos?type=all&sort=updated`;

  try {
    // Call request helper (see 'utils/apiRequest')
    const words = yield call(apiRequest, requestURL);
    const test = ['new', 'words', 'test'];
    yield put(wordsLoaded(test));
  } catch (err) {
    yield put(wordsLoadError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_WORDS, getWords);
}
