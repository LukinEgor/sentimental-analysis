import { ADD_STAT } from '../constants/statConstants';

export const addStat = (stat) => ({
  type: ADD_STAT,
  stat: stat
})
