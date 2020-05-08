import { changeNewWord, addWord, wordAdded, wordAddError } from '../actions';
import {
  CHANGE_NEW_WORD,
  ADD_WORD,
  ADD_WORD_SUCCESS,
  ADD_WORD_FAILURE,
} from '../constants';

describe('AddWord actions', () => {
  describe('changeNewWord Action', () => {
    it('has a type of CHANGE_NEW_WORD', () => {
      const expected = {
        type: CHANGE_NEW_WORD,
      };
      expect(changeNewWord()).toEqual(expected);
    });
  });

  describe('addWord Action', () => {
    it('has a type of CHANGE_NEW_WORD', () => {
      const expected = {
        type: ADD_WORD,
      };
      expect(addWord()).toEqual(expected);
    });
  });

  describe('wordAdded Action', () => {
    it('has a type of CHANGE_NEW_WORD', () => {
      const expected = {
        type: ADD_WORD_SUCCESS,
      };
      expect(wordAdded()).toEqual(expected);
    });
  });

  describe('wordAddError Action', () => {
    it('has a type of CHANGE_NEW_WORD', () => {
      const expected = {
        type: ADD_WORD_FAILURE,
      };
      expect(wordAddError()).toEqual(expected);
    });
  });
});
