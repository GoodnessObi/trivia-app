import '../../stylesheets/QuizView.css';
import CategoriesList from './Categories';
import { useQuiz } from '../../context/Quiz/QuizProvider';
import PlayQuizForm from './QuizForm';
import { useQuestion } from '../../context/Question/QuestionProvider';

export default function QuizView() {
	const { quizState } = useQuiz();
	const { categories } = useQuestion();

	return (
		<>
			{quizState.endGame ? (
				<CategoriesList categories={categories} />
			) : (
				<PlayQuizForm />
			)}
		</>
	);
}
