/*
 *
 * AddWord actions
 *
 */
import {
  CHANGE_NEW_WORD,
  ADD_WORD,
  ADD_WORD_SUCCESS,
  ADD_WORD_FAILURE,
} from './constants';

export function changeNewWord(newWord) {
  return {
    type: CHANGE_NEW_WORD,
    newWord,
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
