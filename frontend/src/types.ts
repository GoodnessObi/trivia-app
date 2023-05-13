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

export interface QuizSetCategoryAction {
	type: 'SET_CATEGORY';
	payload: {
		quizCategory: { type: string; id: number };
		previousQuestions: string[];
	};
}

export interface QuizDisplayAction {
	type: 'DISPLAY_QUESTION';
	payload: {
		question: { id: string; question: string };
	};
}

export interface QuizFetchAction {
	type: 'FETCH_QUESTION';
	payload: {
		question: { id: string; question: string };
	};
}

// export interface QuizCategoryDIsplayAction {
// 	type: 'FETCH_CATEGORY';
// 	payload: {
// 		data: {
// 			category: { type?: string; id?: number };
// 		};
// 	};
// }

export type QuizAction =
	| QuizFetchAction
	| QuizDisplayAction
	| QuizSetCategoryAction;
