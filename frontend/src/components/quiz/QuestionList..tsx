import '../../stylesheets/App.css';
import QuestionCard from '../questions/QuestionCard';
// import Search from '../shared/Search.';
import { useQuiz } from '../../context/QuizProvider';

const QuestionList = () => {
	const { questions, categories } = useQuiz();
	// useEffect(() => {
	// 	getQuestions();
	// }, []);

	// const getQuestions = () => {
	// 	$.ajax({
	// 		url: `/questions?page=${this.state.page}`, //TODO: update request URL
	// 		type: 'GET',
	// 		success: (result) => {
	// 			this.setState({
	// 				questions: result.questions,
	// 				totalQuestions: result.total_questions,
	// 				categories: result.categories,
	// 				currentCategory: result.current_category,
	// 			});
	// 			return;
	// 		},
	// 		error: (error) => {
	// 			alert('Unable to load questions. Please try your request again');
	// 			return;
	// 		},
	// 	});
	// };
	return (
		<div className='question-view'>
			<div className='categories-list'>
				<h2
				// onClick={() => {
				// 	this.getQuestions();
				// }}
				>
					Categories
				</h2>
				<ul>
					{Object.entries(categories).map(([key, value]) => (
						<li key={key}>
							{value}
							<img
								className='category'
								alt={`${value.toLowerCase()}`}
								src={`${value.toLowerCase()}.svg`}
							/>
						</li>
					))}
				</ul>
				{/* <Search submitSearch={this.submitSearch} /> */}
			</div>
			<div className='questions-list'>
				<h2>Questions</h2>
				{questions.map((question, i) => (
					<QuestionCard key={i} questionItem={question} />
				))}
				{/* <div className='pagination-menu'>{this.createPagination()}</div> */}
			</div>
		</div>
	);
};

// class QuestionView extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			questions: [],
// 			page: 1,
// 			totalQuestions: 0,
// 			categories: {},
// 			currentCategory: null,
// 		};
// 	}

// selectPage(num) {
// 	this.setState({ page: num }, () => this.getQuestions());
// }

// createPagination() {
// 	let pageNumbers = [];
// 	let maxPage = Math.ceil(this.state.totalQuestions / 10);
// 	for (let i = 1; i <= maxPage; i++) {
// 		pageNumbers.push(
// 			<span
// 				key={i}
// 				className={`page-num ${i === this.state.page ? 'active' : ''}`}
// 				onClick={() => {
// 					this.selectPage(i);
// 				}}
// 			>
// 				{i}
// 			</span>
// 		);
// 	}
// 	return pageNumbers;
// }

// getByCategory = (id) => {
// 	$.ajax({
// 		url: `/categories/${id}/questions`, //TODO: update request URL
// 		type: 'GET',
// 		success: (result) => {
// 			this.setState({
// 				questions: result.questions,
// 				totalQuestions: result.total_questions,
// 				currentCategory: result.current_category,
// 			});
// 			return;
// 		},
// 		error: (error) => {
// 			alert('Unable to load questions. Please try your request again');
// 			return;
// 		},
// 	});
// };

// submitSearch = (searchTerm) => {
// 	$.ajax({
// 		url: `/questions/search`, //TODO: update request URL
// 		type: 'POST',
// 		dataType: 'json',
// 		contentType: 'application/json',
// 		data: JSON.stringify({ searchTerm: searchTerm }),
// 		xhrFields: {
// 			withCredentials: true,
// 		},
// 		crossDomain: true,
// 		success: (result) => {
// 			this.setState({
// 				questions: result.questions,
// 				totalQuestions: result.total_questions,
// 				currentCategory: result.current_category,
// 			});
// 			return;
// 		},
// 		error: (error) => {
// 			alert('Unable to load questions. Please try your request again');
// 			return;
// 		},
// 	});
// };

// questionAction = (id) => (action) => {
// 	if (action === 'DELETE') {
// 		if (window.confirm('are you sure you want to delete the question?')) {
// 			$.ajax({
// 				url: `/questions/${id}`, //TODO: update request URL
// 				type: 'DELETE',
// 				success: (result) => {
// 					this.getQuestions();
// 				},
// 				error: (error) => {
// 					alert('Unable to load questions. Please try your request again');
// 					return;
// 				},
// 			});
// 		}
// 	}
// };

// 	render() {
// 		return (

// 		);
// 	}
// }

export default QuestionList;
