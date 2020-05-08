/**
 *
 * Words Selectors
 *
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectWordsState = state => state.words || initialState;

const makeSelectWords = () =>
  createSelector(
    selectWordsState,
    substate => substate.words,
  );

const makeSelectWordsLoading = () =>
  createSelector(
    selectWordsState,
    substate => substate.loading,
  );

const makeSelectWordsError = () =>
  createSelector(
    selectWordsState,
    substate => substate.error,
  );

export { makeSelectWords, makeSelectWordsLoading, makeSelectWordsError };
