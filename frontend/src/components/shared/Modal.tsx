import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const ModalBody = styled.div`
	background: white;
	padding: 50px;
	border-radius: 16px;
	width: 400px;
	text-align: center;
`;

const Modal = ({ children }: PropsWithChildren<{}>) => {
	const elRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
	if (!elRef.current) {
		const container = document.createElement('div');
		// container.classList.add('container');
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

	return createPortal(<ModalBody>{children}</ModalBody>, elRef.current);
};

export default Modal;
