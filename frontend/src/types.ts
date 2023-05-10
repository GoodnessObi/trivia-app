export type QuestionItem = {
	id: string;
	question: string;
	answer: string;
	category: number;
	difficulty: number;
};

export type Categories = { [key: number]: string };

export interface QuizFetchAction {
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

export interface QuizFetchByCatgeoryAction {
	type: 'FETCH_BY_CATEGORY';
	payload: {
		data: {
			questions: QuestionItem[];
			totalQuestions: number;
			currentCategory?: string;
		};
	};
}

export interface QuizAddAction {
	type: 'ADD_QUESTION';
	payload: {
		question: Omit<QuestionItem, 'id'>;
	};
}

export interface QuizDeleteAction {
	type: 'DELETE';
	payload: {
		questionId: QuestionItem['id'];
	};
}

export type QuizAction =
	| QuizFetchAction
	| QuizAddAction
	| QuizDeleteAction
	| QuizFetchByCatgeoryAction;
