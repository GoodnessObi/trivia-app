import React, { useEffect, useReducer } from 'react';
import { QuizAction, QuizState } from '../../types';

export function useQuizReducer(): [QuizState, React.Dispatch<QuizAction>] {
	const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
		switch (action.type) {
			case 'SET_CATEGORY':
				return {
					...state,
					quizCategory: action.payload.quizCategory,
					previousQuestions: [...action.payload.previousQuestions],
				};
			case 'FETCH_QUESTION':
				return {
					...state,
					currentQuestion: action.payload.question,
					showAnswer: false,
					guess: '',
					forceEnd: action.payload.question ? false : true,
				};
			case 'DISPLAY_QUESTION':
				console.log('dispatched', action.payload);
				return {
					...state,
					currentQuestion: action.payload.question,
					showAnswer: false,
					guess: '',
					forceEnd: action.payload.question ? false : true,
				};
			default:
				return state;
		}
	};

	const initialState = {
		quizCategory: { type: '', id: null },
		previousQuestions: [],
		showAnswer: false,
		numCorrect: 0,
		currentQuestion: { id: '', question: '' },
		guess: '',
		forceEnd: false,
	};

	const [state, dispatch] = useReducer(quizReducer, initialState);

	useEffect(() => {
		if (state.quizCategory.id !== null) {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					previous_questions: state.previousQuestions,
					quiz_category: state.quizCategory,
				}),
			};

			const getNextQuestion = async () => {
				const fetchResponse = await fetch('/quizzes', requestOptions);
				const data = await fetchResponse.json();
				console.log(data, 'quiz');
				dispatch({
					type: 'FETCH_QUESTION',
					payload: { question: data.question },
				});
			};

			getNextQuestion();
		}
	}, [state.quizCategory, state.previousQuestions]);

	return [state, dispatch];
}
