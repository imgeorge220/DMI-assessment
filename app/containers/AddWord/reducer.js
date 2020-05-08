/*
 *
 * AddWord reducer
 *
 */
import produce from 'immer';
import {
  CHANGE_NEW_WORD,
  ADD_WORD,
  ADD_WORD_SUCCESS,
  ADD_WORD_FAILURE,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  success: false,
  newWord: '',
};

/* eslint-disable default-case, no-param-reassign */
const addWordReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_NEW_WORD:
        draft.newWord = action.newWord;
        break;

      case ADD_WORD:
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;

      case ADD_WORD_SUCCESS:
        draft.loading = false;
        draft.success = true;
        draft.error = false;
        break;

      case ADD_WORD_FAILURE:
        draft.error = action.error;
        draft.success = false;
        draft.loading = false;
        break;
    }
  });

export default addWordReducer;
