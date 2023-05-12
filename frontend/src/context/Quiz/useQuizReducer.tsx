import React, { useEffect, useReducer } from 'react';
import { QuizAction, QuizState } from '../../types';
// import { v4 as uuid } from 'uuid';

export function useQuizReducer(): [QuizState, React.Dispatch<QuizAction>] {
	const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
		switch (action.type) {
			case 'FETCH':
				return {
					...state,
				};
			case 'FETCH_CATEGORY':
				console.log('dispatched');
				return {
					...state,
					categories: action.payload.data.categories,
				};
			default:
				return state;
		}
	};

	const initialState = {
		categories: {},
		quizCategory: { type: '', id: 0 },
		previousQuestions: [],
		showAnswer: false,
		numCorrect: 0,
		currentQuestion: { id: '', question: '' },
		guess: '',
		forceEnd: false,
	};

	const [state, dispatch] = useReducer(quizReducer, initialState);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch('/categories');
			const data = await res.json();
			console.log(data, 'categories');
			dispatch({ type: 'FETCH_CATEGORY', payload: { data } });
		};

		fetchData();
	}, []);

	return [state, dispatch];
}
