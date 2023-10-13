import React, { useContext } from 'react';
import { QuestionAction } from '../../types/question';
import { useQuestionReducer } from './useQuestionReducer';

type QuestionContextType = {
	questions: QuestionItem[];
	categories: Categories;
	totalQuestions: number;
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
	const [
		{ initialized, categories, questions, totalQuestions },
		questionDispatch,
	] = useQuestionReducer();

	return (
		<QuestionContext.Provider
			value={{ questions, categories, totalQuestions, questionDispatch }}
		>
			{initialized ? children : <div>loading...</div>}
		</QuestionContext.Provider>
	);
};

export const useQuestion = () => {
	const questionCtx = useContext(QuestionContext);
	if (!questionCtx) {
		throw new Error('Component beyond QuestionContext!');
	}
	return questionCtx;
};
