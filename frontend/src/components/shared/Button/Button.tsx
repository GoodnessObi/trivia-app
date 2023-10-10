import React from 'react';
import { StyledButton } from './Button.styled';

type ButtonProps = {
	children: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
};

const Button = ({ children, type }: ButtonProps) => {
	return <StyledButton type={type ? type : 'button'}>{children}</StyledButton>;
};

export default Button;
