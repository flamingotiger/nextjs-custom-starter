import { all, fork } from 'redux-saga/effects';
import fakeSaga from './fake';

/**
 * rootSaga
 */
export default function* rootSaga() {
	yield all([fork(fakeSaga)]);
}
