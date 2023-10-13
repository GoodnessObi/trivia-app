import React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
	children: React.ReactNode;
	// type?: 'button' | 'submit' | 'reset';
};

const Button = ({ children }: ButtonProps) => {
	return <StyledButton>{children}</StyledButton>;
};

const ButtonBaseStyles = css`
	height: 44px;
	border-radius: 4px;
	font-size: 12px;
	font-family: Arial;
	font-weight: 900;
	padding: 16px 32px;
	margin: 20px;
	:hover {
		cursor: pointer;
	}
`;

const StyledButton = styled.button`
	${ButtonBaseStyles}
`;

export default Button;
