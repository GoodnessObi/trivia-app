import React, { useState } from 'react';
import '../../stylesheets/FormView.css';
import { useQuestion } from '../../context/Question/QuestionProvider';

const FormView = () => {
	const { categories, questionDispatch } = useQuestion();
	const initialState = {
		question: '',
		answer: '',
		difficulty: 1,
		category: 1,
	};
	const [formState, setFormState] = useState({ ...initialState });

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLSelectElement>
	): void => {
		const { name, value } = e.target;
		setFormState((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const clearForm = () => {
		setFormState(initialState);
	};

	const submitQuestion = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formState),
		};
		try {
			const fetchResponse = await fetch('/questions', requestOptions);
			const data = await fetchResponse.json();
			questionDispatch({
				type: 'ADD_QUESTION',
				payload: { question: formState },
			});
			clearForm();
			return data;
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div id='add-form'>
			<h2>Add a New Trivia Question</h2>
			<form
				className='form-view'
				id='add-question-form'
				onSubmit={(e) => submitQuestion(e)}
			>
				<label>
					Question
					<input
						type='text'
						name='question'
						value={formState.question}
						onChange={(e) => handleChange(e)}
					/>
				</label>
				<label>
					Answer
					<input
						type='text'
						name='answer'
						value={formState.answer}
						onChange={(e) => handleChange(e)}
					/>
				</label>
				<label>
					Difficulty
					<select
						name='difficulty'
						value={+formState.difficulty}
						onChange={(e) => handleChange(e)}
					>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3'>3</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
					</select>
				</label>
				<label>
					Category
					<select
						name='category'
						value={+formState.category}
						onChange={(e) => handleChange(e)}
					>
						{Object.keys(categories).map((id) => {
							return (
								<option key={id} value={id}>
									{categories[+id]}
								</option>
							);
						})}
					</select>
				</label>
				<input type='submit' className='button' value='Submit' />
			</form>
		</div>
	);
};

export default FormView;
