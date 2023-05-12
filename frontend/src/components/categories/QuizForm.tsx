const PlayQuizForm = ({
	currentQuestion,
}: {
	currentQuestion: {
		id: string;
		question: string;
	};
}) => {
	return (
		<div className='quiz-play-holder'>
			<div className='quiz-question'>{currentQuestion.question}</div>
			<form>
				<input type='text' name='guess' />
				<input
					className='submit-guess button'
					type='submit'
					value='Submit Answer'
				/>
			</form>
		</div>
	);
};

export default PlayQuizForm;
