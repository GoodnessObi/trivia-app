import { useQuiz } from '../../context/Quiz/QuizProvider';

const ShowAnswer = () => {
	const { quizState, quizDispatch } = useQuiz();
	const { currentQuestion, isCorrect } = quizState;
	return (
		<div className='quiz-play-holder'>
			<div className='quiz-question'>{currentQuestion.question}</div>
			<div>{isCorrect ? 'You were correct!' : 'You were incorrect'}</div>
			<div className='quiz-answer'>{currentQuestion.answer}</div>
			<div
				className='next-question button'
				onClick={() => {
					quizDispatch({
						type: 'FETCH_QUIZ',
						payload: { currentQuestion },
					});
				}}
			>
				{' '}
				Next Question{' '}
			</div>
		</div>
	);
};

export default ShowAnswer;
