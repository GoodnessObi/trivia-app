import Navbar from '../components/shared/Navbar/Navbar';
import QuestionList from '../components/questions/QuestionList/QuestionList';
import Categories from '../components/questions/Categories/Categories';
import styled from 'styled-components';

const QuestionsView = () => {
	return (
		<Page>
			<QuestionView>
				<Navbar />
				<QuestionList />
			</QuestionView>
			<Categories />
		</Page>
	);
};

const Page = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	min-height: 100%;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

const QuestionView = styled.div`
	background-color: transparent;
	padding: 18px;

	@media (min-width: 768px) {
		flex-basis: 70%;
	}

	@media (min-width: 1025px) {
		// flex-basis: 70%;
		padding: 36px;
	}
`;

export default QuestionsView;
