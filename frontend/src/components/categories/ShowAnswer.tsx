export default function showAnswer() {
	return (
		<div className='quiz-play-holder'>
			<div className='quiz-question'>
				{/* {this.state.currentQuestion.question} */}
			</div>
			{/* <div className={`${evaluate ? 'correct' : 'wrong'}`}>
					{evaluate ? 'You were correct!' : 'You were incorrect'}
				</div> */}
			{/* <div className='quiz-answer'>{this.state.currentQuestion.answer}</div> */}
			<div className='next-question button'> Next Question </div>
		</div>
	);
}
