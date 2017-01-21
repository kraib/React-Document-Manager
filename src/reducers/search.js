import Immutable from 'seamless-immutable';
import {UPDATE_SEARCH} from '../actions/types'
export const initialData = Immutable.from({q:''});

const search = (state = initialData, action) => {

  switch (action.type) {
    case UPDATE_SEARCH:
      return state.merge({q: action.payload})
    default:
      return state;
  }
};

export default search;
