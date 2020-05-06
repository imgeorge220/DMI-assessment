/*
 *
 * Words actions
 *
 */

import {
  LOAD_WORDS,
  LOAD_WORDS_SUCCESS,
  LOAD_WORDS_FAILURE,
} from './constants';

export function loadWords() {
  return {
    type: LOAD_WORDS,
  };
}

export function wordsLoaded(words) {
  return {
    type: LOAD_WORDS_SUCCESS,
    words,
  };
}

export function wordsLoadError(error) {
  return {
    type: LOAD_WORDS_FAILURE,
    error,
  };
}
