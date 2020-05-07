import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * AddWords Selectors
 */

const selectAddWordState = state => state.addWord || initialState;

const makeSelectNewWord = () =>
  createSelector(
    selectAddWordState,
    substate => substate.newWord,
  );

export { selectAddWordState, makeSelectNewWord };
