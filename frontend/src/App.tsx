import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './stylesheets/App.css';
import QuestionList from './components/quiz/QuestionList.';
import Header from './components/shared/Header';
import FormView from './components/questions/AddQuestion';
import QuizView from './components/categories/QuizView.';
import { QuestionProvider } from './context/Question/QuestionProvider';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<QuestionProvider>
					<Routes>
						<Route path='/' element={<QuestionList />} />
						<Route path='/add' element={<FormView />} />
						<Route path='/play' element={<QuizView />} />
					</Routes>
				</QuestionProvider>
			</BrowserRouter>
		</div>
	);
};

export default App;
