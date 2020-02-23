import { combineReducers } from 'redux';
import fake from './fake';

const rootReducer = combineReducers({ fake });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
