import produce from 'immer';
import addWordReducer from '../reducer';
import { changeNewWord, addWord, wordAdded, wordAddError } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('addWordReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      error: false,
      success: false,
      newWord: '',
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(addWordReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeNewWord action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.error = false;
      draft.success = false;
      draft.newWord = 'test';
    });

    expect(addWordReducer(state, changeNewWord('test'))).toEqual(
      expectedResult,
    );
  });

  it('should handle the addWord action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.success = false;
      draft.newWord = '';
    });

    expect(addWordReducer(state, addWord())).toEqual(expectedResult);
  });

  it('should handle the wordAdded action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.error = false;
      draft.success = true;
      draft.newWord = '';
    });

    expect(addWordReducer(state, wordAdded())).toEqual(expectedResult);
  });

  it('should handle the wordAddError action correctly', () => {
    const error = {
      msg: 'test error',
    };
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.error = error;
      draft.success = false;
      draft.newWord = '';
    });

    expect(addWordReducer(state, wordAddError(error))).toEqual(expectedResult);
  });
});
