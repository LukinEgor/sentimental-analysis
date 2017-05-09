import { createStore } from 'redux';
import statReducer from '../reducers/statReducer';

const persistStore = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

const configureStore = (railsProps) => (
  createStore(statReducer, railsProps)
);

// configureStore.subscribe(()=>{
//   localStorage.setItem('reduxState', JSON.stringify(store.getState()))
// })

export default configureStore;
