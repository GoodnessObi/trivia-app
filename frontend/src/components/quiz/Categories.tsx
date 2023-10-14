import React from 'react';
import { useQuiz } from '../../context/Quiz/QuizProvider';
import { PageWrapper, ImageWrapper } from '../../pages/AddQuestionView';
import styled from 'styled-components';
import Modal from '../shared/Modal';
import FinalScore from './FinalScore';

type CategoriesProps = {
	categories: Categories;
};

interface ILi {
	category: string;
}

const catBg: { [id: string]: string } = {
	science: '#E3EEFF',
	art: '#FFF7EC',
	history: '#bef8f5',
	geography: '#E9F8F1',
	entertainment: '#F4DCD3',
	sports: '#E0E3EF',
	all: '#fff',
};

const CategoriesSection = styled.div`
	padding: 36px;
	h2 {
		text-align: center;
	}
`;

const QuestionCards = styled.ul`
	// display: grid;
	// grid-template-columns: repeat(2, 1fr);
	// grid-gap: 12px;
	list-style-type: none;
	padding: 0 18px;
`;

const QuestionCard = styled.li<ILi>`
	text-align: center;
	background: ${(props) => catBg[props.category]};
	padding 16px;
	margin-bottom: 16px;
	cursor: pointer;
	border-radius: 8px;
`;

const CategoriesList: React.JSXElementConstructor<CategoriesProps> = ({
	categories,
}) => {
	const { quizState, quizDispatch } = useQuiz();

	const selectCategory = (categoryType: string, categoryId: number) => {
		const category = { type: categoryType, id: categoryId };
		let prevQuestions: string[] = [];

		if (quizState.currentQuestion !== undefined) {
			prevQuestions = [
				...quizState.previousQuestions,
				quizState.currentQuestion.id,
			];
		}

		quizDispatch({
			type: 'SET_CATEGORY',
			payload: {
				quizCategory: category,
				previousQuestions: [...prevQuestions],
			},
		});
	};

	return (
		<PageWrapper>
			<CategoriesSection>
				<h2>Choose Category</h2>
				<QuestionCards>
					<QuestionCard
						className='play-category'
						onClick={() => selectCategory('all', 0)}
						category='all'
					>
						ALL
					</QuestionCard>
					{Object.keys(categories).map((id) => {
						return (
							<QuestionCard
								key={id}
								className='play-category'
								onClick={() => selectCategory(categories[+id], +id)}
								category={`${categories[+id].toLowerCase()}`}
							>
								<img
									className='category'
									alt={`${categories[+id].toLowerCase()}`}
									src={`${categories[+id].toLowerCase()}.svg`}
								/>
								{categories[+id]}
							</QuestionCard>
						);
					})}
				</QuestionCards>
			</CategoriesSection>

			<ImageWrapper>
				<img src='/picture_3.jpg' alt='' />
			</ImageWrapper>
			{Object.keys(quizState.currentQuestion).length === 0 && (
				<Modal>
					<FinalScore />
				</Modal>
			)}
		</PageWrapper>
	);
};

export default CategoriesList;
