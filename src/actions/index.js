/**
 * Created by kraiba on 19/01/2017.
 */
import * as types from './types'
export const updateSearch = (text) => ({
  type: types.UPDATE_SEARCH,
  payload: text,
});
