export type QuizState = {
	currentCategory?: string;
	quizCategory: { type: string; id: number | null };
	previousQuestions: string[];
	showAnswer: boolean;
	numCorrect: number;
	currentQuestion: QuestionItem;
	guess: string;
	isCorrect: boolean;
	endGame: boolean;
};

export interface QuizSetCategoryAction {
	type: 'SET_CATEGORY';
	payload: {
		quizCategory: { type: string; id: number };
		previousQuestions: string[];
	};
}

export interface QuizStartAction {
	type: 'START_QUIZ';
	payload: {
		question: QuestionItem;
	};
}

export interface QuizFetchAction {
	type: 'FETCH_QUIZ';
	payload: {
		currentQuestion: QuestionItem;
	};
}
export interface QuizHandleChangeAction {
	type: 'MAKE_GUESS';
	payload: {
		guess: string;
	};
}

export interface QuizSubmitGuessAction {
	type: 'SUBMIT_GUESS';
}

export interface QuizResetAction {
	type: 'RESET_QUIZ';
}

export type QuizAction =
	| QuizFetchAction
	| QuizStartAction
	| QuizSetCategoryAction
	| QuizSubmitGuessAction
	| QuizHandleChangeAction
	| QuizResetAction;
