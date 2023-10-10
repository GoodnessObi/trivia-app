import styled from 'styled-components';

interface ILi {
	category: string;
}

const catBg: { [key: string]: string } = {
	science: '#E3EEFF',
	art: '#FFF7EC',
	history: '#bef8f5',
	geography: '#E9F8F1',
	entertainment: '#F4DCD3',
	sports: '#E0E3EF',
};

const Categories = styled.div`
	background-color: #fff;
	padding: 18px;
	border-radius: 0 50px 50px 0;

	@media (min-width: 768px) {
		flex-basis: 30%;
	}

	@media (min-width: 1025px) {
		padding: 36px;
		// flex-basis: 30%;
	}

	h2 {
		text-align: center;
		color: #69668d;
		cursor: pointer;
	}

	ul {
		list-style-type: none;
		padding: 0;
		display: grid;
		grid-gap: 12px;
		grid-template-columns: repeat(2, 1fr);

		@media (min-width: 768px) {
			grid-template-columns: repeat(1, 1fr);
		}

		@media (min-width: 1025px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
`;

const ListItem = styled.li<ILi>`
	text-align: center;
	background: ${(props) => catBg[props.category]};
	display: flex;
	flex-direction: column;
	align-items: center;
	padding 16px;
	margin-bottom: 16px;
	cursor: pointer;
	border-radius: 8px;
`;

export { ListItem, Categories };
