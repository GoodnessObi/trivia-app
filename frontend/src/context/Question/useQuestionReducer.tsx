import React, { useReducer } from 'react';
import { QuestionAction } from '../../types/question';

interface QuestionState {
	questions: QuestionItem[];
	totalQuestions: number;
	categories: Categories;
	initialized: boolean;
	currentCategory?: string;
}

export function useQuestionReducer(): [
	QuestionState,
	React.Dispatch<QuestionAction>
] {
	const questionReducer = (
		state: QuestionState,
		action: QuestionAction
	): QuestionState => {
		switch (action.type) {
			case 'FETCH':
				return {
					...state,
					initialized: true,
					questions: action.payload.data.questions,
					categories: action.payload.data.categories,
					totalQuestions: action.payload.data.total_questions,
				};
			case 'FETCH_BY_CATEGORY':
				return {
					...state,
					questions: action.payload.data.questions,
					currentCategory: action.payload.data.current_category,
					totalQuestions: action.payload.data.total_questions,
				};
			case 'ADD_QUESTION':
				const question = {
					...action.payload.question,
				};
				return {
					...state,
					questions: [...state.questions, question],
				};
			case 'DELETE':
				return {
					...state,
					questions: state.questions.filter(
						({ id }) => action.payload.questionId !== id
					),
				};
			case 'SEARCH':
				return {
					...state,
					questions: action.payload.data.questions,
				};
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(questionReducer, {
		questions: [],
		categories: {},
		totalQuestions: 0,
		initialized: true,
	});

	// useEffect(() => {
	// 	if (state.reload) {
	// 		try {
	// 			const fetchData = async () => {
	// 				const res = await fetch('/questions?page=2');
	// 				const data = await res.json();
	// 				console.log(data, 'I ran');
	// 				dispatch({ type: 'FETCH', payload: { data } });
	// 			};
	// 			fetchData();
	// 		} catch (e) {
	// 			console.log(e, 'fetch');
	// 		}
	// 	}
	// }, [state.reload]);

	return [state, dispatch];
}
