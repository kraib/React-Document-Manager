import * as types from './types'
export const updateSearch = (text) => ({
  type: types.UPDATE_SEARCH,
  payload: text
});
