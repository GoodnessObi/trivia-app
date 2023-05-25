import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import ListIcon from '@mui/icons-material/List';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const NavBar = styled.div`
	background-color: #fff;
	padding: 18px;
	display: flex;
	flex-direction: column;
	border-radius: 50px 0 0 50px;

	@media (min-width: 1025px) {
		padding: 36px;
		min-width: 150px;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}
`;

const StyledLink = styled(NavLink)`
	color: #d1cff9;
	font-weight: bold;
	text-decoration: none;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: transparent;

	@media (min-width: 768px) {
		border-radius: 16px;
		padding: 12px 8px;
		width: 100%;
		height: unset;
	}

	&.active,
	&:hover {
		background-color: #e3e2fb;
		color: #736ced;
	}

	span {
		display: none;
		color: #736ced;

		@media (min-width: 768px) {
			display: block;
			margin-left: 8px;
		}
	}
`;

const LogoLink = styled(Link)`
	color: #000;
	fonr-weight: bold;
	font-size: 18px;
	margin-bottom: 36px;

	@media (min-width: 768px) {
		font-size: 24px;
	}
`;

const ListItem = styled.li`
	margin-bottom: 12px;
`;

export default function SideNav() {
	return (
		<NavBar>
			<LogoLink to='/'>Trivify</LogoLink>
			<ul>
				<ListItem>
					<StyledLink
						to='/'
						end
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						{' '}
						<ListIcon />
						<span>List</span>
					</StyledLink>
				</ListItem>
				<ListItem>
					<StyledLink
						to='/add'
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						<AddIcon />
						<span>Add</span>
					</StyledLink>
				</ListItem>
				<ListItem>
					<StyledLink
						to='/play'
						className={({ isActive }) => (isActive ? 'active' : '')}
					>
						<PlayArrowIcon />
						<span>Play</span>
					</StyledLink>
				</ListItem>
			</ul>
		</NavBar>
	);
}
