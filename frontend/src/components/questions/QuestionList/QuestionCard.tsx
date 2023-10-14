import { useState } from 'react';
import { useQuestion } from '../../../context/Question/QuestionProvider';
import {
	Card,
	CardAction,
	CardStatus,
	StyledButton,
} from './QuestionCard.styled';
import {
	DeleteForeverOutlined,
	MilitaryTech,
	MilitaryTechOutlined,
	WorkspacePremium,
	WorkspacePremiumOutlined,
} from '@mui/icons-material';

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
								<MilitaryTech key={index} fontSize='small' />
							))}
						</span>

						<span style={{ color: '#C8C8C8' }}>
							{new Array(5 - questionItem.difficulty)
								.fill('')
								.map((_, index) => (
									<MilitaryTechOutlined key={index} fontSize='small' />
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
				<DeleteForeverOutlined
					fontSize='small'
					onClick={() => deleteQuestion(questionItem.id)}
					color='warning'
				/>
				<StyledButton onClick={() => flipVisibility()}>
					{visibleAnswer ? 'Hide' : 'View'} Answer
				</StyledButton>
			</CardAction>
		</Card>
	);
};

export default QuestionCard;
