import React, { useState } from 'react';
import '../../stylesheets/Question.css';
import { QuestionItem } from '../../types';

type QuestionCardProps = {
	questionItem: QuestionItem;
};

const QuestionCard = ({ questionItem }: QuestionCardProps) => {
	const [visibleAnswer, setVisibleAnswer] = useState(false);

	const flipVisibility = () => {
		setVisibleAnswer((prev) => !prev);
	};
	return (
		<div className='Question-holder'>
			<div className='Question'>{questionItem.question}</div>
			<div className='Question-status'>
				<img
					className='category'
					alt={`${questionItem.category}.toLowerCase()`}
					src={`${questionItem.category}.toLowerCase().svg`}
				/>
				<div className='difficulty'>Difficulty: {questionItem.difficulty}</div>
				<img
					src='delete.png'
					alt='delete'
					className='delete'
					// onClick={() => this.props.questionAction('DELETE')}
				/>
			</div>
			<div className='show-answer button' onClick={() => flipVisibility()}>
				{visibleAnswer ? 'Hide' : 'Show'} Answer
			</div>
			<div className='answer-holder'>
				<span
					style={{
						visibility: visibleAnswer ? 'visible' : 'hidden',
					}}
				>
					Answer: {questionItem.answer}
				</span>
			</div>
		</div>
	);
};

export default QuestionCard;
