export type QuestionItem = {
	id: string;
	question: string;
	answer: string;
	category: number;
	difficulty: number;
};

export type Categories = { [key: number]: string };

export interface QuestionFetchAction {
	type: 'FETCH';
	payload: {
		data: {
			questions: QuestionItem[];
			categories: { [key: number]: string };
			totalQuestions: number;
			currentCategory?: number;
		};
	};
}

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

export interface QuestionFetchByCatgeoryAction {
	type: 'FETCH_BY_CATEGORY';
	payload: {
		data: {
			questions: QuestionItem[];
			totalQuestions: number;
			currentCategory?: string;
		};
	};
}

export interface QuestionAddAction {
	type: 'ADD_QUESTION';
	payload: {
		question: Omit<QuestionItem, 'id'>;
	};
}

export interface QuestionSearchAction {
	type: 'SEARCH';
	payload: {
		data: {
			questions: QuestionItem[];
		};
	};
}

export interface QuestionDeleteAction {
	type: 'DELETE';
	payload: {
		questionId: QuestionItem['id'];
	};
}

export type QuestionAction =
	| QuestionFetchAction
	| QuestionAddAction
	| QuestionDeleteAction
	| QuestionFetchByCatgeoryAction
	| QuestionSearchAction;

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
