import { useState } from 'react';

const Search = ({
	submitSearch,
}: {
	submitSearch: (query: string, e: React.FormEvent<HTMLFormElement>) => void;
}) => {
	const [query, setQuery] = useState('');

	return (
		<form onSubmit={(e) => submitSearch(query, e)}>
			<input
				placeholder='Search questions...'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<input type='submit' value='Submit' className='button' />
		</form>
	);
};

export default Search;
