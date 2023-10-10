import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.div`
	background-color: transparent;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const StyledLink = styled(Link)`
	color: ##736ced;
	font-weight: bold;
	text-decoration: none;
	font-size: 18px;
	padding: 10px;
	border-radius: 4px;

	&:hover {
		backgound-color: #e3e2fb;
	}
`;

export const LinkButton = styled(StyledLink)`
	color: #fff;
	background-color: #20a76d;
	border: none;
	padding: 8px;
	border-radius: 8px;
	display: flex;
	align-items: center;

	@media (min-width: 768px) {
		padding: 12px 24px;
	}

	span {
		display: flex;
		margin-left: 8px;
	}
`;
