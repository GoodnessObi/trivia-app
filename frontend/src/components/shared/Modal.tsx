import React, { PropsWithChildren, useEffect, useRef } from 'react';
import '../../stylesheets/Modal.css';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const ModalBody = styled.div`
	background: white;
	width: 80%;
	max-width: 50vw;
	height: fit-content;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	padding: 50px;
	border-radius: 16px;
`;

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

	return createPortal(<ModalBody>{children}</ModalBody>, elRef.current);
};

export default Modal;
