import { ADD_STAT } from '../constants/statConstants';

export default function statReducer(state = {}, action) {
  switch(action.type) {
    case ADD_STAT:
      return Array.isArray(state) ? state.concat(action.stats) : [action.stats];
    default:
      return state;
  }
};
