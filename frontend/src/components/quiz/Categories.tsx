import React from 'react';
import { Categories } from '../../types';
import { useQuiz } from '../../context/Quiz/QuizProvider';

type CategoriesProps = {
	categories: Categories;
};

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
		<div className='quiz-play-holder'>
			<div className='choose-header'>Choose Category</div>
			<div className='category-holder'>
				<div className='play-category' onClick={() => selectCategory('all', 0)}>
					ALL
				</div>
				{Object.keys(categories).map((id) => {
					return (
						<div
							key={id}
							className='play-category'
							onClick={() => selectCategory(categories[+id], +id)}
						>
							{categories[+id]}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CategoriesList;
