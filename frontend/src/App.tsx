import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './stylesheets/App.css';
import QuestionView from './components/quiz/QuestionView.';
import Header from './components/shared/Header';
import FormView from './components/questions/AddQuestion';
import QuizView from './components/categories/QuizView.';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Header />
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<QuestionView />} />
						<Route path='/add' element={<FormView />} />
						<Route path='/play' element={<QuizView />} />
						<Route element={<QuestionView />} />
					</Routes>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
