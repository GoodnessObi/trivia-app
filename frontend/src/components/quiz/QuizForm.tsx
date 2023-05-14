import { useQuiz } from '../../context/Quiz/QuizProvider';
import FinalScore from './FinalScore';
import ShowAnswer from './ShowAnswer';

const PlayQuizForm = () => {
	const { quizState, quizDispatch } = useQuiz();

	const { currentQuestion, guess, showAnswer } = quizState;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		quizDispatch({
			type: 'MAKE_GUESS',
			payload: { guess: event.target.value },
		});
	};

	const submitGuess = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		quizDispatch({ type: 'SUBMIT_GUESS' });
	};

	return (
		<>
			{Object.keys(currentQuestion).length === 0 ? (
				<FinalScore />
			) : (
				<div className='quiz-play-holder'>
					<div className='quiz-question'>{currentQuestion.question}</div>
					<form>
						<input
							type='text'
							name='guess'
							value={guess}
							onChange={handleChange}
						/>
						<input
							className='submit-guess button'
							type='submit'
							value='Submit Answer'
							onClick={submitGuess}
						/>
					</form>
					{showAnswer && <ShowAnswer />}
				</div>
			)}
		</>
	);
};

export default PlayQuizForm;
