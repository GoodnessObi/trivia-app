import { Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import QuestionsView from './pages/Questions/Questions';
import SideNav from './components/shared/SideNav';
import FormView from './pages/AddQuestion/AddQuestion';
import QuizView from './pages/PlayQuiz/QuizView';
import theme from './styles/theme';

const Wrapper = styled.div`
	min-height: 100vh;
	color: #7a7987;

	@media (min-width: ${({ theme }) => theme.mediaQuery.mobile}) {
		background-color: #e3eeff;
		padding: 30px;
	}
`;

const Page = styled.div`
	display: flex;
	border-radius: 50px;
	background-color: #fef9ff;
	min-height: calc(100vh - 60px);
`;

const Body = styled.div`
	width: 100%;

	@media (min-width: 1025px) {
		width: calc(100% - 150px);
	}
`;

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Wrapper>
				<Page>
					<SideNav />
					<Body>
						<Routes>
							<Route path='/' element={<QuestionsView />} />
							<Route path='/add' element={<FormView />} />
							<Route path='/play' element={<QuizView />} />
						</Routes>
					</Body>
				</Page>
			</Wrapper>
		</ThemeProvider>
	);
};

export default App;
