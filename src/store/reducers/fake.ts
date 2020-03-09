import { AxiosError } from 'axios';
import { action as actions, ActionType, createReducer } from 'typesafe-actions';
import { FakePostItem } from 'src/api/types';

enum FakeActionType {
	GET_FAKE_LIST_REQUEST = 'GET_FAKE_LIST_REQUEST',
	GET_FAKE_LIST_SUCCESS = 'GET_FAKE_LIST_SUCCESS',
	GET_FAKE_LIST_ERROR = 'GET_FAKE_LIST_ERROR',
	GET_FAKE_REQUEST = 'GET_FAKE_REQUEST',
	GET_FAKE_SUCCESS = 'GET_FAKE_SUCCESS',
	GET_FAKE_ERROR = 'GET_FAKE_ERROR'
}

const getFakeListRequest = () => actions(FakeActionType.GET_FAKE_LIST_REQUEST);
const getFakeListSuccess = (list: any) => actions(FakeActionType.GET_FAKE_LIST_SUCCESS, { list });
const getFakeListFailure = (error: AxiosError) => actions(FakeActionType.GET_FAKE_LIST_ERROR, { error });
const getFakeRequest = (params: any) => actions(FakeActionType.GET_FAKE_REQUEST, { params });
const getFakeSuccess = (item: any) => actions(FakeActionType.GET_FAKE_SUCCESS, { item });
const getFakeFailure = (error: AxiosError) => actions(FakeActionType.GET_FAKE_ERROR, { error });

const actionCreator = {
	getFakeListRequest,
	getFakeListSuccess,
	getFakeListFailure,
	getFakeRequest,
	getFakeSuccess,
	getFakeFailure
};

export {
	FakeActionType,
	getFakeListRequest,
	getFakeListSuccess,
	getFakeListFailure,
	getFakeRequest,
	getFakeSuccess,
	getFakeFailure,
	actionCreator
};

export interface FakeState {
	list: FakePostItem[];
	item: FakePostItem | {};
	isLoading: boolean;
	error: AxiosError | null;
	params: any;
}

export type FakeAction = ActionType<typeof actionCreator>;

export const initialState: FakeState = {
	list: [],
	item: {},
	isLoading: false,
	error: null,
	params: undefined
};

export default createReducer<FakeState, FakeAction>(initialState, {
	[FakeActionType.GET_FAKE_LIST_REQUEST]: state => {
		return { ...state, isLoading: true, error: null };
	},
	[FakeActionType.GET_FAKE_LIST_SUCCESS]: (state, action) => {
		return {
			...state,
			isLoading: false,
			error: null,
			list: action.payload.list
		};
	},
	[FakeActionType.GET_FAKE_LIST_ERROR]: (state, action) => {
		return { ...state, isLoading: false, error: action.payload.error };
	},
	[FakeActionType.GET_FAKE_REQUEST]: (state, action) => {
		return {
			...state,
			isLoading: true,
			error: null,
			params: action.payload.params
		};
	},
	[FakeActionType.GET_FAKE_SUCCESS]: (state, action) => {
		return { ...state, isLoading: false, error: null, item: action.payload.item };
	},
	[FakeActionType.GET_FAKE_ERROR]: (state, action) => {
		return {
			...state,
			isLoading: false,
			error: action.payload.error
		};
	}
});
