import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search.';
import { useQuestion } from '../../context/Question/QuestionProvider';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const NavBar = styled.div`
	background-color: transparent;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const StyledLink = styled(Link)`
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

const LinkButton = styled(StyledLink)`
	color: #fff;
	background-color: #20a76d;
	border: none;
	padding: 12px 24px;
	border-radius: 8px;
	display: flex;
	align-items: center;

	span {
		display: flex;
		margin-left: 8px;
	}
`;

export default function Navbar() {
	const { questionDispatch } = useQuestion();
	const searchQuestions = async (
		query: string,
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				searchTerm: query,
			}),
		};
		try {
			const res = await fetch('/questions/search', requestOptions);
			const data = await res.json();
			questionDispatch({ type: 'SEARCH', payload: { data } });
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<NavBar>
			<Search submitSearch={searchQuestions} />
			<LinkButton to='/play'>
				Start Quiz{' '}
				<span>
					<PlayArrowIcon fontSize='small' />{' '}
				</span>
			</LinkButton>
		</NavBar>
	);
}
