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

const makeSelectNewWordLoading = () =>
  createSelector(
    selectAddWordState,
    substate => substate.loading,
  );

const makeSelectNewWordError = () =>
  createSelector(
    selectAddWordState,
    substate => substate.error,
  );

const makeSelectNewWordSuccess = () =>
  createSelector(
    selectAddWordState,
    substate => substate.success,
  );

export {
  selectAddWordState,
  makeSelectNewWord,
  makeSelectNewWordLoading,
  makeSelectNewWordError,
  makeSelectNewWordSuccess,
};
