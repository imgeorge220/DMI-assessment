/*
 *
 * AddWord reducer
 *
 */
import produce from 'immer';
import { CHANGE_NEW_WORD } from './constants';

export const initialState = {
  newWord: '',
};

/* eslint-disable default-case, no-param-reassign */
const addWordReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_NEW_WORD:
        draft.newWord = action.newWord;
        break;
    }
  });

export default addWordReducer;
