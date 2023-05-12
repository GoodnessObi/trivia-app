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
	categories: Categories;
	currentCategory?: string;
	quizCategory: { type?: string; id?: number };
	previousQuestions: string[];
	showAnswer: boolean;
	numCorrect: number;
	currentQuestion: { id: string; question: string };
	guess: string;
	forceEnd: boolean;
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
	| QuestionFetchByCatgeoryAction;

export interface QuizFetchAction {
	type: 'FETCH_QUESTION';
	payload: {
		data: {
			// questions: QuestionItem[];
			// categories: { [key: number]: string };
			// totalQuestions: number;
			// currentCategory?: number;
		};
	};
}

export interface QuizCategoryFetchAction {
	type: 'FETCH_CATEGORY';
	payload: {
		data: {
			categories: Categories;
		};
	};
}

export type QuizAction = QuizFetchAction | QuizCategoryFetchAction;
