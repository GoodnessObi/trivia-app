import React, { useEffect } from 'react';
import { useQuestion } from '../context/Question/QuestionProvider';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, TextField, MenuItem } from '@mui/material';

const questionSchema = z.object({
	question: z.string().trim().min(1, { message: 'Question is required' }),
	answer: z.string().trim().min(1, { message: 'Answer is required' }),
	difficulty: z.coerce.number().refine((val) => val !== 0, {
		message: 'Pick a Difficulty level',
	}),
	category: z.coerce.number().refine((val) => val !== 0, {
		message: 'Select a category',
	}),
});

type questionType = z.infer<typeof questionSchema>;

const FormView = () => {
	const navigate = useNavigate();
	const { categories, questionDispatch } = useQuestion();

	useEffect(() => {
		if (Object?.keys(categories).length === 0) {
			try {
				const fetchData = async () => {
					const res = await fetch(`/categories`);
					const data = await res.json();
					questionDispatch({
						type: 'FETCH_CATEGORIES',
						payload: { data: data.categories },
					});
				};
				fetchData();
			} catch (e) {
				console.log(e, 'fetch');
			}
		}
		// eslint-disable-next-line
	}, []);

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<questionType>({
		resolver: zodResolver(questionSchema),
	});

	const onSubmit = async (values: questionType) => {
		console.log(values, 'gdfhghfdh');
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(values),
		};
		try {
			const fetchResponse = await fetch('/questions', requestOptions);
			const data = await fetchResponse.json();

			questionDispatch({
				type: 'ADD_QUESTION',
				payload: { question: { id: data.created, ...values } },
			});
			return navigate('/');
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<PageWrapper>
			<FormWrapper>
				<h2>Add New Trivia Question</h2>

				<Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate>
					<TextField
						{...register('question')}
						error={!!errors.question?.message}
						helperText={
							errors.question?.message ? errors.question?.message : ''
						}
						id='question'
						label='Question'
						variant='outlined'
						defaultValue=''
						margin='normal'
						fullWidth
					/>

					<TextField
						{...register('answer')}
						error={!!errors.answer?.message}
						helperText={errors.answer?.message ? errors.answer?.message : ''}
						id='answer'
						label='Answer'
						defaultValue=''
						variant='outlined'
						margin='normal'
						fullWidth
					/>
					<TextField
						{...register('category', {
							valueAsNumber: true,
						})}
						error={!!errors.category?.message}
						helperText={
							errors.category?.message ? errors.category?.message : ''
						}
						id='category'
						select
						label='Category'
						margin='normal'
						defaultValue='0'
						fullWidth
					>
						<MenuItem key={123} value='0'>
							Select Category
						</MenuItem>
						{Object?.keys(categories).length > 0 &&
							Object.keys(categories).map((key) => (
								<MenuItem key={key} value={key}>
									{categories[+key]}
								</MenuItem>
							))}
					</TextField>
					<TextField
						{...register('difficulty', {
							valueAsNumber: true,
						})}
						error={!!errors.difficulty?.message}
						helperText={
							errors.difficulty?.message ? errors.difficulty?.message : ''
						}
						id='difficulty'
						select
						label='Difficulty'
						defaultValue='0'
						margin='normal'
						fullWidth
					>
						<MenuItem key={0} value='0'>
							Select Difficulty
						</MenuItem>
						<MenuItem key={1} value='1'>
							1
						</MenuItem>
						<MenuItem key={2} value='2'>
							2
						</MenuItem>
						<MenuItem key={3} value='3'>
							3
						</MenuItem>
						<MenuItem key={4} value='4'>
							4
						</MenuItem>
						<MenuItem key={5} value='5'>
							5
						</MenuItem>
					</TextField>

					<input type='submit' />
				</Box>
			</FormWrapper>

			<ImageWrapper>
				<img src='/picture_1.jpg' alt='' />
			</ImageWrapper>
		</PageWrapper>
	);
};

export const PageWrapper = styled.div`
	min-height: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const FormWrapper = styled.div`
	padding: 36px;
`;

export const ImageWrapper = styled.div`
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

export default FormView;
