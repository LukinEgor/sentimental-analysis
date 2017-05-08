import { ADD_STAT } from '../constants/statConstants';

export default function statReducer(state = [], action) {
  switch(action.type) {
    case ADD_STAT:
      return action.stat;
    default:
      return state;
  }
};
