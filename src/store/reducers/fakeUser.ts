import { action as actions, ActionType, createReducer } from 'typesafe-actions';
import { FakeUser } from 'api/types';

enum FakeUserActionType {
	LOGIN_USER = 'LOGIN_USER',
	LOGOUT_USER = 'LOGOUT_USER'
}

const loginUser = (user: FakeUser) => actions(FakeUserActionType.LOGIN_USER, { user });
const logoutUser = () => actions(FakeUserActionType.LOGOUT_USER);

const actionCreator = {
	loginUser,
	logoutUser
};

export { FakeUserActionType, loginUser, logoutUser, actionCreator };

export interface FakeUserState {
	user: FakeUser | null;
}

export type FakeUserAction = ActionType<typeof actionCreator>;

export const initialState: FakeUserState = {
	user: null
};

export default createReducer<FakeUserState, FakeUserAction>(initialState, {
	[FakeUserActionType.LOGIN_USER]: (state, action) => {
		return { ...state, user: action.payload.user };
	},
	[FakeUserActionType.LOGOUT_USER]: state => {
		return { ...state, user: null };
	}
});
