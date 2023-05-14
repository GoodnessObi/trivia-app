import '../../stylesheets/QuizView.css';
import CategoriesList from './Categories';
import { useQuiz } from '../../context/Quiz/QuizProvider';
import PlayQuizForm from './QuizForm';
import { useQuestion } from '../../context/Question/QuestionProvider';

export default function QuizView() {
	const { quizState } = useQuiz();
	const { categories } = useQuestion();

	// const selectCategory = (categoryType: string, categoryId: number) => {
	// 	const category = { type: categoryType, id: categoryId };
	// 	let prevQuestions: string[] = [];

	// 	if (quizState.currentQuestion !== undefined) {
	// 		prevQuestions = [
	// 			...quizState.previousQuestions,
	// 			quizState.currentQuestion.id,
	// 		];
	// 	}

	// 	quizDispatch({
	// 		type: 'SET_CATEGORY',
	// 		payload: {
	// 			quizCategory: category,
	// 			previousQuestions: [...prevQuestions],
	// 		},
	// 	});
	// };

	// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	quizDispatch({
	// 		type: 'MAKE_GUESS',
	// 		payload: { guess: event.target.value },
	// 	});
	// };

	// const submitGuess = (event: React.MouseEvent<HTMLElement>) => {
	// 	event.preventDefault();
	// 	quizDispatch({ type: 'SUBMIT_GUESS' });
	// };

	return (
		<>
			{quizState.endGame ? (
				<CategoriesList categories={categories} />
			) : (
				<PlayQuizForm />
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
// 			endGame: false,
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
