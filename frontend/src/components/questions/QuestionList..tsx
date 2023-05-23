import QuestionCard from './QuestionCard';
import { useQuestion } from '../../context/Question/QuestionProvider';
import styled from 'styled-components';
import Navbar from '../shared/Navbar';

interface ILi {
	category: string;
}

const catBg: { [key: string]: string } = {
	science: '#E3EEFF',
	art: '#FFF7EC',
	history: '#bef8f5',
	geography: '#E9F8F1',
	entertainment: '#F4DCD3',
	sports: '#E0E3EF',
};

const Page = styled.div`
	display: flex;
	justify-content: space-between;
	min-height: 100%;
`;

const Categories = styled.div`
	background-color: #fff;
	flex-basis: 30%;
	padding: 36px;
	border-radius: 0 50px 50px 0;

	h2 {
		text-align: center;
		color: #69668d;
	}

	ul {
		list-style-type: none;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 12px;
	}
`;

const ListItem = styled.li<ILi>`
	text-align: center;
	background: ${(props) => catBg[props.category]};
	display: flex;
	flex-direction: column;
	align-items: center;
	padding 16px;
	margin-bottom: 16px;
	cursor: pointer;
	border-radius: 8px;
`;

const QuestionView = styled.div`
	background-color: transparent;
	flex-basis: 70%;
	padding: 36px;
`;

const QuestionSection = styled.div`
	margin-top: 48px;

	h2 {
		color: #69668d;
		padding-bottom: 12px;
	}
`;

const QuestionCards = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 12px;
`;

const QuestionList = () => {
	const { questions, categories, questionDispatch } = useQuestion();

	const deleteQuestion = async (id: string) => {
		try {
			const fetchResponse = await fetch(`/questions/${id}`, {
				method: 'DELETE',
			});
			const data = await fetchResponse.json();
			questionDispatch({
				type: 'DELETE',
				payload: { questionId: data.deleted },
			});
		} catch (e) {
			console.log(e);
		}
	};

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
		<Page>
			<QuestionView>
				<Navbar />
				<QuestionSection>
					<h2>Questions</h2>
					<QuestionCards>
						{questions.map((question, i) => (
							<QuestionCard
								key={i}
								questionItem={question}
								deleteQuestion={deleteQuestion}
							/>
						))}
					</QuestionCards>

					{/* <div className='pagination-menu'>{this.createPagination()}</div> */}
				</QuestionSection>
			</QuestionView>
			<Categories>
				<h2
				// onClick={() => {
				// 	this.getQuestions();
				// }}
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
			</Categories>
		</Page>
	);
};

export default QuestionList;
