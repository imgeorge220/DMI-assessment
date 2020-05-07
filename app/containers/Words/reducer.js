/*
 * Words reducer
 */
import produce from 'immer';
import {
  LOAD_WORDS,
  LOAD_WORDS_SUCCESS,
  LOAD_WORDS_FAILURE,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  words: false,
};

/* eslint-disable default-case, no-param-reassign */
const wordsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_WORDS:
        draft.loading = true;
        draft.error = false;
        draft.words = false;
        break;

      case LOAD_WORDS_SUCCESS:
        draft.words = action.words;
        draft.loading = false;
        draft.error = false;
        break;

      case LOAD_WORDS_FAILURE:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default wordsReducer;
