export type QuestionItem = {
	id: string;
	question: string;
	answer: number;
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

export interface QuizAddAction {
	type: 'ADD';
	payload: {
		question: QuestionItem;
	};
}

export interface QuizDeleteAction {
	type: 'DELETE';
	payload: {
		questionId: QuestionItem['id'];
	};
}

export type QuizAction = QuizFetchAction | QuizAddAction | QuizDeleteAction;
// | QuizRateAction
