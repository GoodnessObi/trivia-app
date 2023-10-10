import styled from 'styled-components';

const QuestionSection = styled.div`
	margin-top: 48px;

	h2 {
		color: #69668d;
		padding-bottom: 12px;
	}
`;

const SectionHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const FIlterButton = styled.div`
	@media (min-width: 768px) {
		display: none;
	}
`;

const QuestionCards = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-gap: 12px;

	@media (min-width: 1025px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export { QuestionSection, SectionHeader, FIlterButton, QuestionCards };
