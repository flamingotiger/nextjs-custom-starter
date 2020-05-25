import React, { ElementType, ReactNode } from 'react';
import ModalPortal from './ModalPortal';
import ModalAnimation, { AnimationOption } from './ModalAnimation';

interface PropsChildren extends AnimationOption {
	children: ReactNode;
	unique: string;
	noneStyle?: boolean;
}

interface PropsElement extends AnimationOption {
	ModalElement: ElementType;
	modalProps?: any;
	unique: string;
	noneStyle?: boolean;
}

type ModalProps = PropsChildren | PropsElement;

const Modal: React.FC<ModalProps> = props => {
	const { isBlur, delay, duration, animationDirection, unique, noneStyle } = props;
	const renderModalAnimation = (element: React.ReactNode) => (
		<ModalAnimation
			noneStyle={noneStyle}
			delay={delay}
			duration={duration}
			animationDirection={animationDirection}
			isBlur={isBlur}
			unique={unique}
		>
			{element}
		</ModalAnimation>
	);
	if ('ModalElement' in props) {
		const { ModalElement, modalProps } = props;
		return <ModalPortal>{renderModalAnimation(<ModalElement modalProps={modalProps} />)}</ModalPortal>;
	}
	const { children } = props;
	return <ModalPortal>{renderModalAnimation(children)}</ModalPortal>;
};

export default Modal;
