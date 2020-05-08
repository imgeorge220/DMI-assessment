import {
  selectAddWordState,
  makeSelectNewWord,
  makeSelectNewWordLoading,
  makeSelectNewWordError,
  makeSelectNewWordSuccess,
} from '../selectors';

describe('selectAddWordState', () => {
  it('should select the AddWord state', () => {
    const mockAddWordState = {
      loading: 'loading',
      error: 'error',
      success: 'success',
      newWord: 'newWord',
    };
    const mockFullState = {
      addWord: mockAddWordState,
    };
    expect(selectAddWordState(mockFullState)).toEqual(mockAddWordState);
  });
});

describe('makeSelectNewWord', () => {
  it('should select newWord from the AddWord state', () => {
    const newWordSelector = makeSelectNewWord();
    const mockAddWordState = {
      addWord: {
        loading: 'loading',
        error: 'error',
        success: 'success',
        newWord: 'newWord',
      },
    };
    expect(newWordSelector(mockAddWordState)).toEqual('newWord');
  });
});

describe('makeSelectAddWordLoading', () => {
  it('should select loading from the AddWord state', () => {
    const newWordLoadingSelector = makeSelectNewWordLoading();
    const mockAddWordState = {
      addWord: {
        loading: 'loading',
        error: 'error',
        success: 'success',
        newWord: 'newWord',
      },
    };
    expect(newWordLoadingSelector(mockAddWordState)).toEqual('loading');
  });
});

describe('makeSelectNewWordError', () => {
  it('should select error from the AddWord state', () => {
    const newWordErrorSelector = makeSelectNewWordError();
    const mockAddWordState = {
      addWord: {
        loading: 'loading',
        error: 'error',
        success: 'success',
        newWord: 'newWord',
      },
    };
    expect(newWordErrorSelector(mockAddWordState)).toEqual('error');
  });
});

describe('makeSelectNewWordSuccess', () => {
  it('should select success from the AddWord state', () => {
    const newWordSuccessSelector = makeSelectNewWordSuccess();
    const mockAddWordState = {
      addWord: {
        loading: 'loading',
        error: 'error',
        success: 'success',
        newWord: 'newWord',
      },
    };
    expect(newWordSuccessSelector(mockAddWordState)).toEqual('success');
  });
});
