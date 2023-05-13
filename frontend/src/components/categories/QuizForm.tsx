type PlayQuizFormProps = {
	currentQuestion: {
		id: string;
		question: string;
	};
	handleChange: () => void;
	submitAnswer: () => void;
	answer: string;
};

const PlayQuizForm = ({
	currentQuestion,
	handleChange,
	submitAnswer,
	answer,
}: PlayQuizFormProps) => {
	return (
		<div className='quiz-play-holder'>
			<div className='quiz-question'>{currentQuestion.question}</div>
			<form>
				<input
					type='text'
					name='guess'
					value={answer}
					onChange={handleChange}
				/>
				<input
					className='submit-guess button'
					type='submit'
					value='Submit Answer'
					onClick={submitAnswer}
				/>
			</form>
		</div>
	);
};

export default PlayQuizForm;
