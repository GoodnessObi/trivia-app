import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './stylesheets/App.css';
import QuestionList from './components/quiz/QuestionList.';
import Header from './components/shared/Header';
import FormView from './components/questions/AddQuestion';
import QuizView from './components/categories/QuizView.';
import { QuizProvider } from './context/QuizProvider';

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<QuizProvider>
					<Routes>
						<Route path='/' element={<QuestionList />} />
						<Route path='/add' element={<FormView />} />
						<Route path='/play' element={<QuizView />} />
					</Routes>
				</QuizProvider>
			</BrowserRouter>
		</div>
	);
};

export default App;
