import { useQuestion } from '../../../../context/Question/QuestionProvider';
import { Categories as Section, ListItem } from './Catgeories.styled';

const Categories = () => {
	const { categories, questionDispatch } = useQuestion();

	const fetchByCategory = async (id: string) => {
		try {
			const res = await fetch(`/categories/${id}/questions`);
			const data = await res.json();
			questionDispatch({ type: 'FETCH_BY_CATEGORY', payload: { data } });
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<Section>
			<h2
				onClick={() => {
					questionDispatch({ type: 'RELOAD' });
				}}
				role='button'
			>
				Categories
			</h2>
			<ul>
				{Object?.keys(categories).map((key) => (
					<ListItem
						key={key}
						onClick={() => fetchByCategory(key)}
						category={`${categories[+key].toLowerCase()}`}
						role='button'
					>
						<img
							className='category'
							alt={`${categories[+key].toLowerCase()}`}
							src={`${categories[+key].toLowerCase()}.svg`}
						/>
						{categories[+key]}
					</ListItem>
				))}
			</ul>
		</Section>
	);
};

export default Categories;
