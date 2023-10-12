export interface QuestionFetchAction {
	type: 'FETCH';
	payload: {
		data: {
			questions: QuestionItem[];
			categories: { [key: number]: string };
			total_questions: number;
			current_category?: number;
		};
	};
}

export interface QuestionFetchByCatgeoryAction {
	type: 'FETCH_BY_CATEGORY';
	payload: {
		data: {
			questions: QuestionItem[];
			total_questions: number;
			current_category?: string;
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
