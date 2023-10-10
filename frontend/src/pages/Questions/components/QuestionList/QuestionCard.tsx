import { useState } from 'react';
import { useQuestion } from '../../../../context/Question/QuestionProvider';
import {
	Card,
	CardAction,
	CardStatus,
	StyledButton,
} from './QuestionCard.styled';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

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
		<Card>
			<div>
				<CardStatus>
					<div>
						<span style={{ color: '#BB0000' }}>
							{new Array(questionItem.difficulty).fill('').map((_, index) => (
								<LocalFireDepartmentIcon key={index} fontSize='small' />
							))}
						</span>

						<span style={{ color: '#C8C8C8' }}>
							{new Array(5 - questionItem.difficulty)
								.fill('')
								.map((_, index) => (
									<LocalFireDepartmentOutlinedIcon
										key={index}
										fontSize='small'
									/>
								))}
						</span>
					</div>
					<img
						className='category'
						alt={`${categories[questionItem.category].toLowerCase()}`}
						src={`${categories[questionItem.category].toLowerCase()}.svg`}
					/>
				</CardStatus>
				<p>{questionItem.question}</p>
				<p
					className='answer'
					style={{
						visibility: visibleAnswer ? 'visible' : 'hidden',
					}}
				>
					{questionItem.answer}
				</p>
			</div>

			<CardAction>
				<DeleteForeverOutlinedIcon
					fontSize='small'
					onClick={() => deleteQuestion(questionItem.id)}
					color='warning'
				/>
				{/* <img
					src='delete.png'
					alt='delete'
					className='delete'
					onClick={() => deleteQuestion(questionItem.id)}
				/> */}
				<StyledButton onClick={() => flipVisibility()}>
					{visibleAnswer ? 'Hide' : 'View'} Answer
				</StyledButton>
			</CardAction>
		</Card>
	);
};

export default QuestionCard;
