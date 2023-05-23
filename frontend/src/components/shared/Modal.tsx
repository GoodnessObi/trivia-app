import React, { PropsWithChildren, useEffect, useRef } from 'react';
import '../../stylesheets/Modal.css';
import { createPortal } from 'react-dom';

const Modal = ({ children }: PropsWithChildren<{}>) => {
	const elRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
	if (!elRef.current) {
		const container = document.createElement('div');
		container.classList.add('overlay');
		elRef.current = container;
	}

	useEffect(() => {
		const modalRoot = document.getElementById('modal');
		if (!modalRoot || !elRef.current) {
			return;
		}
		modalRoot.appendChild(elRef.current);
		//next line runs on unmount
		return () => {
			if (elRef.current) {
				modalRoot.removeChild(elRef.current);
			}
		};
	}, []);

	return createPortal(
		<div className='modal-body'>{children}</div>,
		elRef.current
	);
};

export default Modal;
