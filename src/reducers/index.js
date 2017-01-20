/**
 * Created by kraiba on 19/01/2017.
 */

import { combineReducers } from 'redux';
import documents from './documents';
import search from './search';

export default combineReducers({
  documents,
  search
})

