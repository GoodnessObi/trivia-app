import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QuestionProvider } from './context/Question/QuestionProvider';
import { QuizProvider } from './context/Quiz/QuizProvider';

// ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<QuestionProvider>
				<QuizProvider>
					<App />
				</QuizProvider>
			</QuestionProvider>
		</BrowserRouter>
	</React.StrictMode>
);
