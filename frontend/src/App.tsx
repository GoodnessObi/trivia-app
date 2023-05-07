import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './stylesheets/App.css';
import QuestionList from './components/quiz/QuestionList.';
import Header from './components/shared/Header';
import FormView from './components/questions/AddQuestion';
import QuizView from './components/categories/QuizView.';
import { QuizProvider } from './context/QuizProvider';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header />
				<QuizProvider>
					<QuestionList />
				</QuizProvider>
				{/* <BrowserRouter>
					<Routes>
						<Route path='/' element={<QuestionList />} />
						<Route path='/add' element={<FormView />} />
						<Route path='/play' element={<QuizView />} />
						<Route element={<QuestionList />} />
					</Routes>
				</BrowserRouter> */}
			</div>
		);
	}
}

export default App;
