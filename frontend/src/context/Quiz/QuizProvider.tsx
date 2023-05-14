import { QuizAction, QuizState } from '../../types';
import { useQuizReducer } from './useQuizReducer';
import React, { useContext } from 'react';

type QuizContextType = {
	quizState: QuizState;
	quizDispatch: React.Dispatch<QuizAction>;
};

type QuizProviderProps = {
	children: React.ReactNode;
};

export const QuizContext = React.createContext<QuizContextType | undefined>(
	undefined
);

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
	const [quizState, quizDispatch] = useQuizReducer();

	return (
		<QuizContext.Provider value={{ quizState, quizDispatch }}>
			{children}
		</QuizContext.Provider>
	);
};

export const useQuiz = () => {
	const quizContext = useContext(QuizContext);
	if (!quizContext) {
		throw new Error('Component beyond QuizContext!');
	}
	return quizContext;
};
