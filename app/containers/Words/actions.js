/*
 *
 * Words actions
 *
 */
import {
  LOAD_WORDS,
  LOAD_WORDS_SUCCESS,
  LOAD_WORDS_FAILURE,
  ADD_WORD,
  ADD_WORD_SUCCESS,
  ADD_WORD_FAILURE,
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

export function addWord() {
  return {
    type: ADD_WORD,
  };
}

export function wordAdded() {
  return {
    type: ADD_WORD_SUCCESS,
  };
}

export function wordAddError(error) {
  return {
    type: ADD_WORD_FAILURE,
    error,
  };
}
