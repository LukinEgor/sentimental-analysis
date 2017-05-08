import { createStore } from 'redux';
import statReducer from '../reducers/statReducer';

const configureStore = (railsProps) => (
  createStore(statReducer, railsProps)
);

export default configureStore;
