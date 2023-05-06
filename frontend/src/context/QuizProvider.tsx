import { useQuizReducer } from './useQuizReducer';
import React, { useContext } from 'react';
import { QuestionItem, Categories, QuizAction } from '../types';

type QuizContextType = {
	questions: QuestionItem[];
	categories: Categories;
	quizDispatch: React.Dispatch<QuizAction>;
};

export const QuizContext = React.createContext<QuizContextType | undefined>(
	undefined
);

type QuizProviderProps = {
	children: React.ReactNode;
};

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
	const [{ initialized, categories, questions }, quizDispatch] =
		useQuizReducer();
	return (
		<QuizContext.Provider value={{ questions, categories, quizDispatch }}>
			{initialized ? children : <div>loading...</div>}
		</QuizContext.Provider>
	);
};

export const useQuiz = () => {
	const quizCtx = useContext(QuizContext);
	if (!quizCtx) {
		throw new Error('Component beyond MovieContext!');
	}
	return quizCtx;
};
