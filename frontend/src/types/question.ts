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

export interface QuestionReloadAction {
	type: 'RELOAD';
}

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
	| QuestionReloadAction
	| QuestionAddAction
	| QuestionDeleteAction
	| QuestionFetchByCatgeoryAction
	| QuestionSearchAction;
