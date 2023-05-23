import React, { useState } from 'react';
import '../../stylesheets/FormView.css';
import { useQuestion } from '../../context/Question/QuestionProvider';
import { QuestionItem } from '../../types';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
	Formik,
	Field,
	Form,
	FormikHelpers,
	FormikProps,
	FieldProps,
} from 'formik';

const PageWrapper = styled.div`
	min-height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const FormWrapper = styled.div`
	// height: 50%;
	border: 1px solid red;
`;

const ImageWrapper = styled.div`
	// height: 50%;
	border: 2px solid red;
	border-radius: 8px;
	width: 100%;
	background: #fff;
	border-radius: 0 50px 50px 0;
	display: flex;
	align-items: center;
	img {
		max-width: 100%;
		width: 100%;
		height: auto;
	}
`;

const FormView = () => {
	const navigate = useNavigate();
	const { categories, questionDispatch } = useQuestion();
	const initialState = {
		question: '',
		answer: '',
		difficulty: 1,
		category: 1,
	};

	const submitQuestion = async (values: Omit<QuestionItem, 'id'>) => {
		// e.preventDefault();
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(values),
		};
		try {
			const fetchResponse = await fetch('/questions', requestOptions);
			const data = await fetchResponse.json();
			console.log(data, 'adddd');
			questionDispatch({
				type: 'ADD_QUESTION',
				payload: { question: values },
			});
			return navigate('/');
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<PageWrapper>
			{/* <h2>Add a New Trivia Question</h2> */}
			<FormWrapper>
				<Formik
					initialValues={initialState}
					onSubmit={(values, actions) => {
						console.log({ values, actions });
						submitQuestion(values);
						// alert(JSON.stringify(values, null, 2));
						// actions.setSubmitting(false);
					}}
				>
					<Form>
						<label htmlFor='question'>Question</label>
						<Field id='question' name='question' placeholder='Question' />

						<label htmlFor='answer'>Answer</label>
						<Field id='answer' name='answer' placeholder='Answer' />

						<label htmlFor='difficulty'>Difficulty</label>
						<Field name='difficulty' as='select'>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
						</Field>

						<label htmlFor='category'>Category</label>

						<Field name='category' as='select'>
							{Object.keys(categories).map((id) => {
								return (
									<option key={id} value={id}>
										{categories[+id]}
									</option>
								);
							})}
						</Field>

						<input type='submit' className='button' value='Submit' />
					</Form>
				</Formik>
			</FormWrapper>

			<ImageWrapper>
				<img src='/picture_1.jpg' alt='' />
			</ImageWrapper>
		</PageWrapper>
	);
};

export default FormView;
