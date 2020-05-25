import React, { CSSProperties } from 'react';
import useModal from 'src/hooks/useModal';
import styled from 'styled-components';

const ModalAnimationStyle = styled.div`
	.modal-dim {
		z-index: 1000;
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: rgba(0, 0, 0, 0.4);
	}

	.modal-animation-control {
		position: fixed;
		z-index: 5000;
	}
`;
const capitalizeFirstLetter = (text: string) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
};

interface ModalAnimationProps extends AnimationOption {
	children: React.ReactNode;
	unique: string;
	noneStyle?: boolean;
}

export enum AnimationDirection {
	TOP = 'top',
	LEFT = 'left',
	RIGHT = 'right',
	BOTTOM = 'bottom'
}

export interface AnimationOption {
	isBlur?: boolean;
	delay?: number;
	duration?: number;
	animationDirection?: AnimationDirection;
}

const ModalAnimation: React.FC<ModalAnimationProps> = ({
	children,
	isBlur,
	delay = 0,
	duration = 0,
	animationDirection,
	unique,
	noneStyle
}) => {
	const [layoutHalfValue, setLayoutHalfValue] = React.useState({ width: 0, height: 0 });
	const divEl = React.useRef<HTMLDivElement>(null);
	const [{ modals }, { onClearModal }] = useModal();
	const isModalUnique = modals.some((m: string) => m === unique);
	const animStyle: CSSProperties = {
		opacity: isModalUnique ? 1 : 0,
		visibility: isModalUnique ? 'visible' : 'hidden',
		transition: duration ? `${duration}ms` : '0ms',
		transitionDelay: delay ? `${delay}ms` : '0ms'
	};

	React.useEffect(() => {
		if (divEl && divEl.current) {
			setLayoutHalfValue({ width: divEl.current.offsetWidth / 2, height: divEl.current.offsetHeight / 2 });
		}
	}, [divEl]);
	// ======================================================
	// animation move style
	// ======================================================
	let animMove: CSSProperties = {};
	if (animationDirection) {
		const modalPercent = isModalUnique ? '50%' : '0%';
		const animationMove = () => {
			let style = {};
			const position = (layoutDirection: number) => {
				style = {
					...style,
					[animationDirection]: modalPercent,
					[`margin${capitalizeFirstLetter(animationDirection)}`]: `-${layoutDirection}px`
				};
			};
			const isCheck = (direction: AnimationDirection) => animationDirection === direction;
			if (isCheck(AnimationDirection.LEFT) || isCheck(AnimationDirection.RIGHT)) {
				style = { ...style, top: '50%', marginTop: `-${layoutHalfValue.height}px` };
				position(layoutHalfValue.width);
			} else if (isCheck(AnimationDirection.TOP) || isCheck(AnimationDirection.BOTTOM)) {
				style = { ...style, left: '50%', marginLeft: `-${layoutHalfValue.width}px` };
				position(layoutHalfValue.height);
			}
			return style;
		};
		animMove = animationMove();
	}
	// ======================================================
	const animCenter: CSSProperties = {
		left: '50%',
		top: '50%',
		marginLeft: `-${layoutHalfValue.width}px`,
		marginTop: `-${layoutHalfValue.height}px`
	};

	let style = animationDirection ? { ...animStyle, ...animMove } : { ...animStyle, ...animCenter };
	if (noneStyle) {
		style = {};
	}

	return (
		<ModalAnimationStyle>
			{modals[0] === unique && (
				<div className="modal-dim" style={animStyle} onClick={isBlur ? () => onClearModal() : undefined} />
			)}
			<div className="modal-animation-control" style={style} ref={divEl}>
				{children}
			</div>
		</ModalAnimationStyle>
	);
};

export default ModalAnimation;
