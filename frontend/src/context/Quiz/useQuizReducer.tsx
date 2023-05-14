import React, { useCallback, useEffect, useReducer } from 'react';
import { QuizAction, QuizState } from '../../types';

export function useQuizReducer(): [QuizState, React.Dispatch<QuizAction>] {
	const evaluateAnswer = (guess: string, answer: string) => {
		const formatGuess = guess
			// eslint-disable-next-line
			.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
			.toLowerCase();

		const answerArray = answer.toLowerCase().split(' ');
		return answerArray.every((el: string) => formatGuess.includes(el));
	};

	const initialState = {
		quizCategory: { type: '', id: null },
		previousQuestions: [],
		showAnswer: false,
		numCorrect: 0,
		currentQuestion: {
			id: '',
			question: '',
			answer: '',
			category: 0,
			difficulty: 0,
		},
		guess: '',
		isCorrect: false,
		endGame: true,
	};

	const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
		switch (action.type) {
			case 'SET_CATEGORY':
				return {
					...state,
					quizCategory: action.payload.quizCategory,
					previousQuestions: [...action.payload.previousQuestions],
				};
			case 'START_QUIZ':
				return {
					...state,
					currentQuestion: action.payload.question,
					showAnswer: false,
					guess: '',
					endGame: false,
					isCorrect: false,
				};
			case 'FETCH_QUIZ':
				return {
					...state,
					previousQuestions: [
						...state.previousQuestions,
						action.payload.currentQuestion.id,
					],
				};
			case 'MAKE_GUESS':
				return {
					...state,
					guess: action.payload.guess,
				};
			case 'SUBMIT_GUESS':
				return {
					...state,
					showAnswer: true,
					numCorrect: !evaluateAnswer(state.guess, state.currentQuestion.answer)
						? state.numCorrect
						: state.numCorrect++,
					isCorrect: evaluateAnswer(state.guess, state.currentQuestion.answer)
						? true
						: false,
				};
			case 'RESET_QUIZ':
				return { ...state, ...initialState };
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(quizReducer, initialState);

	const fetchQuestion = useCallback(async () => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				previous_questions: state.previousQuestions,
				quiz_category: state.quizCategory,
			}),
		};

		const fetchResponse = await fetch('/quizzes', requestOptions);
		const data = await fetchResponse.json();
		dispatch({
			type: 'START_QUIZ',
			payload: { question: data.question },
		});
	}, [state.previousQuestions, state.quizCategory]);

	useEffect(() => {
		if (state.quizCategory.id !== null) {
			fetchQuestion();
		}
	}, [state.quizCategory.id, fetchQuestion]);

	return [state, dispatch];
}
