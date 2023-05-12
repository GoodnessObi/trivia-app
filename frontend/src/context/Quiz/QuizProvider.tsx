import { useQuizReducer } from './useQuizReducer';
import React, { useContext } from 'react';
import { QuizAction, QuizState } from '../../types';

type QuizContextType = {
	quizState: QuizState;
	quizDispatch: React.Dispatch<QuizAction>;
};

export const QuizContext = React.createContext<QuizContextType | undefined>(
	undefined
);

type QuizProviderProps = {
	children: React.ReactNode;
};

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
	const [quizState, quizDispatch] = useQuizReducer();
	return (
		<QuizContext.Provider value={{ quizState, quizDispatch }}>
			{children}
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
