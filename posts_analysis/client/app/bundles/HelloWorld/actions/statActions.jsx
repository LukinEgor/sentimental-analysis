import { ADD_STAT } from '../constants/statConstants';

export const addStat = (stats) => ({
  type: ADD_STAT,
  stats: stats
})
