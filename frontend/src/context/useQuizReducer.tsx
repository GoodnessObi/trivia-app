import React, { useEffect, useReducer } from 'react';
import { QuestionItem, Categories, QuizAction } from '../types';
import { v4 as uuid } from 'uuid';

interface QuizState {
	questions: QuestionItem[];
	categories: Categories;
	initialized: boolean;
	currentCategory?: string;
}

export function useQuizReducer(): [QuizState, React.Dispatch<QuizAction>] {
	// TODO: Implement all action processing

	const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
		switch (action.type) {
			case 'FETCH':
				return {
					...state,
					initialized: true,
					questions: action.payload.data.questions,
					categories: action.payload.data.categories,
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
				return { ...state, questions: { ...state.questions, ...question } };

			case 'DELETE':
				return {
					...state,
					questions: state.questions.filter(
						({ id }) => action.payload.questionId !== id
					),
				};

			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(quizReducer, {
		questions: [],
		categories: {},
		initialized: false,
	});

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('/questions?page=1');
			const data = await res.json();
			dispatch({ type: 'FETCH', payload: { data } });
		};

		fetchData();
	}, []);

	return [state, dispatch];
}
