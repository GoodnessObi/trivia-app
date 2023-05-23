import { BrowserRouter, Routes, Route } from 'react-router-dom';
import QuestionList from './components/questions/QuestionList.';
import SideNav from './components/shared/SideNav';
import FormView from './components/questions/AddQuestion';
import QuizView from './components/quiz/QuizView.';
import { QuestionProvider } from './context/Question/QuestionProvider';
import { QuizProvider } from './context/Quiz/QuizProvider';
import styled from 'styled-components';

const Wrapper = styled.div`
	background-color: #e3eeff;
	padding: 30px;
	min-height: 100vh;
	color: #7a7987;
`;

const Page = styled.div`
	display: flex;
	border-radius: 50px;
	background-color: #fef9ff;
	min-height: calc(100vh - 60px);
`;

const Body = styled.div`
	width: calc(100% - 150px);
`;

const App = () => {
	return (
		<Wrapper className='App'>
			<Page>
				<BrowserRouter>
					<SideNav />
					<QuestionProvider>
						<QuizProvider>
							<Body>
								<Routes>
									<Route path='/' element={<QuestionList />} />
									<Route path='/add' element={<FormView />} />
									<Route path='/play' element={<QuizView />} />
								</Routes>
							</Body>
						</QuizProvider>
					</QuestionProvider>
				</BrowserRouter>
			</Page>
		</Wrapper>
	);
};

export default App;
