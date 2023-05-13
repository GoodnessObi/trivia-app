import React from 'react';
import { Categories } from '../../types';

type CategoriesProps = {
	categories: Categories;
	selectCategory: (type: string, id: number) => void;
};

const CategoriesList: React.JSXElementConstructor<CategoriesProps> = ({
	categories,
	selectCategory,
}) => {
	// console.log(categories, 'iiiii');
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
