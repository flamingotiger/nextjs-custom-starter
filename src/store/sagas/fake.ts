import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import FakeApi from '../../api/fake';
import { FakeActionType } from '../reducers/fake';

/**
 * Get Fake List
 *
 * @param payload
 */
export function* getFakeList() {
	try {
		const list = yield call(new FakeApi().list, { _page: 1, _limit: 20 });
		yield put({
			type: FakeActionType.GET_FAKE_LIST_SUCCESS,
			payload: { list }
		});
	} catch (err) {
		yield put({
			type: FakeActionType.GET_FAKE_LIST_ERROR,
			payload: err
		});
	}
}

// /**
//  * Get Fake Item
//  *
//  * @param payload
//  */
export function* getFake() {
	try {
		const id = yield select(state => state.fake.params);
		const item = yield call(new FakeApi().get, id, {});
		yield put({
			type: FakeActionType.GET_FAKE_SUCCESS,
			payload: { item }
		});
	} catch (err) {
		yield put({
			type: FakeActionType.GET_FAKE_ERROR,
			payload: err
		});
	}
}

/**
 * Fake Sagas
 */
export default function* root() {
	yield all([
		takeLatest(FakeActionType.GET_FAKE_LIST_REQUEST, getFakeList),
		takeLatest(FakeActionType.GET_FAKE_REQUEST, getFake)
	]);
}
