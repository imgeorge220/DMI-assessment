/*
 *
 * Words reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  words: ['this', 'is', 'just', 'a', 'practice', 'set', 'of', 'words'],
};

/* eslint-disable default-case, no-param-reassign */
const wordsReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default wordsReducer;
