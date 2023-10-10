import CategoriesList from '../../components/quiz/Categories';
import { useQuiz } from '../../context/Quiz/QuizProvider';
import PlayQuizForm from '../../components/quiz/QuizForm';
import { useQuestion } from '../../context/Question/QuestionProvider';

export default function QuizView() {
	const { quizState } = useQuiz();
	const { categories } = useQuestion();

	return (
		<>
			{quizState.endGame ||
			Object.keys(quizState.currentQuestion).length === 0 ? (
				<CategoriesList categories={categories} />
			) : (
				<PlayQuizForm />
			)}
		</>
	);
}
