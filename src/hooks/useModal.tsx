import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store/reducers';
import { hideModal, showModal, toggleModal, ModalState, clearModal } from 'src/store/reducers/modal';

interface ModalActionType {
	onHideModal: typeof hideModal;
	onShowModal: typeof showModal;
	onToggleModal: typeof toggleModal;
	onClearModal: typeof clearModal;
}

const useModal = (): [ModalState, ModalActionType] => {
	const state = useSelector((state: RootState) => state.modal);
	const dispatch = useDispatch();
	const onHideModal = useCallback((unique: string) => dispatch(hideModal(unique)), [dispatch]);
	const onShowModal = useCallback((unique: string) => dispatch(showModal(unique)), [dispatch]);
	const onToggleModal = useCallback((unique: string) => dispatch(toggleModal(unique)), [dispatch]);
	const onClearModal = useCallback(() => dispatch(clearModal()), [dispatch]);
	return [state, { onHideModal, onShowModal, onToggleModal, onClearModal }];
};
export default useModal;
