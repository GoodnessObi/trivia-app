import '../../stylesheets/App.css';
import QuestionCard from '../questions/QuestionCard';
// import Search from '../shared/Search.';
import { useQuestion } from '../../context/Question/QuestionProvider';

const QuestionList = () => {
	const { questions, categories, questionDispatch } = useQuestion();

	const deleteQuestion = async (id: string) => {
		try {
			const fetchResponse = await fetch(`/questions/${id}`, {
				method: 'DELETE',
			});
			const data = await fetchResponse.json();
			questionDispatch({
				type: 'DELETE',
				payload: { questionId: data.deleted },
			});
		} catch (e) {
			console.log(e);
		}
	};

	const fetchByCategory = async (id: string) => {
		try {
			const res = await fetch(`/categories/${id}/questions`);
			const data = await res.json();
			questionDispatch({ type: 'FETCH_BY_CATEGORY', payload: { data } });
		} catch (e) {
			console.log(e);
		}
	};

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
					{Object?.keys(categories).map((key) => (
						<li key={key} onClick={() => fetchByCategory(key)}>
							{categories[+key]}
							<img
								className='category'
								alt={`${categories[+key].toLowerCase()}`}
								src={`${categories[+key].toLowerCase()}.svg`}
							/>
						</li>
					))}
				</ul>
				{/* <Search submitSearch={this.submitSearch} /> */}
			</div>
			<div className='questions-list'>
				<h2>Questions</h2>
				{questions.map((question, i) => (
					<QuestionCard
						key={i}
						questionItem={question}
						deleteQuestion={deleteQuestion}
					/>
				))}
				{/* <div className='pagination-menu'>{this.createPagination()}</div> */}
			</div>
		</div>
	);
};

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

export default QuestionList;
