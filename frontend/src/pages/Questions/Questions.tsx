import { Page, QuestionView } from './Question.styled';
import Navbar from '../../components/shared/Navbar/Navbar';
import QuestionList from './components/QuestionList/QuestionList';
import Categories from './components/Categories/Categories';

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

export default QuestionsView;
