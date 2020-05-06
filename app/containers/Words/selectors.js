import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the words state domain
 */

const selectWordsDomain = state => state.words || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Words
 */

const makeSelectWords = () =>
  createSelector(
    selectWordsDomain,
    substate => substate.words,
  );

export default makeSelectWords;
export { selectWordsDomain };
