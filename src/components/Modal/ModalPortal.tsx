import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type ModalProtalProps = {
	children: ReactNode;
};

const ModalPortal: React.FC<ModalProtalProps> = ({ children }) => {
	const [element, setElement] = useState<Element | null>(null);
	useEffect(() => {
		setElement(document.getElementById('modal'));
	}, []);
	return element && createPortal(children, element);
};

export default ModalPortal;
