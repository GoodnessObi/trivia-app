import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ListIcon from '@mui/icons-material/List';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import { useState, useEffect } from 'react';
// import { LocalPlay } from '@mui/icons-material';

// interface ILi {
// 	active: string;
// }

const NavBar = styled.div`
	background-color: transparent;
	padding: 36px;
	display: flex;
	flex-direction: column;
	min-width: 150px;

	ul {
		list-style-type: none;
		padding: 0;
	}
`;

// const LeftNav = styled.div`
// 	// background-color: #fff;
// 	// padding: 20px;
// `;

const StyledLink = styled(Link)`
	color: #d1cff9;
	font-weight: bold;
	text-decoration: none;
	text-align: center;
	display: flex;
	align-items: center;
	cursor: pointer;
	border-radius: 8px;
	width: 100%;
	padding: 12px 8px;

	span {
		color: #736ced;
		margin-left: 8px;
	}
`;

const LogoLink = styled(StyledLink)`
	color: #000;
	font-size: 24px;
	fonr-weight: bold;
	margin-bottom: 36px;
`;

const ListItem = styled.li`
	background-color: transparent;
	margin-bottom: 12px;
	border-radius: 16px;

	&.active {
		background-color: #e3e2fb;

		a {
			color: #736ced;
		}
	}

	&:hover,
	&:active {
		background-color: #e3e2fb;

		a {
			color: #736ced;
		}
	}
`;

export default function SideNav() {
	// const location = useLocation();
	//
	// const isActive = (arg: string): string => {
	// 	console.log(location.pathname === arg ? 'active' : '', 'hey');
	// 	return location.pathname === arg ? 'active' : '';
	// };

	// const [activeRoute, setActiveRoute] = useState(isActive(location.pathname));

	// useEffect(() => {
	// 	setActiveRoute(isActi);
	// }, [location]);

	// console.log('lllllllllllllll', location);
	return (
		<NavBar>
			<LogoLink to='/'>Trivify</LogoLink>
			<ul>
				<ListItem className='active'>
					<StyledLink to='/'>
						{' '}
						<ListIcon />
						<span>List</span>
					</StyledLink>
				</ListItem>
				<ListItem>
					<StyledLink to='/add'>
						<AddIcon />
						<span>Add</span>
					</StyledLink>
				</ListItem>
				<ListItem>
					<StyledLink to='/play'>
						<PlayArrowIcon />
						<span>Play</span>
					</StyledLink>
				</ListItem>
			</ul>
		</NavBar>
	);
}
