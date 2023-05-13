import '../../stylesheets/QuizView.css';
import CategoriesList from './Categories';
import { useQuizReducer } from '../../context/Quiz/useQuizReducer';
import PlayQuizForm from './QuizForm';
import { useQuestion } from '../../context/Question/QuestionProvider';
import { useState } from 'react';

export default function QuizView() {
	const [quizState, quizDispatch] = useQuizReducer();
	const [answer, setAnswer] = useState('');
	const { categories } = useQuestion();

	const selectCategory = (categoryType: string, categoryId: number) => {
		const category = { type: categoryType, id: categoryId };
		let prevQuestions: string[] = [];

		if (quizState.currentQuestion !== undefined) {
			prevQuestions = [
				...quizState.previousQuestions,
				quizState.currentQuestion.id,
			];
		}

		quizDispatch({
			type: 'SET_CATEGORY',
			payload: {
				quizCategory: category,
				previousQuestions: [...prevQuestions],
			},
		});
	};

	const handleChange = (event) => {
		setAnswer(event.target.value);
	};

	const submitAnswer = (event) => {
		setAnswer(event.target.value);
	};

	return (
		<>
			{quizState.currentQuestion.question !== '' ? (
				<PlayQuizForm
					currentQuestion={quizState.currentQuestion}
					handleChange={handleChange}
					answer={answer}
				/>
			) : (
				<CategoriesList
					categories={categories}
					selectCategory={selectCategory}
				/>
			)}
		</>
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
// 			guess: ''
// 			forceEnd: false,
// 		};
// 	}

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
//

// 	submitGuess = (event) => {
// 		event.preventDefault();
// 		let evaluate = this.evaluateAnswer();
// 		this.setState({
// 			numCorrect: !evaluate ? this.state.numCorrect : this.state.numCorrect + 1,
// 			showAnswer: true,
// 		});
// 	};

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
