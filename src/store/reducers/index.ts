import { combineReducers } from 'redux';
import fake from './fake';
import fakeUser from './fakeUser';

const rootReducer = combineReducers({ fake, fakeUser });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
