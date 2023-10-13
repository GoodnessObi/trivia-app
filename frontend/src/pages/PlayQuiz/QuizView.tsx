import CategoriesList from '../../components/quiz/Categories';
import { useQuiz } from '../../context/Quiz/QuizProvider';
import PlayQuizForm from '../../components/quiz/QuizForm';
import { useQuestion } from '../../context/Question/QuestionProvider';
import { useEffect } from 'react';

export default function QuizView() {
	const { quizState } = useQuiz();
	const { categories, questionDispatch } = useQuestion();

	useEffect(() => {
		if (Object?.keys(categories).length === 0) {
			try {
				const fetchData = async () => {
					const res = await fetch(`/categories`);
					const data = await res.json();
					questionDispatch({
						type: 'FETCH_CATEGORIES',
						payload: { data: data.categories },
					});
				};
				fetchData();
			} catch (e) {
				console.log(e, 'fetch');
			}
		}
		// eslint-disable-next-line
	}, []);

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
