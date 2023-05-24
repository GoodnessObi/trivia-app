import { useQuiz } from '../../context/Quiz/QuizProvider';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
export default function FinalScore() {
	const { quizState, quizDispatch } = useQuiz();
	return (
		<div className='quiz-play-holder'>
			{+quizState.numCorrect < 3 ? (
				<span>
					<ThumbDownOffAltOutlinedIcon fontSize='large' />
				</span>
			) : (
				<span>
					<ThumbUpOffAltOutlinedIcon fontSize='large' />
				</span>
			)}
			<p className='final-header'>Your Final Score is {quizState.numCorrect}</p>
			<button
				className='play-again button'
				onClick={() => {
					quizDispatch({ type: 'RESET_QUIZ' });
				}}
			>
				Play Again?
			</button>
		</div>
	);
}
