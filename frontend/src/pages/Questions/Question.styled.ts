import styled from 'styled-components';

export const Page = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	min-height: 100%;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

export const QuestionView = styled.div`
	background-color: transparent;
	padding: 18px;

	@media (min-width: 768px) {
		flex-basis: 70%;
	}

	@media (min-width: 1025px) {
		// flex-basis: 70%;
		padding: 36px;
	}
`;
