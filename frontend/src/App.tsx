import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './stylesheets/App.css';
import FormView from './quiz/components/FormView';
import QuestionView from './quiz/components/QuestionView.';
import Header from './quiz/components/Header';
import QuizView from './quiz/components/QuizView.';

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
