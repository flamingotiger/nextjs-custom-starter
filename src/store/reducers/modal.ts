import { action, ActionType, createReducer } from 'typesafe-actions';

export enum ModalActionType {
	SHOW_MODAL = 'SHOW_MODAL',
	HIDE_MODAL = 'HIDE_MODAL',
	TOGGLE_MODAL = 'TOGGLE_MODAL',
	CLEAR_MODAL = 'CLEAR_MODAL'
}

export const hideModal = (unique: string) => action(ModalActionType.HIDE_MODAL, { unique });
export const showModal = (unique: string) => action(ModalActionType.SHOW_MODAL, { unique });
export const toggleModal = (unique: string) => action(ModalActionType.TOGGLE_MODAL, { unique });
export const clearModal = () => action(ModalActionType.CLEAR_MODAL);

export const actionCreator = {
	hideModal,
	showModal,
	toggleModal,
	clearModal
};

export interface ModalState {
	modals: string[];
}

export type ModalAction = ActionType<typeof actionCreator>;

export const initialState: ModalState = {
	modals: []
};

export default createReducer<ModalState, ModalAction>(initialState, {
	[ModalActionType.HIDE_MODAL]: (state, action) => {
		return { ...state, modals: state.modals.filter(m => m !== action.payload.unique) };
	},
	[ModalActionType.SHOW_MODAL]: (state, action) => {
		return { ...state, modals: [...state.modals, action.payload.unique] };
	},
	[ModalActionType.TOGGLE_MODAL]: (state, action) => {
		let modals = [];
		if (state.modals.some(m => m === action.payload.unique)) {
			modals = state.modals.filter(m => m !== action.payload.unique);
		} else {
			modals = [...state.modals, action.payload.unique];
		}
		return { ...state, modals };
	},
	[ModalActionType.CLEAR_MODAL]: state => {
		return { ...state, modals: [] };
	}
});
