import { useQuestionReducer } from './useQuestionReducer';
import React, { useContext } from 'react';
import { QuestionItem, Categories, QuestionAction } from '../../types';

type QuestionContextType = {
	questions: QuestionItem[];
	categories: Categories;
	questionDispatch: React.Dispatch<QuestionAction>;
};

export const QuestionContext = React.createContext<
	QuestionContextType | undefined
>(undefined);

type QuestionProviderProps = {
	children: React.ReactNode;
};

export const QuestionProvider: React.FC<QuestionProviderProps> = ({
	children,
}) => {
	const [{ initialized, categories, questions }, questionDispatch] =
		useQuestionReducer();
	return (
		<QuestionContext.Provider
			value={{ questions, categories, questionDispatch }}
		>
			{initialized ? children : <div>loading...</div>}
		</QuestionContext.Provider>
	);
};

export const useQuestion = () => {
	const questionCtx = useContext(QuestionContext);
	if (!questionCtx) {
		throw new Error('Component beyond MovieContext!');
	}
	return questionCtx;
};
