import React from 'react';
import Search from '../Search.';
import { NavBar, LinkButton } from './Navbar.styled';
import { useQuestion } from '../../../context/Question/QuestionProvider';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

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
