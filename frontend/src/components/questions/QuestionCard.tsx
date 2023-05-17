import { useState } from 'react';
import { QuestionItem } from '../../types';
import { useQuestion } from '../../context/Question/QuestionProvider';
import styled from 'styled-components';
import SchoolIcon from '@mui/icons-material/School';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const Card = styled.div`
	background-color: #fff;
	padding: 12px;
	border-radius: 8px;

	p {
		font-size: 16px;

		&.answer {
			font-size: 12px;
		}
	}
`;

const CardAction = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const CardStatus = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledButton = styled.button`
	cursor: pointer;
	color: #f3f3fd;
	background-color: #736ced;
	border-radius: 8px;
	border: 0px;
	padding: 8px;
`;

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
			<CardStatus>
				<div style={{ color: '#21B573' }}>
					{new Array(questionItem.difficulty).fill('').map((_, index) => (
						<SchoolIcon key={index} fontSize='small' />
					))}
					{new Array(5 - questionItem.difficulty).fill('').map((_, index) => (
						<SchoolOutlinedIcon key={index} fontSize='small' />
					))}
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
