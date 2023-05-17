import { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
	background-color: inherit;
	border: 1px solid #e8dbdb;
	padding: 12px 16px;
	border-radius: 24px;
	width: 100%;
`;

const Search = ({
	submitSearch,
}: {
	submitSearch: (query: string, e: React.FormEvent<HTMLFormElement>) => void;
}) => {
	const [query, setQuery] = useState('');

	return (
		<form
			className='form-wrapper'
			onSubmit={(e) => submitSearch(query, e)}
			style={{ width: '40%' }}
		>
			<Input
				placeholder='Search questions...'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			{/* <input type='submit' value='Submit' className='button' /> */}
		</form>
	);
};

export default Search;
