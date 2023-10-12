import { useEffect, useState } from 'react';
import {
	QuestionSection,
	SectionHeader,
	FIlterButton,
	QuestionCards,
} from './QuestionList.styled';
import QuestionCard from './QuestionCard';
import { useQuestion } from '../../../../context/Question/QuestionProvider';
import Pagination from '../../../../components/shared/Pagination';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';

const QuestionList = () => {
	const { questions, totalQuestions, questionDispatch } = useQuestion();
	const [currentPage, setCurrentPage] = useState<number>(1);

	useEffect(() => {
		try {
			const fetchData = async () => {
				const res = await fetch(`/questions?page=${currentPage}`);
				const data = await res.json();
				questionDispatch({ type: 'FETCH', payload: { data } });
			};
			fetchData();
		} catch (e) {
			console.log(e, 'fetch');
		}
		// eslint-disable-next-line
	}, [currentPage]);

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

	const handlePageChange = (value: number) => {
		setCurrentPage(value);
	};

	return (
		<QuestionSection>
			<SectionHeader>
				<h2>Questions</h2>
				<FIlterButton>
					<ManageSearchOutlinedIcon />
				</FIlterButton>
			</SectionHeader>
			<QuestionCards>
				{questions.map((question, i) => (
					<QuestionCard
						key={i}
						questionItem={question}
						deleteQuestion={deleteQuestion}
					/>
				))}
			</QuestionCards>
			<Pagination totalItems={totalQuestions} onChange={handlePageChange} />
		</QuestionSection>
	);
};

export default QuestionList;
