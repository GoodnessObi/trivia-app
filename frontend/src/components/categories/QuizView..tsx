import React, { useState } from 'react';
import '../../stylesheets/QuizView.css';
import CategoriesList from './Categories';
import { useQuiz } from '../../context/Quiz/QuizProvider';
// import { useQuestion } from '../../context/Question/QuestionProvider';
import PlayQuizForm from './QuizForm';

export default function QuizView() {
	const { quizState, quizDispatch } = useQuiz();

	const { categories } = quizState;
	const { FETCH_QUESTION } = quizDispatch;

	const selectCategory = (categoryType?: string, categoryId?: number) => {
		console.log(categoryType, categoryId);

		// setQuizState(
		// 	(prev) => ({
		// 		...prev,
		// 		quizCategory: {
		// 			...prev.quizCategory,
		// 			type: categoryType,
		// 			id: categoryId,
		// 		},
		// 	}),
		// 	getNextQuestion
		// );
	};

	// const getNextQuestion = async () => {
	// 	if (quizState.currentQuestion.id !== '') {
	// 		setQuizState((prev) => ({
	// 			...prev,
	// 			previousQuestions: [
	// 				...quizState.previousQuestions,
	// 				quizState.currentQuestion.id,
	// 			],
	// 		}));
	// 	}
	// 	console.log(quizState.quizCategory);
	// 	// const prevQuestions = [...quizState.previousQuestions];

	// 	const requestOptions = {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify({
	// 			previous_questions: quizState.previousQuestions,
	// 			quiz_category: quizState.quizCategory,
	// 		}),
	// 	};

	// 	console.log(requestOptions.body);
	// 	try {
	// 		const fetchResponse = await fetch('/quizzes', requestOptions);
	// 		const data = await fetchResponse.json();
	// 		console.log(data, 'quiz');
	// 		// questionDispatch({ type: 'ADD_QUESTION', payload: { question: formState } });
	// 		setQuizState((prev) => ({
	// 			...prev,
	// 			showAnswer: false,
	// 			currentQuestion: data.question,
	// 			guess: '',
	// 			forceEnd: data.question ? false : true,
	// 		}));
	// 		// clearForm();
	// 		return;
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// };

	return (
		// <>
		// 	{quizState.currentQuestion.question !== '' ? (
		// 		<PlayQuizForm currentQuestion={quizState.currentQuestion} />
		// 	) : (
		// 		<CategoriesList
		// 			categories={categories}
		// 			selectCategory={selectCategory}
		// 		/>
		// 	)}
		// </>
		<CategoriesList categories={categories} selectCategory={selectCategory} />
	);
}

// const questionsPerPlay = 5;

// class QuizView extends Component {
// 	constructor(props) {
// 		super();
// 		this.state = {
// 			quizCategory: null,
// 			previousQuestions: [],
// 			showAnswer: false,
// 			categories: {},
// 			numCorrect: 0,
// 			currentQuestion: {},
// 			guess: '',
// 			forceEnd: false,
// 		};
// 	}

// 	selectCategory = ({ type, id = 0 }) => {
// 		this.setState({ quizCategory: { type, id } }, this.getNextQuestion);
// 	};

// 	handleChange = (event) => {
// 		this.setState({ [event.target.name]: event.target.value });
// 	};

// 	getNextQuestion = () => {
// 		const previousQuestions = [...this.state.previousQuestions];
// 		if (this.state.currentQuestion.id) {
// 			previousQuestions.push(this.state.currentQuestion.id);
// 		}

// 		$.ajax({
// 			url: '/quizzes', //TODO: update request URL
// 			type: 'POST',
// 			dataType: 'json',
// 			contentType: 'application/json',
// 			data: JSON.stringify({
// 				previous_questions: previousQuestions,
// 				quiz_category: this.state.quizCategory,
// 			}),
// 			xhrFields: {
// 				withCredentials: true,
// 			},
// 			crossDomain: true,
// 			success: (result) => {
// 				this.setState({
// 					showAnswer: false,
// 					previousQuestions: previousQuestions,
// 					currentQuestion: result.question,
// 					guess: '',
// 					forceEnd: result.question ? false : true,
// 				});
// 				return;
// 			},
// 			error: (error) => {
// 				alert('Unable to load question. Please try your request again');
// 				return;
// 			},
// 		});
// 	};

// 	submitGuess = (event) => {
// 		event.preventDefault();
// 		let evaluate = this.evaluateAnswer();
// 		this.setState({
// 			numCorrect: !evaluate ? this.state.numCorrect : this.state.numCorrect + 1,
// 			showAnswer: true,
// 		});
// 	};

// 	restartGame = () => {
// 		this.setState({
// 			quizCategory: null,
// 			previousQuestions: [],
// 			showAnswer: false,
// 			numCorrect: 0,
// 			currentQuestion: {},
// 			guess: '',
// 			forceEnd: false,
// 		});
// 	};

// 	renderFinalScore() {
// 		return (
// 			<div className='quiz-play-holder'>
// 				<div className='final-header'>
// 					Your Final Score is {this.state.numCorrect}
// 				</div>
// 				<div className='play-again button' onClick={this.restartGame}>
// 					Play Again?
// 				</div>
// 			</div>
// 		);
// 	}

// 	evaluateAnswer = () => {
// 		const formatGuess = this.state.guess
// 			// eslint-disable-next-line
// 			.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
// 			.toLowerCase();
// 		const answerArray = this.state.currentQuestion.answer
// 			.toLowerCase()
// 			.split(' ');
// 		return answerArray.every((el) => formatGuess.includes(el));
// 	};

// 	renderCorrectAnswer() {
// 		let evaluate = this.evaluateAnswer();
// 		return (
// 			<div className='quiz-play-holder'>
// 				<div className='quiz-question'>
// 					{this.state.currentQuestion.question}
// 				</div>
// 				<div className={`${evaluate ? 'correct' : 'wrong'}`}>
// 					{evaluate ? 'You were correct!' : 'You were incorrect'}
// 				</div>
// 				<div className='quiz-answer'>{this.state.currentQuestion.answer}</div>
// 				<div className='next-question button' onClick={this.getNextQuestion}>
// 					{' '}
// 					Next Question{' '}
// 				</div>
// 			</div>
// 		);
// 	}

// 	renderPlay() {
// 		return this.state.previousQuestions.length === questionsPerPlay ||
// 			this.state.forceEnd ? (
// 			this.renderFinalScore()
// 		) : this.state.showAnswer ? (
// 			this.renderCorrectAnswer()
// 		) : (
// 			<div className='quiz-play-holder'>
// 				<div className='quiz-question'>
// 					{this.state.currentQuestion.question}
// 				</div>
// 				<form onSubmit={this.submitGuess}>
// 					<input type='text' name='guess' onChange={this.handleChange} />
// 					<input
// 						className='submit-guess button'
// 						type='submit'
// 						value='Submit Answer'
// 					/>
// 				</form>
// 			</div>
// 		);
// 	}

// 	render() {
// 		return this.state.quizCategory ? this.renderPlay() : this.renderPrePlay();
// 	}
// }

// export default QuizView;
