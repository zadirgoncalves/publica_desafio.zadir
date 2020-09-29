import { gameReducer } from './reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  game: gameReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;