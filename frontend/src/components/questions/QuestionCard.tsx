import { useState } from 'react';
import '../../stylesheets/Question.css';
import { QuestionItem } from '../../types';
import { useQuestion } from '../../context/Question/QuestionProvider';

type QuestionCardProps = {
	questionItem: QuestionItem;
	deleteQuestion: (id: string) => {};
};

const QuestionCard = ({ questionItem, deleteQuestion }: QuestionCardProps) => {
	const { categories } = useQuestion();
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
					alt={`${categories[questionItem.category].toLowerCase()}`}
					src={`${categories[questionItem.category].toLowerCase()}.svg`}
				/>
				<div className='difficulty'>Difficulty: {questionItem.difficulty}</div>
				<img
					src='delete.png'
					alt='delete'
					className='delete'
					onClick={() => deleteQuestion(questionItem.id)}
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
