import { useQuiz } from '../../context/Quiz/QuizProvider';
export default function FinalScore() {
	const { quizState, quizDispatch } = useQuiz();
	return (
		<div className='quiz-play-holder'>
			<div className='final-header'>
				Your Final Score is {quizState.numCorrect}
			</div>
			<div
				className='play-again button'
				onClick={() => {
					quizDispatch({ type: 'RESET_QUIZ' });
				}}
			>
				Play Again?
			</div>
		</div>
	);
}
