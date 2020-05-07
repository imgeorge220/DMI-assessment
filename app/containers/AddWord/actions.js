/*
 *
 * AddWord actions
 *
 */

import { CHANGE_NEW_WORD } from './constants';

export function changeNewWord(newWord) {
  return {
    type: CHANGE_NEW_WORD,
    newWord,
  };
}
