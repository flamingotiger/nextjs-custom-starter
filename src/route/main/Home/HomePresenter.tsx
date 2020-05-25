import React from 'react';
import styled from 'styled-components';
import Modal from 'src/components/Modal';

type HomePresenterProps = { onShowModal: () => void; onHideModal: () => void; modals: string[] };
const HomePresenterStyle = styled.div``;
const HomePresenter: React.FC<HomePresenterProps> = ({ onShowModal, onHideModal, modals }) => {
	return (
		<HomePresenterStyle>
			<button type="button" onClick={onShowModal}>
				ShowModal
			</button>
			<button type="button" onClick={onHideModal}>
				HideModal
			</button>
			{modals.includes('Modal') && (
				<Modal unique="Modal">
					Modal
					<button type="button" onClick={onHideModal}>
						HideModal
					</button>
				</Modal>
			)}
		</HomePresenterStyle>
	);
};
export default HomePresenter;
