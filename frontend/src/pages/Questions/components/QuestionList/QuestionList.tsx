import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import {
	QuestionSection,
	SectionHeader,
	FIlterButton,
	QuestionCards,
} from './QuestionList.styled';
import QuestionCard from './QuestionCard';
import { useQuestion } from '../../../../context/Question/QuestionProvider';

const QuestionList = () => {
	const { questions, questionDispatch } = useQuestion();

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
			{/* <div className='pagination-menu'>{this.createPagination()}</div> */}
		</QuestionSection>
	);
};

export default QuestionList;
