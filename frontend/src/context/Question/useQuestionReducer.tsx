import React, { useEffect, useReducer } from 'react';
import { QuestionAction } from '../../types/question';
import { v4 as uuid } from 'uuid';

interface QuestionState {
	questions: QuestionItem[];
	categories: Categories;
	initialized: boolean;
	currentCategory?: string;
	reload?: boolean;
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
					reload: false,
				};
			case 'FETCH_BY_CATEGORY':
				return {
					...state,
					questions: action.payload.data.questions,
					currentCategory: action.payload.data.currentCategory,
				};

			case 'ADD_QUESTION':
				const question = {
					id: uuid(),
					...action.payload.question,
				};
				return {
					...state,
					questions: [...state.questions, question],
					reload: true,
				};

			case 'DELETE':
				return {
					...state,
					questions: state.questions.filter(
						({ id }) => action.payload.questionId !== id
					),
					reload: true,
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
		initialized: true,
		reload: true,
	});

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const res = await fetch('/questions?page=1');
	// 		const data = await res.json();
	// 		dispatch({ type: 'FETCH', payload: { data } });
	// 	};

	// 	fetchData();
	// }, []);

	useEffect(() => {
		if (state.reload) {
			try {
				const fetchData = async () => {
					const res = await fetch('/questions?page=1');
					const data = await res.json();
					console.log(data, 'I ran');
					dispatch({ type: 'FETCH', payload: { data } });
				};
				fetchData();
			} catch (e) {
				console.log(e, 'fetch');
			}
		}
	}, [state.reload]);

	return [state, dispatch];
}
