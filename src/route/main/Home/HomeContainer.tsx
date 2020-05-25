import React from 'react';
import useModal from 'src/hooks/useModal';
import HomePresenter from './HomePresenter';

type HomeContainerProps = {};
const HomeContainer: React.FC<HomeContainerProps> = () => {
	const [{ modals }, { onShowModal, onHideModal }] = useModal();

	const handleShowModal = () => {
		onShowModal('Modal');
	};

	const handleHideModal = () => {
		onHideModal('Modal');
	};

	return <HomePresenter onShowModal={handleShowModal} onHideModal={handleHideModal} modals={modals} />;
};
export default HomeContainer;
