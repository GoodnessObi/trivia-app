import styled from 'styled-components';

export const Card = styled.div`
	background-color: #fff;
	padding: 12px;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	p {
		font-size: 16px;

		&.answer {
			font-size: 12px;
		}
	}
`;

export const CardAction = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const CardStatus = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const StyledButton = styled.button`
	cursor: pointer;
	color: #f3f3fd;
	background-color: #736ced;
	border-radius: 8px;
	border: 0px;
	padding: 8px;
`;
