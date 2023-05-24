import { useQuiz } from '../../context/Quiz/QuizProvider';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';

const ShowAnswer = () => {
	const { quizState, quizDispatch } = useQuiz();
	const { currentQuestion, isCorrect } = quizState;
	return (
		<div className='quiz-play-holder'>
			{isCorrect ? (
				<p>
					<SentimentSatisfiedAltOutlinedIcon />
					You were correct!
				</p>
			) : (
				<p>
					<SentimentDissatisfiedOutlinedIcon />
					You were incorrect!
				</p>
			)}
			<p className='quiz-question'>{currentQuestion.question}</p>
			<p className='quiz-answer'>The answer is {currentQuestion.answer}</p>
			<button
				className='next-question button'
				onClick={() => {
					quizDispatch({
						type: 'FETCH_QUIZ',
						payload: { currentQuestion },
					});
				}}
			>
				Next Question
			</button>
		</div>
	);
};

export default ShowAnswer;
