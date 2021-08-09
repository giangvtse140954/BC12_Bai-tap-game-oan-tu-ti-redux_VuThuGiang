import { createStore, combineReducers } from 'redux';
import gameReducers from './reducers/gameReducers';

const reducer = combineReducers({
  game: gameReducers,
});
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
